import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  SafeAreaView
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, getBottomSpace } from './styles';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';
import { ServiceProvider } from '../../services/mockData';
import { apiService } from '../../services/apiService';
import { useCart } from '../../contexts/CartContext';

interface ServiceItem {
  id: number;
  name: string;
  price: number;
  duration?: string;
  category: string;
  description?: string;
}

interface CartItem extends ServiceItem {
  quantity: number;
}

export default function VendorDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { cart, addToCart, removeFromCart, getTotalAmount, getTotalItems } = useCart();
  
  const [provider, setProvider] = useState<ServiceProvider | null>(null);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Financial consulting']);
  const [loading, setLoading] = useState(true);

  // Mock service data
  const mockServices: ServiceItem[] = [
    {
      id: 1,
      name: 'Mutual Funds & Investment Planning',
      price: 1500,
      duration: '1hour',
      category: 'Financial consulting',
      description: 'Professional mutual fund advisory and investment planning services'
    },
    {
      id: 2,
      name: 'Tax Planning & Filing',
      price: 2000,
      duration: '2hours',
      category: 'Financial consulting',
      description: 'Complete tax planning and filing assistance'
    },
    {
      id: 3,
      name: 'Retirement Planning',
      price: 2500,
      duration: '1.5hours',
      category: 'Financial consulting',
      description: 'Comprehensive retirement planning consultation'
    },
    {
      id: 4,
      name: 'Insurance Advisory',
      price: 1200,
      duration: '45min',
      category: 'Insurance Services',
      description: 'Life and health insurance advisory services'
    }
  ];

  useEffect(() => {
    loadVendorData();
  }, [params.providerId]);

  const loadVendorData = async () => {
    try {
      setLoading(true);
      if (params.providerId) {
        const providerId = parseInt(params.providerId as string);
        
        // Load provider data
        const providerData = await apiService.getProviderById(providerId);
        setProvider(providerData || null);
        
        // Load services for this provider from API
        try {
          const providerServices = await apiService.getProviderServices(providerId);
          setServices(providerServices);
        } catch (serviceError) {
          console.warn('Failed to load services from API, falling back to mock data:', serviceError);
          // Fallback to mock data if API fails
          setServices(mockServices);
        }
      }
    } catch (error) {
      console.error('Error loading vendor data:', error);
      // Fallback to mock data if provider loading fails
      setServices(mockServices);
    } finally {
      setLoading(false);
    }
  };

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleAddToCart = (service: ServiceItem) => {
    addToCart({
      id: service.id.toString(),
      name: service.name,
      price: service.price,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop&crop=center',
      category: service.category,
    });
  };

  const handleRemoveFromCart = (serviceId: number) => {
    removeFromCart(serviceId.toString());
  };

  const getItemQuantity = (serviceId: number) => {
    const item = cart.find(item => item.id === serviceId.toString());
    return item ? item.quantity : 0;
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedServices = filteredServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServiceItem[]>);

  if (loading || !provider) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollContent}
        contentContainerStyle={[
          styles.contentContainer,
          { paddingBottom: getBottomSpace(insets) }
        ]}
      >
        {/* Header with Banner */}
        <View style={styles.bannerContainer}>
          <Image source={{ uri: provider.image }} style={styles.bannerImage} />
          <View style={styles.bannerOverlay}>
            <TouchableOpacity 
              style={styles.backButton} 
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color={theme.colors.text.light} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.favoriteButton}>
              <Ionicons name="heart-outline" size={24} color={theme.colors.text.light} />
            </TouchableOpacity>
          </View>
          {provider.isNew && (
            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>New</Text>
            </View>
          )}
        </View>

        {/* Company Info */}
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>{provider.name}</Text>
          <Text style={styles.companyLocation}>{provider.location}</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={theme.colors.text.secondary} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={theme.colors.text.secondary}
          />
        </View>

        {/* Services List */}
        <View style={styles.content}>
          <Text style={styles.itemsHeader}>Items</Text>
          {Object.entries(groupedServices).map(([category, categoryServices]) => (
            <View key={category} style={styles.categoryContainer}>
              <TouchableOpacity 
                style={styles.categoryHeader}
                onPress={() => toggleCategory(category)}
              >
                <View style={styles.categoryInfo}>
                  <Text style={styles.categoryName}>{category}</Text>
                  <Text style={styles.categoryCount}>{categoryServices.length} item{categoryServices.length !== 1 ? 's' : ''}</Text>
                </View>
                <Ionicons 
                  name={expandedCategories.includes(category) ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color={theme.colors.text.secondary} 
                />
              </TouchableOpacity>
              {expandedCategories.includes(category) && (
                <View style={styles.servicesList}>
                  {categoryServices.map((service) => {
                    const quantity = getItemQuantity(service.id);
                    return (
                      <View key={service.id} style={styles.serviceItem}>
                        <View style={styles.serviceImage}>
                          <Image 
                            source={{ uri: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop' }} 
                            style={styles.serviceIcon}
                          />
                        </View>
                        <View style={styles.serviceDetails}>
                          <Text style={styles.serviceName}>{service.name}</Text>
                          <Text style={styles.servicePrice}>
                            ₹{service.price.toLocaleString('en-IN')} {service.duration && `/ ${service.duration}`}
                          </Text>
                        </View>
                        <View style={styles.quantityContainer}>
                          {quantity > 0 ? (
                            <View style={styles.quantityControls}>
                              <TouchableOpacity 
                                style={styles.quantityButton}
                                onPress={() => handleRemoveFromCart(service.id)}
                              >
                                <Ionicons name="remove" size={16} color={theme.colors.text.light} />
                              </TouchableOpacity>
                              <Text style={styles.quantityText}>{quantity}</Text>
                              <TouchableOpacity 
                                style={styles.quantityButton}
                                onPress={() => handleAddToCart(service)}
                              >
                                <Ionicons name="add" size={16} color={theme.colors.text.light} />
                              </TouchableOpacity>
                            </View>
                          ) : (
                            <TouchableOpacity 
                              style={styles.addButton}
                              onPress={() => handleAddToCart(service)}
                            >
                              <Ionicons name="add" size={20} color={theme.colors.accent} />
                            </TouchableOpacity>
                          )}
                        </View>
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          ))}
          <View style={styles.bottomSpacing} />
        </View>
      </ScrollView>

      {/* Cart Summary - Fixed at bottom */}
      {cart.length > 0 && (
        <View style={styles.cartSummary}>
          <View style={styles.cartInfo}>
            <Text style={styles.cartAmount}>₹{getTotalAmount().toLocaleString('en-IN')}</Text>
            <Text style={styles.cartItems}>{getTotalItems()} Item{getTotalItems() !== 1 ? 's' : ''} • 1 quantity</Text>
          </View>
          <TouchableOpacity 
            style={styles.viewCartButton}
            onPress={() => router.push('/checkout' as any)}
          >
            <Text style={styles.viewCartText}>View Cart</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}



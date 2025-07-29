import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import { apiService } from '../services/apiService';
import { ServiceProvider, ServiceCategory } from '../services/mockData';
import { VendorCard } from '../components/ui/VendorCard';

export default function ServicesScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [providers, setProviders] = useState<ServiceProvider[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [params.categoryId]);

  useEffect(() => {
    if (selectedCategory) {
      loadProvidersByCategory(selectedCategory);
    } else {
      loadAllProviders();
    }
  }, [selectedCategory]);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Load categories for filter tabs
      const categoriesData = await apiService.getCategories();
      setCategories(categoriesData);
      
      if (params.categoryId) {
        // Load providers for specific category
        const categoryId = parseInt(params.categoryId as string);
        setSelectedCategory(categoryId);
        const providersData = await apiService.getProvidersByCategory(categoryId);
        setProviders(providersData);
      } else {
        // Load all providers
        const providersData = await apiService.getAllProviders();
        setProviders(providersData);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadProvidersByCategory = async (categoryId: number) => {
    try {
      const providersData = await apiService.getProvidersByCategory(categoryId);
      setProviders(providersData);
    } catch (error) {
      console.error('Error loading providers:', error);
    }
  };

  const loadAllProviders = async () => {
    try {
      const providersData = await apiService.getAllProviders();
      setProviders(providersData);
    } catch (error) {
      console.error('Error loading providers:', error);
    }
  };

  const handleCategoryPress = (categoryId: number) => {
    if (selectedCategory === categoryId) {
      // If same category selected, show all
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const handleProviderPress = (provider: ServiceProvider) => {
    // Navigate to provider details
    router.push({
      pathname: '/vendor/[providerId]',
      params: { providerId: provider.id.toString() }
    });
  };

  const renderProviderItem = ({ item }: { item: ServiceProvider }) => (
    <VendorCard 
      provider={item} 
      onPress={() => handleProviderPress(item)}
    />
  );

  const renderCategoryTab = (category: ServiceCategory) => {
    const isSelected = selectedCategory === category.id;
    return (
      <TouchableOpacity
        key={category.id}
        style={[styles.categoryTab, isSelected && styles.selectedCategoryTab]}
        onPress={() => handleCategoryPress(category.id)}
      >
        <Text 
          style={[styles.categoryTabText, isSelected && styles.selectedCategoryTabText]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {category.name}
        </Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading services...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Services</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Category Filter Tabs */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.categoryContainer}
        contentContainerStyle={styles.categoryScrollContent}
      >
        <TouchableOpacity
          style={[styles.categoryTab, !selectedCategory && styles.selectedCategoryTab]}
          onPress={() => setSelectedCategory(null)}
        >
          <Text 
            style={[styles.categoryTabText, !selectedCategory && styles.selectedCategoryTabText]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            All
          </Text>
        </TouchableOpacity>
        {categories.slice(0, 3).map(renderCategoryTab)}
      </ScrollView>

      {/* Providers List */}
      <FlatList
        data={providers}
        renderItem={renderProviderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="business-outline" size={64} color={theme.colors.text.secondary} />
            <Text style={styles.emptyTitle}>No providers found</Text>
            <Text style={styles.emptyDescription}>
              {selectedCategory 
                ? `No providers available for this category yet.`
                : 'No service providers available at the moment.'
              }
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background.main,
  },
  loadingText: {
    marginTop: theme.spacing.md,
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.secondary,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.background.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  backButton: {
    padding: theme.spacing.sm,
  },
  headerTitle: {
    fontSize: theme.typography.subtitle.fontSize,
    fontWeight: '600',
    color: theme.colors.text.primary,
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
  categoryContainer: {
    backgroundColor: theme.colors.background.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  categoryScrollContent: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
  },
  categoryTab: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.background.main,
    marginRight: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    minWidth: 100,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCategoryTab: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  categoryTabText: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.secondary,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 18,
  },
  selectedCategoryTabText: {
    color: theme.colors.text.light,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 18,
  },
  listContainer: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxl,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xxl * 2,
  },
  emptyTitle: {
    fontSize: theme.typography.subtitle.fontSize,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
  },
  emptyDescription: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    maxWidth: 250,
  },
});

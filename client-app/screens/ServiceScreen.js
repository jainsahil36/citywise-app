import React from 'react';
import { View, FlatList, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { serviceStyles } from '../styles/ServiceScreen.styles';
import { Header } from '../components/common';

const categories = [
  { id: 1, name: 'Consulting', icon: 'briefcase' },
  { id: 2, name: 'Health', icon: 'medical' },
  { id: 3, name: 'Legal', icon: 'document-text' },
  { id: 4, name: 'Education', icon: 'school' },
  { id: 5, name: 'Others', icon: 'apps' },
];

const services = [
  { id: 1, name: 'Financial Planning', icon: 'calculator', category: 'Consulting' },
  { id: 2, name: 'Tax Advisory', icon: 'receipt', category: 'Consulting' },
  { id: 3, name: 'Investment Help', icon: 'trending-up', category: 'Consulting' },
];

const ServiceScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0].name);

  const filteredServices = services.filter(
    service => service.category === selectedCategory
  );

  return (
    <View style={serviceStyles.container}>
      <Header 
        title="Services"
        leftIcon="arrow-back"
        onLeftPress={() => navigation.goBack()}
      />
      
      <ScrollView>
        {/* Categories List */}
        <View style={serviceStyles.categoriesSection}>
          <Text style={serviceStyles.sectionTitle}>Categories</Text>
          <FlatList
            horizontal
            data={categories}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  serviceStyles.categoryTab,
                  selectedCategory === item.name && serviceStyles.categoryTabActive
                ]}
                onPress={() => setSelectedCategory(item.name)}
              >
                <Ionicons 
                  name={item.icon} 
                  size={24} 
                  color={selectedCategory === item.name ? '#fff' : '#4A90E2'} 
                />
                <Text style={[
                  serviceStyles.categoryTabText,
                  selectedCategory === item.name && serviceStyles.categoryTabTextActive
                ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Services Grid */}
        <View style={serviceStyles.servicesSection}>
          <Text style={serviceStyles.sectionTitle}>Available Services</Text>
          <FlatList
            data={filteredServices}
            numColumns={2}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={serviceStyles.serviceCard}
                onPress={() => navigation.navigate('ServiceDetails', { service: item })}
              >
                <View style={serviceStyles.serviceIconContainer}>
                  <Ionicons name={item.icon} size={32} color="#4A90E2" />
                </View>
                <Text style={serviceStyles.serviceName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ServiceScreen;

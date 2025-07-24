import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../styles/common';
import { serviceStyles } from '../styles/ServiceScreen.styles';

const categories = [
  { id: 1, name: 'Consulting', icon: 'briefcase' },
  { id: 2, name: 'Health', icon: 'medkit' },
  { id: 3, name: 'Legal', icon: 'document-text' },
  { id: 4, name: 'Education', icon: 'school' },
  { id: 5, name: 'Others', icon: 'apps' },
];

const services = [
  { id: 1, name: 'Financial Planning', icon: 'cash' },
  { id: 2, name: 'Tax Advisory', icon: 'document' },
  { id: 3, name: 'Investment Help', icon: 'trending-up' },
];

export default function Screen2_Services({ navigation }) {
  return (
    <ScrollView style={serviceStyles.container}>
      {/* Header */}
      <View style={serviceStyles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text.primary} />
        </TouchableOpacity>
        <Text style={serviceStyles.headerTitle}>Services</Text>
      </View>

      {/* Categories List */}
      <View style={serviceStyles.categoriesContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={serviceStyles.categoryItem}
            onPress={() => navigation.navigate('Category', { category: category.name })}
          >
            <Ionicons name={category.icon} size={24} color={theme.colors.primary} />
            <Text style={serviceStyles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Services Grid */}
      <View style={serviceStyles.servicesContainer}>
        <Text style={serviceStyles.headerTitle}>Popular Services</Text>
        <View style={serviceStyles.servicesGrid}>
          {services.map(service => (
            <TouchableOpacity
              key={service.id}
              style={serviceStyles.serviceCard}
              onPress={() => navigation.navigate('ServiceDetails', { service })}
            >
              <Ionicons
                name={service.icon}
                size={32}
                color={theme.colors.primary}
                style={serviceStyles.serviceIcon}
              />
              <Text style={serviceStyles.serviceTitle}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

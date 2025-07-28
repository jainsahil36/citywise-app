import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList, StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import type { FC } from 'react';
import type { ScreenProps, Category, Service } from '../types/screens';

type IonIconName = keyof typeof Ionicons.glyphMap;

interface ServiceCategory extends Category {
  icon: IonIconName;
}

interface PopularService extends Omit<Service, 'title'> {
  name: string;
  icon: IonIconName;
}

const categories: ServiceCategory[] = [
  { id: 1, name: 'Consulting', icon: 'briefcase' },
  { id: 2, name: 'Health', icon: 'medkit' },
  { id: 3, name: 'Legal', icon: 'document-text' },
  { id: 4, name: 'Education', icon: 'school' },
  { id: 5, name: 'Others', icon: 'apps' },
];

const services: PopularService[] = [
  { id: 1, name: 'Financial Planning', icon: 'cash' },
  { id: 2, name: 'Tax Advisory', icon: 'document' },
  { id: 3, name: 'Investment Help', icon: 'trending-up' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
  } as ViewStyle,
  headerTitle: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
  } as TextStyle,
  categoriesContainer: {
    marginTop: theme.spacing.md,
  } as ViewStyle,
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.md,
    marginVertical: theme.spacing.xs,
    marginHorizontal: theme.spacing.md,
  } as ViewStyle,
  categoryText: {
    ...theme.typography.body1,
    marginLeft: theme.spacing.sm,
  } as TextStyle,
  servicesContainer: {
    padding: theme.spacing.md,
  } as ViewStyle,
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  } as ViewStyle,
  serviceCard: {
    width: '48%',
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    alignItems: 'center',
  } as ViewStyle,
  serviceIcon: {
    marginBottom: theme.spacing.sm,
  } as TextStyle,
  serviceTitle: {
    ...theme.typography.body2,
    textAlign: 'center',
  } as TextStyle,
});

const Screen2_Services: FC<ScreenProps> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Services</Text>
      </View>

      {/* Categories List */}
      <View style={styles.categoriesContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryItem}
            onPress={() => navigation.navigate('Category', { category: category.name })}
          >
            <Ionicons name={category.icon} size={24} color={theme.colors.primary} />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Services Grid */}
      <View style={styles.servicesContainer}>
        <Text style={styles.headerTitle}>Popular Services</Text>
        <View style={styles.servicesGrid}>
          {services.map(service => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() => navigation.navigate('ServiceDetails', { service })}
            >
              <Ionicons
                name={service.icon}
                size={32}
                color={theme.colors.primary}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceTitle}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Screen2_Services;

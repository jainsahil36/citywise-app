import React from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native';
import { Header } from '../components/common/Header';
import { CategoryItem } from '../components/common/CategoryItem';
import { ServiceCard } from '../components/common/ServiceCard';
import { Footer } from '../components/common/Footer';
import { theme } from '../constants/theme';
import type { FC } from 'react';
import type { Category, Service, ScreenProps } from '../types/screens';

const categories: Category[] = [
  { id: 1, name: 'Health', icon: 'medical' },
  { id: 2, name: 'Finance', icon: 'cash' },
  { id: 3, name: 'Legal', icon: 'document-text' },
  { id: 4, name: 'IT', icon: 'laptop' },
  { id: 5, name: 'Real Estate', icon: 'home' },
];

const featuredServices: Service[] = [
  { id: 1, title: 'Popular Doctor Services', icon: 'medkit' },
  { id: 2, title: 'Top Finance Experts', icon: 'wallet' },
  { id: 3, title: 'Legal Advice Nearby', icon: 'document' },
];

const footerLinks = [
  { id: 1, name: 'About' },
  { id: 2, name: 'Contact' },
  { id: 3, name: 'Terms' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  section: {
    padding: theme.spacing.md,
    marginVertical: theme.spacing.sm,
  },
  heroSection: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  heroText: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: 'bold',
    color: theme.colors.text.light,
  },
  sectionTitle: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

const HomeScreen: FC<ScreenProps> = ({ navigation }) => {
  const handleCategoryPress = (category: Category): void => {
    navigation.navigate('Category', { category: category.name });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <Header onMenuPress={() => navigation.toggleDrawer()} showMenu title="CityWise" />

      {/* Hero Section */}
      <View style={[styles.heroSection, { marginHorizontal: 16, borderRadius: 12 }]}>
        <Text style={styles.heroText}>Welcome to CityWise</Text>
      </View>

      {/* Category Grid */}
      <View style={[styles.section, { paddingHorizontal: 16 }]}>
        <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>Categories</Text>
        <FlatList
          data={categories}
          numColumns={3}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={{ gap: 16 }}
          renderItem={({ item }) => (
            <CategoryItem 
              category={item} 
              onPress={handleCategoryPress}
            />
          )}
        />
      </View>

      {/* Featured Services */}
      <View style={[styles.section, { paddingHorizontal: 16 }]}>
        <Text style={[styles.sectionTitle, { marginBottom: 16 }]}>Featured Services</Text>
        <FlatList
          data={featuredServices}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingRight: 16 }}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          renderItem={({ item }) => (
            <ServiceCard 
              service={item}
              onPress={() => navigation.navigate('Services', { service: item.title })}
            />
          )}
        />
      </View>

      {/* Footer */}
      <Footer links={footerLinks} />
    </ScrollView>
  );
};

export default HomeScreen;

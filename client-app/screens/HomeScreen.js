import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Header, CategoryItem, ServiceCard, Footer } from '../components/common';
import { commonStyles } from '../styles/common/styles';

const categories = [
  { id: 1, name: 'Health', icon: 'medical' },
  { id: 2, name: 'Finance', icon: 'cash' },
  { id: 3, name: 'Legal', icon: 'document-text' },
  { id: 4, name: 'IT', icon: 'laptop' },
  { id: 5, name: 'Real Estate', icon: 'home' },
];

const featuredServices = [
  { id: 1, title: 'Popular Doctor Services', icon: 'medkit' },
  { id: 2, title: 'Top Finance Experts', icon: 'wallet' },
  { id: 3, title: 'Legal Advice Nearby', icon: 'document' },
];

const footerLinks = [
  { id: 1, name: 'About' },
  { id: 2, name: 'Contact' },
  { id: 3, name: 'Terms' },
];

const HomeScreen = ({ navigation }) => {
  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category: category.name });
  };

  return (
    <ScrollView style={commonStyles.container} contentContainerStyle={{ paddingBottom: 24 }}>
      <Header onMenuPress={() => navigation.toggleDrawer()} />

      {/* Hero Section */}
      <View style={[commonStyles.heroSection, { marginHorizontal: 16, borderRadius: 12 }]}>
        <Text style={commonStyles.heroText}>Welcome to CityWise</Text>
      </View>

      {/* Category Grid */}
      <View style={[commonStyles.section, { paddingHorizontal: 16 }]}>
        <Text style={[commonStyles.sectionTitle, { marginBottom: 16 }]}>Categories</Text>
        <FlatList
          data={categories}
          numColumns={3}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
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
      <View style={[commonStyles.section, { paddingHorizontal: 16 }]}>
        <Text style={[commonStyles.sectionTitle, { marginBottom: 16 }]}>Featured Services</Text>
        <FlatList
          data={featuredServices}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingRight: 16 }}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
          renderItem={({ item }) => (
            <ServiceCard service={item} />
          )}
        />
      </View>

      {/* Footer */}
      <Footer links={footerLinks} />
    </ScrollView>
  );
};

export default HomeScreen;

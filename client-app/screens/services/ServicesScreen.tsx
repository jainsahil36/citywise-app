import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ServiceHeader } from '../../components/services/ServiceHeader';
import { CategoryTabs } from '../../components/services/CategoryTabs';
import { ServiceCardList } from '../../components/services/ServiceCardList';
import { styles } from './ServicesScreen.styles';

export const ServicesScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSearch = () => {
    navigation.navigate('Search');
  };

  const handleCategoryPress = (category: string) => {
    navigation.navigate('CategoryServices', { category });
  };

  const handleServicePress = (serviceId: string) => {
    navigation.navigate('ServiceDetails', { serviceId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ServiceHeader 
        title="All Services"
        onBack={handleBack}
        onSearch={handleSearch}
      />
      <CategoryTabs 
        onCategoryPress={handleCategoryPress}
      />
      <ServiceCardList 
        onServicePress={handleServicePress}
      />
    </SafeAreaView>
  );
};

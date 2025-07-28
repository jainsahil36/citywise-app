import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './HomeScreen.styles';
import { Header } from '../../components/common/Header';
import { LocationSelector } from '../../components/home/LocationSelector';
import { OffersCarousel } from '../../components/home/OffersCarousel';
import { PopularServices } from '../../components/home/PopularServices';
import { VendorList } from '../../components/home/VendorList';
import { theme } from '../../styles/theme/theme';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSearchPress = () => {
    navigation.navigate('Search');
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const handleOfferPress = (offerId: string) => {
    navigation.navigate('OfferDetails', { offerId });
  };

  const handleServicePress = (categoryId: string) => {
    navigation.navigate('Services', { categoryId });
  };

  const handleVendorPress = (vendorId: string) => {
    navigation.navigate('VendorProfile', { vendorId });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header 
        onSearchPress={handleSearchPress}
        onProfilePress={handleProfilePress}
      />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <LocationSelector />
        <OffersCarousel 
          onOfferPress={handleOfferPress}
        />
        <PopularServices 
          onServicePress={handleServicePress}
        />
        <VendorList 
          onVendorPress={handleVendorPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

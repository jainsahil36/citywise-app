import React from 'react';

const createNativeStackNavigator = await import('@react-navigation/native-stack').then(module => module.createNativeStackNavigator);
const NavigationContainer = await import('@react-navigation/native').then(module => module.NavigationContainer);

import { HomeScreen } from '../screens/home/HomeScreen.js';
import { ServicesScreen } from '../screens/services/ServicesScreen.js';
import { FinancialConsultingScreen } from '../screens/financial/FinancialConsultingScreen.js';
import { VendorProfileScreen } from '../screens/vendor/VendorProfileScreen.js';
import { BookingScreen } from '../screens/booking/BookingScreen.js';
import { ChatScreen } from '../screens/chat/ChatScreen.js';
import { OfferDetailScreen } from '../screens/offers/OfferDetailScreen.js';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FinancialConsulting" component={FinancialConsultingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VendorProfile" component={VendorProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OfferDetail" component={OfferDetailScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

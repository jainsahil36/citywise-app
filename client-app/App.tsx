import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import Screen2_Services from './screens/Services';
import Screen3_Category from './screens/Category';
import Screen4_Financial from './screens/Financial';
import Screen5_Vendors from './screens/Vendors';
import Screen6_Cart from './screens/Cart';
import Screen7_Confirmation from './screens/Confirmation';

// Import our types
import type { RootStackParamList } from './types';

// Create a typed stack navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'CityWise',
          }}
        />
        <Stack.Screen 
          name="Services" 
          component={Screen2_Services}
          options={{
            title: 'Services',
          }}
        />
        <Stack.Screen 
          name="ServiceDetails" 
          component={Screen3_Category}
          options={{
            title: 'Service Details',
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Screen4_Financial}
          options={{
            title: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

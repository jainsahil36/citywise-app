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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Services" component={Screen2_Services} />
        <Stack.Screen name="Category" component={Screen3_Category} />
        <Stack.Screen name="Financial" component={Screen4_Financial} />
        <Stack.Screen name="Vendors" component={Screen5_Vendors} />
        <Stack.Screen name="Cart" component={Screen6_Cart} />
        <Stack.Screen name="Confirmation" component={Screen7_Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

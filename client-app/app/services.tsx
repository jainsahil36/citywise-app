import React from 'react';
import { useRouter } from 'expo-router';
import Services from '../screens/Services';

export default function ServicesScreen() {
  const router = useRouter();
  
  return (
    <Services 
      navigation={{
        navigate: (screen: string, params?: any) => {
          router.push('/' + screen.toLowerCase() as '/');
        },
        goBack: () => {
          router.back();
        },
        toggleDrawer: () => {
          // Drawer navigation not implemented
        }
      }} 
    />
  );
}

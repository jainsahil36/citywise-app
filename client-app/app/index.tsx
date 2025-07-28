import React from 'react';
import { useRouter } from 'expo-router';
import HomeScreen from '../screens/HomeScreen';

export default function Home() {
  const router = useRouter();
  
  return (
    <HomeScreen 
      navigation={{
        navigate: (screen: string, params?: any) => {
          router.push('/' + screen.toLowerCase() as '/');
        },
        goBack: () => {
          router.back();
        },
        toggleDrawer: () => {
          console.log('Toggle drawer - not implemented');
        }
      }} 
    />
  );
}

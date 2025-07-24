import { View } from 'react-native';
import { useNavigation } from 'expo-router';
import HomeScreen from '../../screens/HomeScreen';

export default function TabOneScreen() {
  const navigation = useNavigation();

  return <HomeScreen navigation={navigation} />;
}

import { View, Text, Button } from 'react-native';

export default function Screen5_Vendors({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>📱 Vendors Screen</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
}

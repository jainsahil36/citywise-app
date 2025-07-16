import { View, Text, Button } from 'react-native';

export default function Screen4_Financial({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>📱 Financial Screen</Text>
      <Button title="Go to Vendors" onPress={() => navigation.navigate('Vendors')} />
    </View>
  );
}

import { View, Text, Button } from 'react-native';

export default function Screen6_Cart({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>📱 Cart Screen</Text>
      <Button title="Go to Confirmation" onPress={() => navigation.navigate('Confirmation')} />
    </View>
  );
}

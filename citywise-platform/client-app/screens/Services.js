import { View, Text, Button } from 'react-native';

export default function Screen2_Services({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>📱 Services Screen</Text>
      <Button title="Go to Category" onPress={() => navigation.navigate('Category')} />
    </View>
  );
}

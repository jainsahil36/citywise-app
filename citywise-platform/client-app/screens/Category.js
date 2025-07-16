import { View, Text, Button } from 'react-native';

export default function Screen3_Category({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>📱 Category Screen</Text>
      <Button title="Go to Financial" onPress={() => navigation.navigate('Financial')} />
    </View>
  );
}

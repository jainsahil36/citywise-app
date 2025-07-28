import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Booking Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

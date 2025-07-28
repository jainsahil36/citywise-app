import React from 'react';
import { View, Text, Button, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import type { FC } from 'react';
import type { ScreenProps } from '../types/screens';
import { theme } from '../styles/common';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
  } as ViewStyle,
  title: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    marginBottom: theme.spacing.md,
  } as TextStyle,
});

const Screen6_Cart: FC<ScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Cart Screen</Text>
      <Button 
        title="Go to Confirmation" 
        onPress={() => navigation.navigate('Confirmation')}
      />
    </View>
  );
};

export default Screen6_Cart;

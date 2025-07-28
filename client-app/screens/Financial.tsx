import React from 'react';
import { View, Text, Button, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import type { FC } from 'react';
import type { ScreenProps } from '../types/screens';
import { theme } from '../constants/theme';

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

const Screen4_Financial: FC<ScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Financial Screen</Text>
      <Button 
        title="Go to Vendors" 
        onPress={() => navigation.navigate('Vendors')}
      />
    </View>
  );
};

export default Screen4_Financial;

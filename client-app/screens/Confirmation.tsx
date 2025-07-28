import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
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

const Screen7_Confirmation: FC<ScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Confirmation Screen</Text>
    </View>
  );
};

export default Screen7_Confirmation;

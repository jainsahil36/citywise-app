import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';
import type { Service } from '../../types/screens';

interface ServiceCardProps {
  service: Service;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    width: 160,
    alignItems: 'center',
  } as ViewStyle,
  icon: {
    marginBottom: theme.spacing.sm,
  } as TextStyle,
  title: {
    ...theme.typography.body1,
    textAlign: 'center',
  } as TextStyle,
});

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Ionicons 
        name={service.icon as any} 
        size={32} 
        color={theme.colors.primary}
        style={styles.icon}
      />
      <Text style={styles.title}>{service.title}</Text>
    </TouchableOpacity>
  );
};

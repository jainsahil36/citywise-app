import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';
import type { Category } from '../../types/screens';

interface CategoryItemProps {
  category: Category;
  onPress: (category: Category) => void;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    width: '30%',
  } as ViewStyle,
  text: {
    ...theme.typography.body2,
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  } as TextStyle,
});

export const CategoryItem: React.FC<CategoryItemProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(category)}>
      <Ionicons name={category.icon as any} size={24} color={theme.colors.primary} />
      <Text style={styles.text}>{category.name}</Text>
    </TouchableOpacity>
  );
};

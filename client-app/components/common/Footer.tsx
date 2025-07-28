import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { theme } from '../../constants/theme';

interface FooterProps {
  links: Array<{ id: number; name: string }>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.surface,
    padding: theme.spacing.md,
    marginTop: theme.spacing.lg,
  } as ViewStyle,
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  } as ViewStyle,
  link: {
    ...theme.typography.body2,
    color: theme.colors.text.secondary,
  } as TextStyle,
});

export const Footer: React.FC<FooterProps> = ({ links }) => {
  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        {links.map(link => (
          <TouchableOpacity key={link.id}>
            <Text style={styles.link}>{link.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

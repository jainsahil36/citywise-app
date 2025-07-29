import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../constants/theme';
import { ServiceProvider } from '../../services/mockData';

interface ProviderCardProps {
  provider: ServiceProvider;
  onPress: () => void;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({ provider, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Image source={{ uri: provider.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{provider.name}</Text>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color={theme.colors.text.secondary} />
            <Text style={styles.location}>{provider.location}</Text>
          </View>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{provider.rating}</Text>
          </View>
        </View>
      </View>
      {provider.description && (
        <Text style={styles.description}>{provider.description}</Text>
      )}
      <TouchableOpacity style={styles.contactButton}>
        <Ionicons name="call" size={16} color={theme.colors.background.surface} />
        <Text style={styles.contactText}>Contact</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    // Use boxShadow for web compatibility
    ...Platform.select({
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      default: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: theme.borderRadius.md,
    marginRight: theme.spacing.md,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: theme.typography.subtitle.fontSize,
    fontWeight: '600' as const,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  location: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.secondary,
    marginLeft: theme.spacing.xs,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.secondary,
    marginLeft: theme.spacing.xs,
  },
  description: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.md,
  },
  contactButton: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.sm,
  },
  contactText: {
    color: theme.colors.text.light,
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600' as const,
    marginLeft: theme.spacing.xs,
  },
});

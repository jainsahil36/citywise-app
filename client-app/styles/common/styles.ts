import { Platform, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

/**
 * Common styles used across the application
 * Uses theme configuration for consistent styling
 */
export const commonStyles = StyleSheet.create({
  // Layout styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  section: {
    padding: theme.spacing.md,
    marginVertical: theme.spacing.sm,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: theme.spacing.sm,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Typography
  title: {
    ...theme.typography.h1,
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    ...theme.typography.h2,
    marginBottom: theme.spacing.sm,
  },
  text: {
    ...theme.typography.body1,
    color: theme.colors.text.primary,
  },

  // Hero Section
  heroSection: {
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.primary.main,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  heroText: {
    ...theme.typography.h1,
    color: theme.colors.text.light,
  },

  // Cards
  card: Platform.select({
    ios: {
      backgroundColor: theme.colors.background.main,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      margin: theme.spacing.sm,
      shadowColor: theme.colors.text.primary,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    web: {
      backgroundColor: theme.colors.background.main,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      margin: theme.spacing.sm,
      boxShadow: `0 2px 4px ${theme.colors.text.disabled}`,
    },
    default: {
      backgroundColor: theme.colors.background.main,
      borderRadius: theme.borderRadius.md,
      padding: theme.spacing.md,
      margin: theme.spacing.sm,
      elevation: 3,
    },
  }),

  // Lists
  listContainer: {
    marginVertical: theme.spacing.sm,
  },
  horizontalList: {
    paddingHorizontal: theme.spacing.sm,
  },

  // Common elements
  icon: {
    marginRight: theme.spacing.sm,
  },
  button: {
    backgroundColor: theme.colors.primary.main,
    padding: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
  },
  buttonText: {
    color: theme.colors.text.light,
    fontSize: 16,
    fontWeight: 'bold',
  }
});

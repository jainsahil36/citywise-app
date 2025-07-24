import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const componentStyles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    ...theme.shadows.small,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.text.light,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    fontSize: theme.typography.body1.fontSize,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    backgroundColor: theme.colors.background.main,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.sm,
    margin: theme.spacing.sm,
  },
  icon: {
    marginRight: theme.spacing.xs,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.h2,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
});

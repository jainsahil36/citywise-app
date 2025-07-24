import { StyleSheet } from 'react-native';
import { theme, layoutStyles, componentStyles } from './common';

export const serviceStyles = StyleSheet.create({
  container: {
    ...layoutStyles.container,
  },
  header: {
    ...componentStyles.header,
    paddingHorizontal: theme.spacing.md,
  },
  headerTitle: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
  },
  categoriesContainer: {
    marginTop: theme.spacing.md,
  },
  categoryItem: {
    ...componentStyles.card,
    marginVertical: theme.spacing.xs,
    marginHorizontal: theme.spacing.md,
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryText: {
    ...theme.typography.body1,
    marginLeft: theme.spacing.sm,
  },
  servicesContainer: {
    padding: theme.spacing.md,
  },
  servicesGrid: {
    ...layoutStyles.grid,
    marginTop: theme.spacing.sm,
  },
  serviceCard: {
    ...componentStyles.card,
    width: '48%',
    margin: '1%',
    padding: theme.spacing.md,
    alignItems: 'center',
  },
  serviceIcon: {
    marginBottom: theme.spacing.sm,
  },
  serviceTitle: {
    ...theme.typography.body2,
    textAlign: 'center',
  },
  sectionTitle: {
    ...theme.typography.h2,
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  categoryTab: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.sm,
    marginHorizontal: theme.spacing.xs,
    marginVertical: theme.spacing.xs,
    minWidth: 120,
  },
  categoryTabActive: {
    backgroundColor: theme.colors.primary,
  },
  categoryTabText: {
    ...theme.typography.body1,
    color: theme.colors.primary,
    marginLeft: theme.spacing.xs,
  },
  categoryTabTextActive: {
    color: theme.colors.text.light,
  },
  servicesSection: {
    padding: theme.spacing.md,
  },
  serviceCard: {
    ...componentStyles.card,
    flex: 1,
    margin: theme.spacing.xs,
    alignItems: 'center',
    padding: theme.spacing.md,
  },
  serviceIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: theme.colors.background.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
  },
  serviceName: {
    ...theme.typography.body1,
    textAlign: 'center',
    color: theme.colors.text.primary,
  },
});

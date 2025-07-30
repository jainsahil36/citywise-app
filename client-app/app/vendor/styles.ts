import { StyleSheet, Platform } from 'react-native';
import { theme } from '../../constants/theme';

export const getBottomSpace = (insets: { bottom: number }) => {
  return Math.max(insets.bottom, 16) + 60; // 60 is the approximate height of the cart summary
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.main,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
  },
  contentContainer: {
    paddingBottom: 120, // Increased to prevent overlap with cart summary
  },
  bannerContainer: {
    position: 'relative',
    height: 200,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.lg,
    paddingTop: Platform.OS === 'ios' ? 50 : theme.spacing.lg,
  },
  backButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    padding: theme.spacing.sm,
  },
  favoriteButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    padding: theme.spacing.sm,
  },
  newBadge: {
    position: 'absolute',
    bottom: theme.spacing.lg,
    left: theme.spacing.lg,
    backgroundColor: '#00D26A',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.sm,
  },
  newBadgeText: {
    color: theme.colors.text.light,
    fontSize: theme.typography.caption.fontSize,
    fontWeight: '600',
  },
  companyInfo: {
    backgroundColor: theme.colors.background.surface,
    padding: theme.spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  companyName: {
    fontSize: theme.typography.title.fontSize,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  companyLocation: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.secondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background.surface,
    margin: theme.spacing.lg,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  searchInput: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.primary,
  },
  content: {
    flex: 1,
  },
  itemsHeader: {
    fontSize: theme.typography.subtitle.fontSize,
    fontWeight: '600',
    color: theme.colors.text.primary,
    paddingHorizontal: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  categoryContainer: {
    marginBottom: theme.spacing.md,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.background.surface,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.accent,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryName: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  categoryCount: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text.secondary,
  },
  servicesList: {
    backgroundColor: theme.colors.background.surface,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  serviceImage: {
    marginRight: theme.spacing.md,
  },
  serviceIcon: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.sm,
  },
  serviceDetails: {
    flex: 1,
  },
  serviceName: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '500',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  servicePrice: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text.secondary,
  },
  quantityContainer: {
    alignItems: 'center',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.accent,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.xs,
  },
  quantityButton: {
    padding: theme.spacing.sm,
  },
  quantityText: {
    color: theme.colors.text.light,
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    paddingHorizontal: theme.spacing.md,
  },
  addButton: {
    backgroundColor: theme.colors.background.main,
    borderRadius: 20,
    padding: theme.spacing.sm,
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  bottomSpacing: {
    height: 120, // Increased for better spacing before cart summary
  },
  cartSummary: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.background.surface,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    ...Platform.select({
      web: {
        boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.1)',
      },
      default: {
        shadowColor: theme.colors.shadow,
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 12,
      },
    }),
  },
  cartInfo: {
    flex: 1,
  },
  cartAmount: {
    fontSize: theme.typography.subtitle.fontSize,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: 2,
  },
  cartItems: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text.secondary,
  },
  viewCartButton: {
    backgroundColor: theme.colors.accent,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    minWidth: 100,
  },
  viewCartText: {
    color: theme.colors.text.light,
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
  },
});

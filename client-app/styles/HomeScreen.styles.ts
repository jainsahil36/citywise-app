import { StyleSheet } from 'react-native';
import { theme, layoutStyles, componentStyles } from './common';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoContainer: {
    marginRight: 16,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 8,
    marginRight: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  heroSection: {
    padding: 24,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
  },
  heroText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  categorySection: {
    marginTop: 24,
  },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    margin: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  featuredSection: {
    marginTop: 24,
    marginBottom: 24,
  },
  serviceCard: {
    width: 200,
    padding: 16,
    marginHorizontal: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    alignItems: 'center',
  },
  serviceTitle: {
    marginTop: 8,
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  footerLink: {
    marginHorizontal: 16,
    color: '#666',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
});

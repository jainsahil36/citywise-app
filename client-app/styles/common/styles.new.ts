import { Platform, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 16,
  },
  heroSection: {
    height: 200,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  gridContainer: {
    paddingHorizontal: 16,
  },
  card: Platform.select({
    ios: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    web: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    default: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      elevation: 3,
    },
  }),
  horizontalList: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  text: {
    color: '#333333',
    fontSize: 16,
  },
});

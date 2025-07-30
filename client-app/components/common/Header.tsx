import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showFavorite?: boolean;
  onFavoritePress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  showFavorite = false,
  onFavoritePress,
}) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.headerContent}>
        {showBack && (
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="arrow-back" size={24} color={theme.colors.text.primary} />
          </TouchableOpacity>
        )}
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        {showFavorite && (
          <TouchableOpacity 
            onPress={onFavoritePress}
            style={styles.favoriteButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="heart-outline" size={24} color={theme.colors.text.primary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  headerContent: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  favoriteButton: {
    position: 'absolute',
    right: 16,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.text.primary,
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 48, // Space for back and favorite buttons
  },
});

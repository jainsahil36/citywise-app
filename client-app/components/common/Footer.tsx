import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '../../constants/theme';

interface FooterProps {
  totalAmount: number;
  itemCount: number;
  quantity: number;
  onViewCartPress?: () => void;
  disabled?: boolean;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 8, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    padding: 16,
    paddingBottom: 0, // We'll use safe area inset instead
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  itemCount: {
    fontSize: 14,
    color: theme.colors.text.secondary,
    marginTop: 4,
  },
  viewCartButton: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  viewCartText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export const Footer: React.FC<FooterProps> = ({
  totalAmount,
  itemCount,
  quantity,
  onViewCartPress,
  disabled = false,
}) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleViewCart = () => {
    if (onViewCartPress) {
      onViewCartPress();
    } else {
      router.push('/cart');
    }
  };

  return (
    <View style={[styles.container]}>
      <View style={[styles.content, { paddingBottom: Math.max(insets.bottom, 16) }]}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{totalAmount.toFixed(2)}</Text>
          <Text style={styles.itemCount}>
            {itemCount} {itemCount === 1 ? 'Item' : 'Items'} • {quantity} {quantity === 1 ? 'quantity' : 'quantities'}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.viewCartButton, disabled && styles.disabledButton]}
          onPress={handleViewCart}
          disabled={disabled}
        >
          <Text style={styles.viewCartText}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

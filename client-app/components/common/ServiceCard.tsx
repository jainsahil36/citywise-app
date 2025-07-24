import React, { memo, useCallback, useMemo } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Animated, 
  useWindowDimensions,
  Platform,
  View
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '../../styles/common/styles';
import { ServiceCardProps } from '../../types/components';
import { 
  SERVICE_CARD_CONFIG, 
  TEST_IDS
} from '../../constants/componentConfig';
import { theme } from '../../styles/theme/theme';
import { useServiceCardAnimation } from '../../hooks/animations/useServiceCardAnimation';

// Create styles
const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  iosShadow: Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    web: {
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
    default: {},
  }),
  androidShadow: {
    elevation: 4,
  },
  iconContainer: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
});

/**
 * ServiceCard Component
 * 
 * Displays a service with icon and title in a card format.
 * Features animated press feedback and accessibility support.
 * 
 * @param props - ServiceCardProps
 * @returns JSX.Element
 */
export const ServiceCard: React.FC<ServiceCardProps> = memo(({ 
  service, 
  onPress, 
  testID = TEST_IDS.SERVICE_CARD 
}) => {
  // Get screen dimensions for responsive sizing
  const { width: screenWidth } = useWindowDimensions();
  
  // Get theme colors
  const primaryColor = theme.colors.primary;
  
  // Animation handlers
  const {
    scaleValue,
    opacityValue,
    handlePressIn,
    handlePressOut,
  } = useServiceCardAnimation();

  // Memoized styles
  const cardStyle = useMemo(() => {
    const cardWidth = screenWidth < 768 ? 200 : 300;
    
    return [
      commonStyles.card,
      styles.card,
      { width: cardWidth },
      Platform.OS === 'ios' ? styles.iosShadow : styles.androidShadow,
    ];
  }, [screenWidth]);

  // Memoized transform style
  const animatedStyle = useMemo(() => ({
    transform: [{ scale: scaleValue }],
    opacity: opacityValue,
  }), [scaleValue, opacityValue]);

  // Memoized press handler
  const handlePress = useCallback(() => {
    onPress?.(service);
  }, [onPress, service]);

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity 
        style={cardStyle}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        testID={testID}
        accessible
        accessibilityRole="button"
        accessibilityLabel={`Service: ${service.title}. Double tap to view details.`}
      >
        <View style={styles.iconContainer}>
          <Ionicons 
            name={service.icon as keyof typeof Ionicons.glyphMap} 
            size={40} 
            color="#4A90E2"
            testID={TEST_IDS.SERVICE_ICON}
          />
        </View>
        <Text 
          style={[commonStyles.text, styles.title]}
          numberOfLines={2}
          testID={TEST_IDS.SERVICE_TITLE}
        >
          {service.title}
        </Text>
        {service.description && (
          <Text 
            style={styles.description}
            numberOfLines={3}
          >
            {service.description}
          </Text>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
});

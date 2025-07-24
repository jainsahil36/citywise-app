import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '../../styles/common/styles';
import { CategoryItemProps } from '../../types/components';
import { CATEGORY_ITEM_CONFIG, TEST_IDS } from '../../constants/componentConfig';
import { useThemeColor } from '../../hooks/useThemeColor';

/**
 * CategoryItem Component
 * 
 * Renders a pressable category card with an icon and text.
 * Uses common styles for consistent theming and animated feedback on press.
 * 
 * @param props - CategoryItemProps
 * @returns JSX.Element
 */
export const CategoryItem: React.FC<CategoryItemProps> = memo(({ category, onPress, testID = TEST_IDS.CATEGORY_ITEM }) => {
  // Get theme colors
  const primaryColor = useThemeColor({}, 'primary');
  
  // Animation value for press feedback
  const [scaleAnim] = React.useState(new Animated.Value(1));

  // Handle press animation
  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      duration: CATEGORY_ITEM_CONFIG.PRESS_ANIMATION_DURATION,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: CATEGORY_ITEM_CONFIG.PRESS_ANIMATION_DURATION,
    }).start();
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: scaleAnim }] }]}>
      <TouchableOpacity
        style={[commonStyles.card, styles.categoryItem]}
        onPress={() => onPress(category)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        testID={testID}
        accessibilityRole="button"
        accessibilityLabel={`Select ${category.name} category`}
      >
        <Ionicons 
          name={category.icon} 
          size={CATEGORY_ITEM_CONFIG.ICON_SIZE} 
          color={primaryColor}
          style={commonStyles.icon}
          testID={TEST_IDS.CATEGORY_ICON}
        />
        <Text 
          style={[commonStyles.text, styles.categoryText]}
          testID={TEST_IDS.CATEGORY_TEXT}
          numberOfLines={2}
        >
          {category.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
});

// Local styles specific to CategoryItem
const styles = StyleSheet.create({
  container: {
    width: CATEGORY_ITEM_CONFIG.WIDTH_PERCENTAGE,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1, // Makes the item square
  },
  categoryText: {
    textAlign: 'center',
    marginTop: 8,
  },
});

import { useRef, useCallback } from 'react';
import { Animated } from 'react-native';
import { theme } from '../../styles/theme/theme';

interface AnimationConfig {
  scaleValue: Animated.Value;
  opacityValue: Animated.Value;
  handlePressIn: () => void;
  handlePressOut: () => void;
}

/**
 * Custom hook for managing ServiceCard animations
 * Provides scale and opacity animations for press feedback
 * 
 * @returns AnimationConfig - Animation values and handlers
 */
export const useServiceCardAnimation = (): AnimationConfig => {
  // Animation values
  const scaleValue = useRef(new Animated.Value(1)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  // Press in animation
  const handlePressIn = useCallback(() => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 0.95,
        useNativeDriver: true,
        duration: theme.animation.duration.short,
      }),
      Animated.timing(opacityValue, {
        toValue: 0.9,
        useNativeDriver: true,
        duration: theme.animation.duration.short,
      }),
    ]).start();
  }, [scaleValue, opacityValue]);

  // Press out animation
  const handlePressOut = useCallback(() => {
    Animated.parallel([
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: theme.animation.duration.short,
      }),
      Animated.timing(opacityValue, {
        toValue: 1,
        useNativeDriver: true,
        duration: theme.animation.duration.short,
      }),
    ]).start();
  }, [scaleValue, opacityValue]);

  return {
    scaleValue,
    opacityValue,
    handlePressIn,
    handlePressOut,
  };
};

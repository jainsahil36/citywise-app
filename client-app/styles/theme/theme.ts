/**
 * Theme configuration for the CityWise application
 */

export const theme = {
  colors: {
    primary: {
      main: '#4A90E2',
      light: '#7CB3F7',
      dark: '#2C5282',
    },
    secondary: {
      main: '#F5F5F5',
      light: '#FFFFFF',
      dark: '#E0E0E0',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
      disabled: '#999999',
      light: '#FFFFFF',
    },
    background: {
      main: '#FFFFFF',
      surface: '#F5F5F5',
      accent: '#4A90E2',
    },
    border: {
      light: '#EEEEEE',
      main: '#E0E0E0',
      dark: '#CCCCCC',
    },
    status: {
      success: '#4CAF50',
      warning: '#FFC107',
      error: '#F44336',
      info: '#2196F3',
    },
  },
  
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
      lineHeight: 32,
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 28,
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
    },
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    round: '50%',
  },

  shadows: {
    none: {
      shadowColor: 'transparent',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    small: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },

  animation: {
    duration: {
      short: 200,
      medium: 300,
      long: 500,
    },
    easing: {
      // Add custom easing functions if needed
    },
  },
} as const;

export type Theme = typeof theme;
export type ThemeColors = keyof typeof theme.colors;
export type Typography = keyof typeof theme.typography;
export type Spacing = keyof typeof theme.spacing;
export type BorderRadius = keyof typeof theme.borderRadius;
export type Shadow = keyof typeof theme.shadows;

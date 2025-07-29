export const theme = {
  colors: {
    primary: '#21375B',
    secondary: '#A3C2E4',
    accent: '#008CBA',
    background: {
      main: '#F5F7FA',
      surface: '#FFFFFF',
      card: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
      light: '#FFFFFF',
    },
    border: '#E5E5E5',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  typography: {
    title: {
      fontSize: 24,
      fontWeight: '600' as const,
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '600' as const,
    },
    body: {
      fontSize: 14,
      fontWeight: '400' as const,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
  },
};

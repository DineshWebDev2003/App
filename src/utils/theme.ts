import { MD3LightTheme, configureFonts } from 'react-native-paper';

const fontConfig = {
  displayLarge: {
    fontFamily: 'sans-serif',
    fontSize: 57,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 64,
  },
  displayMedium: {
    fontFamily: 'sans-serif',
    fontSize: 45,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 52,
  },
  displaySmall: {
    fontFamily: 'sans-serif',
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 44,
  },
  headlineLarge: {
    fontFamily: 'sans-serif',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 40,
  },
  headlineMedium: {
    fontFamily: 'sans-serif',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 36,
  },
  headlineSmall: {
    fontFamily: 'sans-serif',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 32,
  },
};

export const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#FF6B6B',  // Playful red
    secondary: '#4ECDC4', // Turquoise
    tertiary: '#FFD93D',  // Sunny yellow
    background: '#FFFFFF',
    surface: '#FFFFFF',
    error: '#FF6B6B',
    text: '#2C3E50',
    onSurface: '#2C3E50',
    disabled: '#95A5A6',
    placeholder: '#BDC3C7',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: '#FF9800',
    // Custom colors for playschool theme
    accent1: '#FF9F43', // Orange
    accent2: '#6C5CE7', // Purple
    accent3: '#A8E6CF', // Mint
    accent4: '#FDCB6E', // Yellow
  },
  fonts: configureFonts({ config: fontConfig }),
  roundness: 16,
}; 
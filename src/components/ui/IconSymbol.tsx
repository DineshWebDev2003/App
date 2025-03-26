// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle, Text, TextStyle } from 'react-native';

// Add your SFSymbol to MaterialIcons mappings here.
const MAPPING = {
  // See MaterialIcons here: https://icons.expo.fyi
  // See SF Symbols in the SF Symbols app on Mac.
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
} as Partial<
  Record<
    import('expo-symbols').SymbolViewProps['name'],
    React.ComponentProps<typeof MaterialIcons>['name']
  >
>;

export type IconSymbolName = keyof typeof MAPPING;

interface IconSymbolProps {
  name: string;
  size?: number;
  color?: string;
  weight?: 'regular' | 'medium' | 'bold';
  style?: StyleProp<TextStyle>;
}

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({ name, size = 24, color = '#000000', weight = 'regular', style }: IconSymbolProps) {
  return (
    <Text
      style={[
        {
          fontSize: size,
          color,
          fontWeight: weight === 'bold' ? '700' : weight === 'medium' ? '500' : '400',
        },
        style,
      ]}>
      {name === 'chevron.right' ? '›' : name}
    </Text>
  );
}

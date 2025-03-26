import { View, ViewProps } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export function ThemedView({ style, ...props }: ViewProps) {
  const theme = useColorScheme() ?? 'light';
  
  return (
    <View
      style={[
        { backgroundColor: theme === 'light' ? Colors.light.background : Colors.dark.background },
        style,
      ]}
      {...props}
    />
  );
}

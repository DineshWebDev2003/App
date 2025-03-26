import { Text, TextProps } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

interface ThemedTextProps extends TextProps {
  type?: 'default' | 'defaultSemiBold';
}

export function ThemedText({ style, type = 'default', ...props }: ThemedTextProps) {
  const theme = useColorScheme() ?? 'light';
  
  return (
    <Text
      style={[
        { color: theme === 'light' ? Colors.light.text : Colors.dark.text },
        type === 'defaultSemiBold' && { fontWeight: '600' },
        style,
      ]}
      {...props}
    />
  );
}

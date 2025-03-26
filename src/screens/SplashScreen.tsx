import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withSequence,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const scale = useSharedValue(0);
  const rotate = useSharedValue(0);
  const titleScale = useSharedValue(0);
  const subtitleOpacity = useSharedValue(0);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { rotate: `${rotate.value}deg` }
    ],
  }));

  const titleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: titleScale.value }],
  }));

  const subtitleStyle = useAnimatedStyle(() => ({
    opacity: subtitleOpacity.value,
    transform: [
      { 
        translateY: withSpring(subtitleOpacity.value * 20, {
          damping: 15,
          stiffness: 100,
        })
      }
    ],
  }));

  useEffect(() => {
    scale.value = withSequence(
      withTiming(1.2, { duration: 500 }),
      withSpring(1, {
        damping: 15,
        stiffness: 100,
      })
    );

    rotate.value = withSequence(
      withTiming(360, { duration: 1000 }),
      withSpring(0)
    );

    titleScale.value = withDelay(
      400,
      withSpring(1, {
        damping: 15,
        stiffness: 100,
      })
    );

    subtitleOpacity.value = withDelay(
      800,
      withTiming(1, { duration: 500 })
    );

    setTimeout(() => {
      runOnJS(onFinish)();
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.iconContainer, iconStyle]}>
        <Icon name="school" size={100} color="#FF6B6B" />
      </Animated.View>
      <Animated.View style={titleStyle}>
        <Text variant="displayMedium" style={styles.title}>
          TN Happy Kids
        </Text>
      </Animated.View>
      <Animated.View style={[styles.subtitleContainer, subtitleStyle]}>
        <Text variant="headlineSmall" style={styles.subtitle}>
          Management Portal
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    borderRadius: width * 0.2,
    marginBottom: 24,
  },
  title: {
    color: '#FF6B6B',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  subtitle: {
    color: '#95A5A6',
    textAlign: 'center',
  },
});

export default SplashScreen; 
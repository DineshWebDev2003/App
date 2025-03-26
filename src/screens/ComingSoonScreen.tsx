import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import LottieView from 'lottie-react-native';

export function ComingSoonScreen() {
  const navigation = useNavigation();

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <IconSymbol name="chevron.right" size={24} style={styles.backIcon} />
        <ThemedText style={styles.backText}>Back</ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.content}>
        <View style={styles.animationContainer}>
          <LottieView
            source={require('../../assets/images/coming-soon.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
       
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  backIcon: {
    transform: [{ rotate: '180deg' }],
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  animationContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
}); 
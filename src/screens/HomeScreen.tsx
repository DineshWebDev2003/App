import React from 'react';
import { View, StyleSheet, ScrollView, Linking, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Card, Title, useTheme } from 'react-native-paper';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const menuImages = {
  admin: require('../../assets/images/admin_icon.png'),
  monitoring: require('../../assets/images/monitoring_icon.png'),
  whatsapp: require('../../assets/images/whatsapp_icon.png'),
  jar: require('../../assets/images/jar_icon.png'),
  user: require('../../assets/images/user_icon.png'),
  call: require('../../assets/images/call_icon.png'),
  website: require('../../assets/images/website_icon.png'),
};

export function HomeScreen() {
  const navigation = useNavigation();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  const handleWebView = (url: string) => {
    navigation.navigate('WebView', { url });
  };

  const handlePhoneCall = (phoneNumber: string) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleWhatsApp = (phoneNumber: string) => {
    // Remove any non-numeric characters from the phone number
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    Linking.openURL(`whatsapp://send?phone=${cleanNumber}`);
  };

  const menuItems = [
    { id: 'admin', label: 'Admin Login', screen: 'WebView', params: { url: 'https://management.tnhappykids.in/site/login' } },
    { id: 'monitoring', label: 'Online Monitoring', screen: 'WebView', params: { url: 'https://live.tnhappykids.in/' } },
    { id: 'whatsapp', label: 'WhatsApp', onPress: () => handleWhatsApp('8925105109') },
    { id: 'jar', label: 'Jar', screen: 'ComingSoon' },
    { id: 'user', label: 'User Login', screen: 'WebView', params: { url: 'https://management.tnhappykids.in/site/user-login' } },
    { id: 'call', label: 'Call Us', onPress: () => handlePhoneCall('8925105109') },
    { id: 'website', label: 'Website', screen: 'WebView', params: { url: 'https://tnhappykids.in/' } },
  ];

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <Image
          source={require('../../assets/images/logo_line-removebg-preview.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </ThemedView>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <ThemedView style={styles.content}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => item.onPress ? item.onPress() : navigation.navigate(item.screen as never, item.params as never)}>
              <Image
                source={menuImages[item.id as keyof typeof menuImages]}
                style={styles.icon}
                resizeMode="contain"
              />
              <ThemedText style={styles.label}>{item.label}</ThemedText>
            </TouchableOpacity>
          ))}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  logo: {
    width: 200,
    height: 60,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  menuItem: {
    width: '45%',
    aspectRatio: 1,
    margin: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HomeScreen; 
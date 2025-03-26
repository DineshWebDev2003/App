import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            source={require('./assets/images/admin_icon.png')} 
            style={styles.headerImage}
          />
          <Image 
            source={require('./assets/images/logo_line-removebg-preview.png')} 
            style={styles.headerImage}
          />
        </View>
        
        <ScrollView style={styles.mainContent}>
          <TouchableOpacity style={styles.imageContainer}>
            <Image 
              source={require('./assets/images/jar_icon.png')} 
              style={styles.mainImage}
            />
            <Text style={styles.containerText}>Jar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
            <Image 
              source={require('./assets/images/monitoring_icon.png')} 
              style={styles.mainImage}
            />
            <Text style={styles.containerText}>Monitoring</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
            <Image 
              source={require('./assets/images/user_icon.png')} 
              style={styles.mainImage}
            />
            <Text style={styles.containerText}>User</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
            <Image 
              source={require('./assets/images/website_icon.png')} 
              style={styles.mainImage}
            />
            <Text style={styles.containerText}>Website</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
            <Image 
              source={require('./assets/images/call_icon.png')} 
              style={styles.mainImage}
            />
            <Text style={styles.containerText}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
            <Image 
              source={require('./assets/images/whatsapp_icon.png')} 
              style={styles.mainImage}
            />
            <Text style={styles.containerText}>WhatsApp</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#FFB6C1',
    borderBottomWidth: 1,
    borderBottomColor: '#FFC0CB',
  },
  headerImage: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginBottom: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderWidth: 2,
    borderColor: '#FFB6C1',
  },
  mainImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    marginBottom: 10,
  },
  containerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF69B4',
    textAlign: 'center',
  },
}); 
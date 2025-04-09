import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

const OnboardingScreen = () => {
  const navigation = useNavigation() as NativeStackNavigationProp<RootStackParamList>;

  const handleNext = () => {
    navigation.replace('Root');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/card.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>C’est le temps de gagner des points</Text>
      <Text style={styles.subtitle}>
        Suivez vos paiements quotidiens en quelques taps seulement !
      </Text>

      {/* Le bouton doit être bien espacé du bas et visible */}
      <TouchableOpacity style={styles.buttonContainer} onPress={handleNext} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>→</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#091E42',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#5E6C84',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 40,
  },
  buttonContainer: {
    position: 'relative',
    zIndex: 10,
  },
  button: {
    backgroundColor: '#FB8C00',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
});

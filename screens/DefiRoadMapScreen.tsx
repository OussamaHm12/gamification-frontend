// ✅ screens/DefiRoadMapScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// Correction : typer proprement les étapes
const steps: { id: number; label: string; x: number | string; y: number | string }[] = [
  { id: 1, label: '10k', x: '20%', y: '70%' },
  { id: 2, label: '35k', x: '50%', y: '50%' },
  { id: 3, label: '70k', x: '75%', y: '30%' },
];

const DefiRoadMapScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Désert, Avril</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Carte */}
        <ImageBackground
          source={require('../assets/bg_map.png')} // Ton image ici
          style={styles.map}
        >
          {/* Départ */}
          <View style={[styles.marker, { top: '90%', left: '5%' }]}>
            <Text style={styles.markerText}>🚩</Text>
          </View>

          {/* Étapes */}
          {steps.map((step) => (
            <View
              key={step.id}
              style={[
                styles.step,
                { top: step.y as any, left: step.x as any },
              ]}
            >
              <Text style={styles.stepText}>{step.label}</Text>
            </View>
          ))}


          {/* Avatar joueur */}
          <Image
            source={require('../assets/avatar1.png')}
            style={[styles.avatar, { top: '50%', left: '48%' }]} // Position de ton avatar actuelle
          />

          {/* Arrivée */}
          <View style={[styles.marker, { top: '5%', left: '90%' }]}>
            <Text style={styles.markerText}>🏁</Text>
          </View>
        </ImageBackground>

        {/* Statistiques */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Achievements</Text>
            <Text style={styles.statValue}>48,582</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Ranking</Text>
            <Text style={styles.statValue}>838,628</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DefiRoadMapScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  map: {
    width: width - 40,
    height: 400,
    resizeMode: 'cover',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  marker: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    elevation: 4,
  },
  markerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  step: {
    position: 'absolute',
    backgroundColor: '#7A4CD9',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  avatar: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    resizeMode: 'contain',
  },
  statsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

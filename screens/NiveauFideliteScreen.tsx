import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const levels = [
  { id: '1', name: 'Bronze', points: '0-499', icon: require('../assets/badge_bronze.png') },
  { id: '2', name: 'Argent', points: '500-999', icon: require('../assets/badge_argent.png') },
  { id: '3', name: 'Or', points: '1000-1499', icon: require('../assets/badge_or.png') },
  { id: '4', name: 'Platine', points: '1500-1999', icon: require('../assets/badge_platine.png') },
  { id: '5', name: 'Diamant', points: '2000+', icon: require('../assets/badge_diamant.png') },
];

const currentLevel = 'Or';
const currentPoints = 1190;
const nextLevelThreshold = 1500;

const NiveauFideliteScreen = () => {
  const navigation = useNavigation();
  const progressPercent = (currentPoints / nextLevelThreshold) * 100;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Niveaux de fidélité</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Carte Profil Niveau Actuel */}
      <View style={styles.profileCard}>
        <Image source={require('../assets/badge_or.png')} style={styles.profileIcon} />
        <Text style={styles.levelLabel}>Niveau actuel : <Text style={{ color: '#FFD700' }}>Or</Text></Text>
        <Text style={styles.progressInfo}>{currentPoints}/{nextLevelThreshold} points</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
        </View>
        <Text style={styles.tip}>
          Encore {nextLevelThreshold - currentPoints} points pour atteindre <Text style={{ color: '#7A4CD9' }}>Platine</Text> 🏆
        </Text>
      </View>

      {/* Liste des niveaux */}
      <Text style={styles.sectionTitle}>Tous les niveaux</Text>
      {levels.map((level) => (
        <View key={level.id} style={styles.levelCard}>
          <Image source={level.icon} style={styles.levelIcon} />
          <View>
            <Text style={styles.levelName}>{level.name}</Text>
            <Text style={styles.levelRange}>{level.points} points</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default NiveauFideliteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 2,
    marginBottom: 20,
  },
  profileIcon: {
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: 'contain',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  levelLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressInfo: {
    fontSize: 13,
    color: '#888',
    marginVertical: 6,
  },
  progressBar: {
    width: '100%',
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: 10,
    backgroundColor: '#7A4CD9',
  },
  tip: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  levelCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
  },
  levelIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 12,
  },
  levelName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  levelRange: {
    fontSize: 13,
    color: '#777',
  },
});

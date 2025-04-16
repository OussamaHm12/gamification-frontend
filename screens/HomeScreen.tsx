import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';

const recentBadges = [
  { id: '1', name: 'Virement Hero', icon: require('../assets/badge1.png') },
  { id: '2', name: 'Epargne Master', icon: require('../assets/badge2.png') },
];

const HomeScreen = () => {
  const navigation = useNavigation() as NativeStackNavigationProp<RootStackParamList>;

  const today = new Date();
  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const monthNames = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  const formattedDate = `${dayNames[today.getDay()]}, Le ${today.getDate()} ${monthNames[today.getMonth()]}`;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Bonjour, Anas</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <View style={styles.pointsBox}>
          <Ionicons name="pricetag" size={18} color="#fff" />
          <Text style={styles.points}>1190</Text>
        </View>
      </View>

      {/* Mes interactions */}
      <Text style={styles.sectionTitle}>Mes interactions</Text>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Factures')}>
          <Ionicons name="receipt-outline" size={26} color="#FB8C00" />
          <Text style={styles.cardTitle}>Factures</Text>
          <Text style={styles.cardValue}>5 fois</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Virements')}>
          <Ionicons name="card-outline" size={26} color="#FB8C00" />
          <Text style={styles.cardTitle}>Carte</Text>
          <Text style={styles.cardValue}>25 paiements</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Virements')}>
          <Ionicons name="swap-horizontal-outline" size={26} color="#FB8C00" />
          <Text style={styles.cardTitle}>Virements</Text>
          <Text style={styles.cardValue}>15 effectués</Text>
        </TouchableOpacity>
      </View>

      {/* Statistiques de fidélité */}
      <Text style={styles.sectionTitle}>Statistiques de fidélité</Text>
      <View style={styles.loyaltyBox}>
        <Text style={styles.levelText}>Niveau actuel : <Text style={{ color: '#7A4CD9' }}>Or</Text></Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '65%' }]} />
        </View>
        <Text style={styles.progressNote}>+ 35% pour atteindre le niveau Platine</Text>
      </View>

      {/* Badges récents */}
      <Text style={styles.sectionTitle}>🎖️ Badges récents</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recentBadges.map((badge) => (
          <View key={badge.id} style={styles.badgeCard}>
            <Image source={badge.icon} style={styles.badgeImage} />
            <Text style={styles.badgeName}>{badge.name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
  },
  date: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  pointsBox: {
    backgroundColor: '#FB8C00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  points: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 28,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    width: '47%',
    alignItems: 'center',
    elevation: 2,
  },
  cardTitle: {
    fontWeight: '600',
    marginTop: 8,
    fontSize: 14,
  },
  cardValue: {
    fontSize: 13,
    color: '#FB8C00',
  },
  loyaltyBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 2,
  },
  levelText: {
    fontWeight: '600',
    marginBottom: 6,
    fontSize: 14,
  },
  progressBar: {
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressFill: {
    height: 12,
    backgroundColor: '#7A4CD9',
    borderRadius: 10,
  },
  progressNote: {
    fontSize: 12,
    color: '#777',
  },
  badgeCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    width: 100,
  },
  badgeImage: {
    width: 48,
    height: 48,
    marginBottom: 6,
  },
  badgeName: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});
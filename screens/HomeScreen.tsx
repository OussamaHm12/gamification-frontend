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

const personalChallenges = [
  { id: '1', name: '20 virements en 30 jours', progress: 65 },
  { id: '2', name: '5 factures cette semaine', progress: 40 },
];

const HomeScreen = () => {
  const navigation = useNavigation() as NativeStackNavigationProp<RootStackParamList>;
  const today = new Date();
  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const monthNames = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  const formattedDate = `${dayNames[today.getDay()]}, Le ${today.getDate()} ${monthNames[today.getMonth()]}`;

  return (
    <View style={styles.container}>
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

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.sectionTitle}>Mes interactions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
          <TouchableOpacity style={styles.hCard} onPress={() => navigation.navigate('Interactions')}>
            <Ionicons name="receipt-outline" size={24} color="#FB8C00" />
            <Text style={styles.hCardTitle}>Factures</Text>
            <Text style={styles.hCardValue}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hCard} onPress={() => navigation.navigate('Interactions')}>
            <Ionicons name="card-outline" size={24} color="#FB8C00" />
            <Text style={styles.hCardTitle}>Carte</Text>
            <Text style={styles.hCardValue}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hCard} onPress={() => navigation.navigate('Interactions')}>
            <Ionicons name="swap-horizontal-outline" size={24} color="#FB8C00" />
            <Text style={styles.hCardTitle}>Virements</Text>
            <Text style={styles.hCardValue}>15</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.sectionTitle}>Statistiques de fidélité</Text>
        <View style={styles.loyaltyBox}>
          <Text style={styles.levelText}>Niveau actuel : <Text style={{ color: '#7A4CD9' }}>Or</Text></Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '65%' }]} />
          </View>
          <Text style={styles.progressNote}>+ 35% pour atteindre le niveau Platine</Text>
        </View>

        <Text style={styles.sectionTitle}>🎖️ Badges récents</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentBadges.map((badge) => (
            <View key={badge.id} style={styles.badgeCard}>
              <Image source={badge.icon} style={styles.badgeImage} />
              <Text style={styles.badgeName}>{badge.name}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>🔥 Challenges personnels</Text>
        {personalChallenges.map((challenge) => (
          <View key={challenge.id} style={styles.challengeBox}>
            <Text style={styles.challengeTitle}>{challenge.name}</Text>
            <View style={styles.challengeProgressBar}>
              <View style={[styles.challengeProgressFill, { width: `${challenge.progress}%` }]} />
            </View>
            <Text style={styles.challengeProgressText}>{challenge.progress}% accompli</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F5F1' },
  header: {
    backgroundColor: '#F9F5F1',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,
  },
  content: { paddingHorizontal: 20 },
  greeting: { fontSize: 22, fontWeight: '700' },
  date: { fontSize: 14, color: '#555', marginTop: 4 },
  pointsBox: {
    backgroundColor: '#FB8C00',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  points: { color: '#fff', fontWeight: 'bold' },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginTop: 28, marginBottom: 12 },
  hCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    width: 140,
    alignItems: 'center',
    marginRight: 12,
    elevation: 2,
  },
  hCardTitle: { fontWeight: '600', marginTop: 6, fontSize: 14 },
  hCardValue: { fontSize: 13, color: '#FB8C00' },
  loyaltyBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    elevation: 2,
  },
  levelText: { fontWeight: '600', marginBottom: 6, fontSize: 14 },
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
  progressNote: { fontSize: 12, color: '#777' },
  badgeCard: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
    width: 100,
  },
  badgeImage: { width: 48, height: 48, marginBottom: 6 },
  badgeName: { fontSize: 12, textAlign: 'center', fontWeight: '500' },
  challengeBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
  },
  challengeTitle: { fontWeight: '600', marginBottom: 8 },
  challengeProgressBar: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 6,
  },
  challengeProgressFill: { height: 10, backgroundColor: '#32C17C' },
  challengeProgressText: { fontSize: 12, color: '#555' },
});
import React, { useState, useCallback, useEffect  } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/RootNavigator';
import { getTotalPoints } from '../services/pointsService';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';



const personalChallenges = [
  { id: '1', name: '20 virements en 30 jours', current: 12, total: 20, progress: 60 },
  { id: '2', name: '5 factures cette semaine', current: 3, total: 5, progress: 60 },
];

const HomeScreen = () => {
  const navigation = useNavigation() as NativeStackNavigationProp<RootStackParamList>;
  const [userPoints, setUserPoints] = useState<number>(0);

  const fetchUserPoints = async () => {
    try {
      const total = await getTotalPoints(1); // id utilisateur en dur
      setUserPoints(total);
    } catch (error) {
      console.error('Erreur en récupérant les points :', error);
    }
  };
  
  useFocusEffect(
    useCallback(() => {
      fetchUserPoints();
    }, [])
  );
  

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
        <TouchableOpacity style={styles.pointsBox} onPress={() => navigation.navigate('Store')}>
          <Ionicons name="pricetag" size={18} color="#fff" />
          <Text style={styles.points}>
          {userPoints.toFixed(1)}
          </Text>
        </TouchableOpacity>

      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.sectionTitle}>Niveau et Points</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Niveau')}>
          <View style={styles.gamingBox}>
            <View style={styles.levelRow}>
              <Image source={require('../assets/level.png')} style={styles.levelIcon} />
              <Text style={styles.levelText}>
                Niveau actuel : <Text style={{ color: '#FFD700' }}>Or</Text>
              </Text>
            </View>
            <View style={styles.levelBar}>
              <View style={[styles.levelProgress, { width: '65%' }]} />
            </View>
            <Text style={styles.progressNote}>
              Encore 35% pour débloquer <Text style={{ color: '#7A4CD9' }}>Platine</Text> 🏆
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Challenges personnels</Text>
        {personalChallenges.map((challenge) => (
          <TouchableOpacity
            key={challenge.id}
            style={styles.challengeCard}
            onPress={() => navigation.navigate('DefiDetail', { defiId: challenge.id })}
          >
            <Text style={styles.challengeMain}>{challenge.current} / {challenge.total}</Text>
            <Text style={styles.challengeSub}>{challenge.name}</Text>

            <View style={styles.progressWrapper}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${challenge.progress}%` }]} />
              </View>
              <View style={styles.percentageBubble}>
                <Text style={styles.percentageText}>{challenge.progress}%</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Mes opérations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
          <TouchableOpacity style={styles.hCard} onPress={() => navigation.navigate('Interactions', { filter: 'Factures' })}>
            <Ionicons name="receipt-outline" size={24} color="#FB8C00" />
            <Text style={styles.hCardTitle}>Factures</Text>
            <Text style={styles.hCardValue}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hCard} onPress={() => navigation.navigate('Interactions', { filter: 'Carte' })}>
            <Ionicons name="card-outline" size={24} color="#FB8C00" />
            <Text style={styles.hCardTitle}>Carte</Text>
            <Text style={styles.hCardValue}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.hCard} onPress={() => navigation.navigate('Interactions', { filter: 'Virements' })}>
            <Ionicons name="swap-horizontal-outline" size={24} color="#FB8C00" />
            <Text style={styles.hCardTitle}>Virements</Text>
            <Text style={styles.hCardValue}>7</Text>
          </TouchableOpacity>
        </ScrollView>
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

  // 🎮 Loyalty gaming style
  gamingBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    elevation: 2,
    alignItems: 'center',
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  levelIcon: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  levelText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  levelBar: {
    width: '100%',
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 8,
  },
  levelProgress: {
    height: 12,
    backgroundColor: '#7A4CD9',
    borderRadius: 10,
  },
  progressNote: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },

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


  challengeCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    elevation: 2,
  },
  challengeMain: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  challengeSub: {
    fontSize: 13,
    color: '#888',
    marginBottom: 10,
  },
  progressWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: 10,
    backgroundColor: '#32C17C',
    borderRadius: 10,
  },
  percentageBubble: {
    position: 'absolute',
    right: 0,
    top: -20,
    backgroundColor: '#C7F5DC',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  percentageText: {
    color: '#0A9F6D',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
});

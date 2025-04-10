// ✅ screens/DefisScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const autresDefis = [
  {
    id: '1',
    titre: 'Payer 3 factures via Pocket Bank',
    amis: 2,
  },
  {
    id: '2',
    titre: 'Effectuer plus de 5 paiements par carte',
    amis: 3,
  },
];

const DefisScreen = () => {
  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View style={styles.rightHeader}>
          <Ionicons name="trophy" size={20} color="#FB8C00" />
          <Text style={styles.points}>1190</Text>
        </View>
      </View>

      <Text style={styles.date}>Vendredi, 29 Dec</Text>

      {/* Défi en cours */}
      <View style={styles.challengeBox}>
        <Image source={require('../assets/badge.png')} style={styles.badge} />
        <View style={{ flex: 1 }}>
          <Text style={styles.challengeTitle}>Vous y êtes presque !</Text>
          <Text style={styles.challengeSubtitle}>Virement restant à gagner : 5</Text>

          <View style={styles.progressBarContainer}>
            <View style={[styles.progressBar, { width: '75%' }]} />
            <Ionicons
              name="lock-closed-outline"
              size={16}
              color="#7A4CD9"
              style={styles.rewardIcon}
            />
          </View>

          <View style={styles.statsRow}>
            <Text style={styles.statsText}>Moyenne
4 Virement</Text>
            <Text style={styles.statsText}>Meilleur
5 Virement</Text>
          </View>
        </View>
      </View>

      {/* Autres défis */}
      <Text style={styles.sectionTitle}>Autres Défis</Text>
      <Text style={styles.sectionDate}>Dec , 2025</Text>

      <FlatList
        data={autresDefis}
        keyExtractor={(item) => item.id}
        horizontal={false}
        renderItem={({ item }) => (
          <View style={styles.otherDefiBox}>
            <Text style={styles.otherDefiText}>{item.titre}</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinText}>Rejoindre</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default DefisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  rightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  points: {
    fontWeight: 'bold',
    color: '#FB8C00',
    fontSize: 16,
  },
  date: {
    marginTop: 6,
    marginBottom: 16,
    fontSize: 14,
    color: '#555',
  },
  challengeBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 2,
  },
  badge: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  challengeTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  challengeSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#DDD2C0',
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 12,
    position: 'relative',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#35B36A',
  },
  rewardIcon: {
    position: 'absolute',
    right: -8,
    top: -16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  statsText: {
    fontSize: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  sectionDate: {
    color: '#888',
    marginBottom: 12,
  },
  otherDefiBox: {
    backgroundColor: '#E7DED3',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  otherDefiText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '500',
    marginRight: 12,
  },
  joinButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  joinText: {
    fontWeight: '600',
  },
});

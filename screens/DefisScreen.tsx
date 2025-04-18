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

const podium = [
  { name: 'Hassan', position: 1 },
  { name: 'Vous', position: 2 },
  { name: 'Youssef', position: 3 },
];

const DefisScreen = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Header */}
      <Text style={styles.header}>Partage</Text>

      {/* Carte Profil */}
      <View style={styles.profileCard}>
        <Image source={require('../assets/profile_icon.png')} style={styles.avatar} />
        <View style={styles.infoBox}>
          <Text style={styles.levelText}>Débutant</Text>
          <Text style={styles.levelLabel}>Niveau</Text>
          <Text style={styles.levelValue}>9</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.infoBox}>
          <Text style={styles.levelLabel}>Amis</Text>
          <Text style={styles.levelValue}>177</Text>
        </View>
      </View>

      {/* Bouton Créer un défi */}
      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createBtnText}>Créer un défi</Text>
      </TouchableOpacity>

      {/* Classement */}
      <Text style={styles.sectionTitle}>Classement nombre de pas</Text>
      <View style={styles.podiumRow}>
        {podium.map((item, index) => (
          <View key={index} style={styles.podium}>
            <Ionicons name="person-circle" size={36} color="#32C17C" />
            <Text style={styles.podiumName}>{item.name}</Text>
            <View style={[styles.bar, { height: 50 - index * 10 }]} />
            <Text style={styles.podiumRank}>{item.position}</Text>
          </View>
        ))}
      </View>

      {/* Défi Populaire */}
      <View style={styles.challengeCard}>
        <Text style={styles.challengeTitle}>Désert, avril</Text>
        <Text style={styles.challengeDesc}>Rejoignez-nous et restons actifs ensemble.</Text>
        <View style={styles.challengeFooter}>
          <View>
            <Text style={styles.participantLabel}>Participants</Text>
            <Text style={styles.participantValue}>827 534</Text>
          </View>
          <TouchableOpacity style={styles.joinBtn}>
            <Text style={styles.joinBtnText}>Rejoindre</Text>
          </TouchableOpacity>
          <Image source={require('../assets/cactus.png')} style={styles.challengeImage} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DefisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F3',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 20,
  },
  infoBox: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  levelText: {
    fontSize: 14,
    fontWeight: '600',
  },
  levelLabel: {
    fontSize: 12,
    color: '#888',
  },
  levelValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  separator: {
    width: 1,
    height: 40,
    backgroundColor: '#ccc',
    marginHorizontal: 16,
  },
  createBtn: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    elevation: 1,
    marginBottom: 20,
  },
  createBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  podiumRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  podium: {
    alignItems: 'center',
  },
  podiumName: {
    fontSize: 13,
    marginTop: 4,
  },
  podiumRank: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 4,
  },
  bar: {
    width: 16,
    backgroundColor: '#32C17C',
    marginTop: 6,
    borderRadius: 4,
  },
  challengeCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 2,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  challengeDesc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 16,
  },
  challengeFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  participantLabel: {
    fontSize: 12,
    color: '#888',
  },
  participantValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  joinBtn: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
  },
  joinBtnText: {
    fontWeight: 'bold',
  },
  challengeImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

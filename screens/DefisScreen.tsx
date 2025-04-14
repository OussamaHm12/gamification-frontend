import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const autresDefis = [
  {
    id: '1',
    titre: 'Payer 3 factures via Pocket Bank',
    amis: 3,
  },
  {
    id: '2',
    titre: 'Effectuer plus de 5 paiements par carte',
    amis: 3,
  },
];

const DefisScreen = () => {
  const today = moment().format('dddd, D MMM');
  const formattedDate = today.charAt(0).toUpperCase() + today.slice(1);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View style={styles.pointsBox}>
          <Ionicons name="pricetag" size={18} color="#FB8C00" />
          <Text style={styles.pointsText}>1190</Text>
        </View>
      </View>

      <Text style={styles.date}>{formattedDate}</Text>

      <View style={styles.challengeBox}>
        <Image source={require('../assets/badge.png')} style={styles.challengeImage} />
        <Text style={styles.challengeTitle}>Vous y êtes presque !</Text>
        <Text style={styles.challengeSubtitle}>Virement restant à gagner</Text>
        <Text style={styles.challengeCount}>5</Text>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: '75%' }]} />
          <Ionicons name="trophy" size={18} color="#7A4CD9" style={styles.rewardIcon} />
        </View>

        <View style={styles.progressLabelRow}>
          <Text style={styles.progressLabel}>15 virements faits</Text>
          <Text style={styles.progressLabel}>But 20</Text>
        </View>

        <View style={styles.statsBox}>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Moyenne</Text>
            <Text style={styles.statValue}>4 Virement</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statTitle}>Meilleur</Text>
            <Text style={styles.statValue}>5 Virement</Text>
          </View>
        </View>
      </View>

      <View style={styles.otherChallengesHeader}>
        <Ionicons name="chevron-back" size={20} />
        <Text style={styles.otherChallengesDate}>Dec , 2025</Text>
        <Ionicons name="chevron-forward" size={20} />
      </View>

      <FlatList
        data={autresDefis}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.otherChallengeItem}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.otherChallengeText}>{item.titre}</Text>
              <Text style={styles.challengeFriends}>{item.amis} amis sur ce challenge</Text>
            </View>
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
    backgroundColor: '#FDF8F3',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  pointsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3CD',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  pointsText: {
    fontWeight: 'bold',
    color: '#FB8C00',
    marginLeft: 6,
  },
  date: {
    marginTop: 8,
    marginBottom: 20,
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
  },
  challengeBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
  },
  challengeImage: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  challengeSubtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  challengeCount: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#E9E2D8',
    borderRadius: 5,
    marginBottom: 6,
    position: 'relative',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#32C17C',
    borderRadius: 5,
  },
  rewardIcon: {
    position: 'absolute',
    right: -10,
    top: -14,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  progressLabel: {
    fontSize: 12,
    color: '#444',
  },
  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statTitle: {
    fontSize: 12,
    color: '#888',
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
  },
  otherChallengesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 12,
  },
  otherChallengesDate: {
    fontSize: 14,
    fontWeight: '500',
  },
  otherChallengeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E7DED3',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  otherChallengeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  challengeFriends: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
  joinButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    flexShrink: 0,
  },
  joinText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
});

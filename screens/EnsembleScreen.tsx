// ✅ screens/EnsembleScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ensembleChallenges = [
  {
    id: '1',
    titre: 'Défi carte week-end',
    participants: [
      { name: 'Anas', points: 70 },
      { name: 'Bachir', points: 40 },
      { name: 'Sofia', points: 35 },
    ],
  },
];

const EnsembleScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Défis en groupe</Text>

      <FlatList
        data={ensembleChallenges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.challengeBox}>
            <Text style={styles.challengeTitle}>{item.titre}</Text>
            <Text style={styles.challengeSubtitle}>{item.participants.length} participants</Text>

            <View style={styles.rankingHeader}>
              <Text style={styles.rankTitle}>Classement</Text>
            </View>

            {item.participants.map((p, index) => (
              <View style={styles.participantRow} key={p.name}>
                <View style={styles.rankLeft}>
                  <Text style={styles.rankNumber}>#{index + 1}</Text>
                  <Image
                    source={require('../assets/avatar.png')}
                    style={styles.avatar}
                  />
                  <Text style={styles.name}>{p.name}</Text>
                </View>
                <Text style={styles.points}>{p.points} pts</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default EnsembleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  challengeBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  challengeTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  challengeSubtitle: {
    fontSize: 13,
    color: '#888',
    marginBottom: 12,
  },
  rankingHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 6,
    marginBottom: 10,
  },
  rankTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  participantRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  rankLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankNumber: {
    fontWeight: 'bold',
    marginRight: 8,
    color: '#7A4CD9',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  points: {
    fontWeight: 'bold',
    color: '#FB8C00',
  },
});

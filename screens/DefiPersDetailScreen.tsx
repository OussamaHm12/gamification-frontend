import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';

const personalChallenges = [
  { id: '1', name: '20 virements en 30 jours', progress: 65 },
  { id: '2', name: '5 factures cette semaine', progress: 40 },
];

const DefiPersDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const defiId = route.params?.defiId ?? personalChallenges[0].id;
  const [currentId, setCurrentId] = useState(defiId);
  const defi = personalChallenges.find((c) => c.id === currentId);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Détail du défi</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.switchRow}>
        {personalChallenges.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.switchBtn, currentId === item.id && styles.switchBtnActive]}
            onPress={() => setCurrentId(item.id)}
          >
            <Text style={[styles.switchText, currentId === item.id && styles.switchTextActive]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {defi && (
        <View style={styles.detailBox}>
          <Text style={styles.challengeTitle}>{defi.name}</Text>
          <View style={styles.challengeProgressBar}>
            <View style={[styles.challengeProgressFill, { width: `${defi.progress}%` }]} />
          </View>
          <Text style={styles.challengeProgressText}>{defi.progress}% accompli</Text>
          <Text style={styles.detailDescription}>
            Relevez des défis et repartez avec des badges, avatars et avantages uniques !
          </Text>
        </View>
      )}

      {/* Bloc Récompense */}
      <View style={styles.rewardBox}>
        <Ionicons name="trophy-outline" size={24} color="#FFD700" />
        <Text style={styles.rewardTitle}>Récompense</Text>
        <Text style={styles.rewardText}>+30 points et Badge "Maître des virements"</Text>
      </View>

      {/* Bloc Participants */}
      <View style={styles.participantsBox}>
        <Text style={styles.subTitle}>Tes amis dans ce défi :</Text>
        <View style={styles.avatarsRow}>
          <Image source={require('../assets/avatar1.png')} style={styles.avatar} />
          <Image source={require('../assets/avatar2.png')} style={styles.avatar} />
          <Image source={require('../assets/avatar3.png')} style={styles.avatar} />
          <Text style={styles.moreText}>+3 autres</Text>
        </View>
      </View>

      {/* Bloc Statistiques */}
      <View style={styles.statsBox}>
        <Text style={styles.subTitle}>Statistiques</Text>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Total :</Text>
          <Text style={styles.statValue}>13 virements</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Meilleur jour :</Text>
          <Text style={styles.statValue}>5 virements</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Temps restant :</Text>
          <Text style={styles.statValue}>6 jours</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DefiPersDetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9F5F1', paddingTop: 50, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'center' },
  switchRow: { flexDirection: 'row', marginBottom: 20 },
  switchBtn: {
    backgroundColor: '#eee',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  switchBtnActive: {
    backgroundColor: '#7A4CD9',
  },
  switchText: { fontSize: 13, color: '#444' },
  switchTextActive: { color: '#fff' },
  detailBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 2,
  },
  challengeTitle: { fontWeight: '600', fontSize: 16, marginBottom: 12 },
  challengeProgressBar: {
    height: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  challengeProgressFill: { height: 12, backgroundColor: '#32C17C' },
  challengeProgressText: { fontSize: 12, color: '#555', marginBottom: 12 },
  detailDescription: { fontSize: 14, color: '#666', lineHeight: 20 },

  rewardBox: {
    backgroundColor: '#FFF9E6',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  rewardTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
  },
  rewardText: {
    fontSize: 13,
    color: '#555',
    marginTop: 4,
    textAlign: 'center',
  },

  participantsBox: {
    backgroundColor: '#F0F0FF',
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  avatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  moreText: {
    fontSize: 13,
    color: '#666',
  },

  statsBox: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  subTitle: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 8,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 13,
    color: '#555',
  },
  statValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
});

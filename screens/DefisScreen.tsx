import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const leaderboard = [
  { name: 'Rachid', avatar: require('../assets/avatar1.png'), steps: 9800 },
  { name: 'mansourianas01', avatar: require('../assets/avatar2.png'), steps: 8700 },
  { name: 'Zakariae', avatar: require('../assets/avatar3.png'), steps: 8200 },
  { name: 'You', avatar: require('../assets/avatar4.png'), steps: 7800 },
  { name: 'Achraf', avatar: require('../assets/avatar5.png'), steps: 7600 },
];

const DefisScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Together</Text>

        {/* Profil */}
        <View style={styles.profileCard}>
          <Image source={require('../assets/profile_icon.png')} style={styles.profileIcon} />
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Niveau</Text>
            <Text style={styles.value}>2</Text>
          </View>
          <View style={styles.separator} />
          <TouchableOpacity
            style={styles.profileInfo}
            onPress={() => navigation.navigate('Friends', { defaultTab: 'Friends' })}
          >
            <Text style={styles.label}>Amis</Text>
            <Text style={styles.value}>9</Text>
          </TouchableOpacity>
        </View>

        {/* Créer un défi */}
        <TouchableOpacity
          style={styles.createBtn}
          onPress={() => navigation.navigate('CreateDefi')}
        >
          <Text style={styles.createBtnText}>Créer un défi</Text>
        </TouchableOpacity>

        {/* Classement des points */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Friends', { tab: 'Leaderboard' })}
          style={styles.section}
        >
          <Text style={styles.sectionTitle}>Classement total des points</Text>
          <View style={styles.podium}>
            {leaderboard.map((user, index) => (
              <View key={index} style={[styles.podiumStep, { height: 100 - index * 10 }]}>
                <Image source={user.avatar} style={styles.avatar} />
                <Text style={styles.rank}>{index + 1}</Text>
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.userName}>
                  {user.name}
                </Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>

        {/* Défi populaire */}
        <TouchableOpacity style={styles.challengeCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.challengeTitle}>Désert, avril</Text>
            <Text style={styles.challengeDesc}>Rejoignez-nous et restons actifs ensemble.</Text>
            <Text style={styles.stepCount}>
              Total des pas : <Text style={{ fontWeight: 'bold' }}>17 840</Text>
            </Text>
          </View>
          <Image source={require('../assets/defis_logo.png')} style={styles.challengeImage} />
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DefisScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  profileIcon: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  profileInfo: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 13,
    color: '#777',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  separator: {
    width: 1,
    height: 40,
    backgroundColor: '#ccc',
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
  section: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  podium: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  podiumStep: {
    width: 60,
    backgroundColor: '#32C17C',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    position: 'relative',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    position: 'absolute',
    top: -20,
  },
  userName: {
    fontSize: 11,
    color: '#fff',
    marginTop: 4,
    maxWidth: 56,
  },
  rank: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 2,
  },
  challengeCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  challengeDesc: {
    fontSize: 13,
    color: '#666',
    marginBottom: 10,
  },
  stepCount: {
    fontSize: 14,
    color: '#333',
  },
  challengeImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

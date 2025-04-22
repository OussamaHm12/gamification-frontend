import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MaPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ma page</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.profileCard}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editText}>Modifier</Text>
        </TouchableOpacity>
        <Text style={styles.username}>Anas</Text>
        <Text style={styles.level}>Débutant Niveau 4 | 200/450 points expérience</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: '44%' }]} />
        </View>
        <View style={styles.statsRow}>
          <TouchableOpacity style={styles.statsBtn}>
            <Text style={styles.statsText}             onPress={() => navigation.navigate('Friends', { defaultTab: 'Friends' })}
            >9 amis</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.statsBtn}>
            <Text style={styles.statsText}>Mon code QR</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.badgeSection}>
        <View style={styles.badgeHeader}>
          <Text style={styles.badgeTitle}>Badges</Text>
          <Ionicons name="chevron-forward" size={20} color="#444" />
        </View>
        <View style={styles.badgeRow}>
          <View style={styles.badgeItem}>
            <Image source={require('../assets/badge1.png')} style={styles.badgeIcon} />
            <Text style={styles.badgeLabel}>1 semaine de succès</Text>
            <Text style={styles.badgeDate}>26 févr.</Text>
          </View>
          <View style={styles.badgeItem}>
            <Image source={require('../assets/badge2.png')} style={styles.badgeIcon} />
            <Text style={styles.badgeLabel}>Première sortie</Text>
            <Text style={styles.badgeDate}>08 sept. 2024</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MaPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    marginBottom: 10,
  },
  editBtn: {
    position: 'absolute',
    right: 16,
    top: 16,
    backgroundColor: '#EAEAEA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  editText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
  },
  level: {
    fontSize: 13,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#EEE',
    borderRadius: 8,
    marginVertical: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: 10,
    backgroundColor: '#4285F4',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 10,
  },
  statsBtn: {
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 14,
    paddingHorizontal: 18,
  },
  statsText: {
    fontWeight: '600',
  },
  badgeSection: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
  },
  badgeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  badgeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  badgeItem: {
    alignItems: 'center',
    width: 120,
  },
  badgeIcon: {
    width: 50,
    height: 50,
    marginBottom: 6,
  },
  badgeLabel: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  badgeDate: {
    fontSize: 11,
    color: '#888',
    marginTop: 2,
  },
});

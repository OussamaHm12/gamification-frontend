import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Friend = {
  id: string;
  name: string;
  points: number;
  level: number;
  avatar: any;
  challenges: string[];
  badges: any[];
};

const friends: Friend[] = [
  {
    id: '1',
    name: 'Anas',
    points: 1240,
    level: 4,
    avatar: require('../assets/avatar1.png'),
    challenges: ['Défi Facture', 'Défi Week-end'],
    badges: [
      require('../assets/badge1.png'),
      require('../assets/badge2.png'),
      require('../assets/badge3.png'),
    ],
  },
  {
    id: '2',
    name: 'Sofia',
    points: 980,
    level: 3,
    avatar: require('../assets/avatar2.png'),
    challenges: ['Défi Transport', 'Défi Carte'],
    badges: [require('../assets/badge2.png'), require('../assets/badge4.png')],
  },
];

const EnsembleScreen = () => {
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openFriendDetails = (friend: Friend) => {
    setSelectedFriend(friend);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="people-circle" size={40} color="#FB8C00" />
        <Text style={styles.title}>Vos amis dans le jeu</Text>
        <Text style={styles.subtitle}>
          Découvrez combien de points vos amis ont accumulés 🎮
        </Text>
      </View>

      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => openFriendDetails(item)}>
            <View style={styles.info}>
              <Image source={item.avatar} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.level}>Total de points</Text>
              </View>
            </View>
            <View style={styles.pointsBox}>
              <Text style={styles.pointsText}>{item.points}</Text>
              <Text style={styles.unit}>pts</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Popup enrichi */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Image source={selectedFriend?.avatar} style={styles.modalAvatar} />
            <Text style={styles.modalName}>{selectedFriend?.name}</Text>
            <Text style={styles.modalPoints}>💰 {selectedFriend?.points} points</Text>
            <Text style={styles.modalLevel}>🏆 Niveau {selectedFriend?.level}</Text>

            {/* Défis récents */}
            <Text style={styles.sectionTitle}>Derniers défis rejoints</Text>
            <View style={styles.challengeList}>
              {selectedFriend?.challenges.map((ch, index: number) => (
                <View key={index} style={styles.challengeItem}>
                  <Ionicons name="checkmark-circle" size={16} color="#32C17C" />
                  <Text style={styles.challengeText}>{ch}</Text>
                </View>
              ))}
            </View>

            {/* Badges */}
            <Text style={styles.sectionTitle}>Badges gagnés</Text>
            <View style={styles.badgesGrid}>
              {selectedFriend?.badges.map((badge, index: number) => (
                <View key={index} style={styles.badgeItem}>
                  <Image source={badge} style={styles.badgeImage} />
                </View>
              ))}
            </View>

            <Pressable style={styles.closeBtn} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EnsembleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F4',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    marginTop: 4,
    lineHeight: 18,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
    elevation: 2,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E2E2E',
  },
  level: {
    fontSize: 12,
    color: '#999',
  },
  pointsBox: {
    backgroundColor: '#FFF3E0',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FB8C00',
  },
  unit: {
    fontSize: 12,
    color: '#FB8C00',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  modalAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 12,
  },
  modalName: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },
  modalPoints: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FB8C00',
  },
  modalLevel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 16,
    color: '#7A4CD9',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444',
    alignSelf: 'flex-start',
    marginTop: 14,
    marginBottom: 6,
  },
  challengeList: {
    alignSelf: 'flex-start',
    width: '100%',
    marginBottom: 10,
  },
  challengeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  challengeText: {
    fontSize: 13,
    marginLeft: 6,
    color: '#555',
  },
  badgesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  badgeItem: {
    backgroundColor: '#F3F4F6',
    padding: 6,
    margin: 6,
    borderRadius: 12,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  closeBtn: {
    backgroundColor: '#FB8C00',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

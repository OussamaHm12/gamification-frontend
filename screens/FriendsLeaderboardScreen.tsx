import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


const friends = [
  { name: 'El ALAOUI Rachid', avatar: require('../assets/avatar1.png'), points: 55544 },
  { name: 'mansouri anas', avatar: require('../assets/avatar2.png'), points: 50245 },
  { name: 'Faudali mohammed', avatar: require('../assets/avatar3.png'), points: 35532 },
  { name: 'You', avatar: require('../assets/avatar4.png'), points: 17840 },
  { name: 'salik el bachir', avatar: require('../assets/avatar5.png'), points: 0 },
  { name: 'saad barga', avatar: require('../assets/avatar1.png'), points: 0 },
];

const FriendsLeaderboardScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedTab, setSelectedTab] = useState<'Leaderboard' | 'Friends'>('Leaderboard');

  // Gestion du tab par défaut depuis navigation
  useEffect(() => {
    if (route.params?.defaultTab) {
      setSelectedTab(route.params.defaultTab);
    }
  }, [route.params]);

  const sorted = [...friends].sort((a, b) => b.points - a.points);
  const maxpoints = Math.max(...friends.map((f) => f.points));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Leaderboard' && styles.tabActive]}
            onPress={() => setSelectedTab('Leaderboard')}
          >
            <Text style={[styles.tabText, selectedTab === 'Leaderboard' && styles.tabTextActive]}>
              Leaderboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Friends' && styles.tabActive]}
            onPress={() => setSelectedTab('Friends')}
          >
            <Text style={[styles.tabText, selectedTab === 'Friends' && styles.tabTextActive]}>
              Friends
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 24 }} />
      </View>

      {/* Content */}
      {selectedTab === 'Leaderboard' ? (
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
          <Text style={styles.rankText}>Your rank: 4th</Text>
          <Text style={styles.hintText}>
            You're behind by 17,692 points. Keep going to catch up to Zakariae ELOMARI!
          </Text>

          {/* Podium */}
          <View style={styles.podium}>
            {sorted.slice(0, 5).map((friend, index) => (
              <View key={index} style={styles.barContainer}>
                <Image source={friend.avatar} style={styles.barAvatar} />
                <View style={styles.barTrack}>
                  <View
                    style={[styles.barFill, { height: `${(friend.points / maxpoints) * 100}%` }]}
                  />
                </View>
                <Text numberOfLines={1} style={styles.barName}>
                  {friend.name}
                </Text>
              </View>
            ))}
          </View>

          {/* Classement détaillé */}
          <View style={styles.rankingBox}>
            {sorted.map((friend, index) => (
              <View key={index} style={styles.rankRow}>
                <Text style={styles.rankIndex}>{index + 1}</Text>
                <Image source={friend.avatar} style={styles.rankAvatar} />
                <Text style={styles.rankName}>{friend.name}</Text>
                <Text style={styles.rankpoints}>{friend.points} points</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      ) : (
        <FlatList
          data={friends}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.friendItem}>
              <Image source={item.avatar} style={styles.friendAvatar} />
              <Text style={styles.friendName}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default FriendsLeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 20,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  tabActive: {
    backgroundColor: '#7A4CD9',
    borderRadius: 20,
  },
  tabText: {
    fontSize: 13,
    color: '#555',
  },
  tabTextActive: {
    color: '#fff',
  },
  rankText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  hintText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#777',
    marginBottom: 20,
  },
  podium: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  barContainer: {
    alignItems: 'center',
    width: 60,
  },
  barAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginBottom: 6,
  },
  barTrack: {
    width: 16,
    height: 120,
    backgroundColor: '#eee',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  barFill: {
    width: '100%',
    backgroundColor: '#32C17C',
    borderRadius: 8,
  },
  barName: {
    fontSize: 11,
    color: '#333',
    marginTop: 6,
    textAlign: 'center',
  },
  rankingBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
    elevation: 2,
  },
  rankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.4,
    borderColor: '#ccc',
  },
  rankIndex: {
    width: 20,
    fontWeight: 'bold',
    fontSize: 14,
  },
  rankAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginHorizontal: 10,
  },
  rankName: {
    flex: 1,
    fontSize: 14,
  },
  rankpoints: {
    fontWeight: 'bold',
    color: '#333',
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  friendAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  friendName: {
    fontSize: 14,
    fontWeight: '500',
  },
});

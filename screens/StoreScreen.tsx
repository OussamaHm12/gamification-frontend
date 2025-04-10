// ✅ screens/StoreScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const badges = [
  { id: '1', name: 'Virement Hero', points: 2000, icon: require('../assets/badge1.png') },
  { id: '2', name: 'Epargne Master', points: 8000, icon: require('../assets/badge2.png') },
];

const avatars = [
  { id: '1', name: 'Carte Maestro', points: 10000, icon: require('../assets/avatar1.png') },
  { id: '2', name: 'Epargnant Express', points: 10000, icon: require('../assets/avatar2.png') },
];

const StoreScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View style={styles.rightHeader}>
          <Ionicons name="trophy" size={20} color="#FB8C00" />
          <Text style={styles.points}>1190</Text>
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Recherche pour avatar badge" />
        <Ionicons name="options-outline" size={20} color="#333" style={styles.filterIcon} />
      </View>

      {/* Badges */}
      <Text style={styles.sectionTitle}>badges principaux</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={badges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.icon} style={styles.cardImage} />
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardPoints}>{item.points.toLocaleString()} pts</Text>
            <TouchableOpacity style={styles.cardAdd}><Text style={styles.cardAddText}>+</Text></TouchableOpacity>
          </View>
        )}
      />

      {/* Avatars */}
      <Text style={styles.sectionTitle}>Avatar</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={avatars}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.icon} style={styles.cardImage} />
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardPoints}>{item.points.toLocaleString()} pts</Text>
            <TouchableOpacity style={styles.cardAdd}><Text style={styles.cardAddText}>+</Text></TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#F9F5F1',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 12,
    marginVertical: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
  filterIcon: {
    marginLeft: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  card: {
    width: 140,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
  },
  cardImage: {
    width: 56,
    height: 56,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 4,
  },
  cardPoints: {
    fontSize: 12,
    color: '#FB8C00',
    marginBottom: 6,
  },
  cardAdd: {
    backgroundColor: '#FB8C00',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAddText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

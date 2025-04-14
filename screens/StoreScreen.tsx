import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const badges = [
  { id: '1', name: 'Virement Hero', points: 2000, icon: require('../assets/badge1.png'), category: 'populaire' },
  { id: '2', name: 'Epargne Master', points: 8000, icon: require('../assets/badge2.png'), category: 'haut' },
];

const avatars = [
  { id: '1', name: 'Carte Maestro', points: 10000, icon: require('../assets/avatar1.png'), category: 'populaire' },
  { id: '2', name: 'Épargnant Express', points: 10000, icon: require('../assets/avatar2.png'), category: 'nouveau' },
];

const filters = ['populaire', 'haut', 'nouveau'];

const StoreScreen = () => {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('populaire');

  const filteredBadges = badges.filter(
    (item) =>
      item.category === selectedFilter &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredAvatars = avatars.filter(
    (item) =>
      item.category === selectedFilter &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.icon} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardPoints}>{item.points.toLocaleString()} pts</Text>
      <TouchableOpacity style={styles.cardAdd}>
        <Text style={styles.cardAddText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View style={styles.rightHeader}>
          <Ionicons name="pricetag" size={18} color="#fff" style={styles.pointsIcon} />
          <Text style={styles.points}>1190</Text>
        </View>
      </View>

      <Text style={styles.date}>Vendredi, 29 Dec</Text>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="search pour avatar badge"
          value={search}
          onChangeText={setSearch}
        />
        <Ionicons name="filter-outline" size={20} color="#333" />
      </View>

      {/* Filters */}
      <View style={styles.filterBar}>
        {filters.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterButton, selectedFilter === f && styles.filterButtonActive]}
            onPress={() => setSelectedFilter(f)}
          >
            <Text
              style={[
                styles.filterText,
                selectedFilter === f && styles.filterTextActive,
              ]}
            >
              {f}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Badges Section */}
      <Text style={styles.sectionTitle}>badges principaux</Text>
      <FlatList
        data={filteredBadges}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />

      {/* Avatars Section */}
      <Text style={styles.sectionTitleSecondary}>Avatar</Text>
      <FlatList
        data={filteredAvatars}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingTop: 50,
    paddingHorizontal: 20,
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
    backgroundColor: '#FFA726',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  points: {
    fontWeight: 'bold',
    color: '#fff',
  },
  pointsIcon: {
    marginRight: 4,
  },
  date: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  filterBar: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 16,
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#7A4CD9',
  },
  filterText: {
    fontSize: 13,
    color: '#555',
  },
  filterTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  sectionTitleSecondary: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    marginTop: 10,
  },
  grid: {
    paddingBottom: 30,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    width: (width - 60) / 2,
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
    elevation: 2,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  cardName: {
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
  },
  cardPoints: {
    color: '#FB8C00',
    fontSize: 13,
    marginVertical: 4,
  },
  cardAdd: {
    backgroundColor: '#FB8C00',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAddText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

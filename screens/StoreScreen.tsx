import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { getStoreItems } from '../services/storeService';
import type { StoreItem } from '../types/types';
import { getTotalPoints } from '../services/pointsService';

const StoreScreen = () => {
  const [badges, setBadges] = useState<StoreItem[]>([]);
  const [avatars, setAvatars] = useState<StoreItem[]>([]);
  const [userPoints, setUserPoints] = useState<number>(0);

  const filters = ['populaire', 'haut', 'nouveau'];

  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('populaire');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [purchasedItems, setPurchasedItems] = useState<number[]>([]);

  const fetchUserPoints = async () => {
    try {
      const total = await getTotalPoints(1); // id utilisateur en dur
      setUserPoints(total);
    } catch (error) {
      console.error('Erreur en récupérant les points :', error);
    }
  };
  

  const fetchStoreItems = async () => {
    try {
      const items = await getStoreItems();
      const badgeItems = items.filter(item => item.type === 'BADGE');
      const avatarItems = items.filter(item => item.type === 'AVATAR');

      setBadges(badgeItems);
      setAvatars(avatarItems);
    } catch (error) {
      console.error('Erreur lors du chargement du store :', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchStoreItems();
      fetchUserPoints();
    }, [])
  );
  

  const handleToggleSelect = (id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredBadges = badges.filter(
    (item) =>
      !purchasedItems.includes(item.id) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredAvatars = avatars.filter(
    (item) =>
      !purchasedItems.includes(item.id) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderCard = (item: StoreItem) => {
    const isSelected = selectedItems.includes(item.id);
    const isDisabled = item.price > userPoints;

    return (
      <TouchableOpacity
        key={item.id}
        style={[
          styles.card,
          isSelected && styles.cardSelected,
          isDisabled && styles.cardDisabled,
        ]}
        onPress={() => !isDisabled && handleToggleSelect(item.id)}
        activeOpacity={isDisabled ? 1 : 0.8}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardName}>{item.name}</Text>
        <Text style={styles.cardPoints}>{item.price.toLocaleString()} pts</Text>
        <View
          style={[
            styles.cardAdd,
            isSelected && styles.cardAddSelected,
            isDisabled && styles.cardAddDisabled,
          ]}
        >
          <Text style={styles.cardAddText}>{isDisabled ? '!' : isSelected ? '-' : '+'}</Text>
        </View>
        {isDisabled && <Text style={styles.lockText}>points insuffisants</Text>}
      </TouchableOpacity>
    );
  };

  const handleValidate = () => {
    const selected = [...badges, ...avatars].filter((item) =>
      selectedItems.includes(item.id)
    );

    navigation.navigate('ConfirmPurchase', {
      selectedItems: selected,
      onPurchase: (purchasedIds: number[]) => {
        setPurchasedItems((prev) => [...prev, ...purchasedIds]);
        setSelectedItems([]);
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/avatar.png')} style={styles.avatar} />
        <View style={styles.rightHeader}>
          <Ionicons name="pricetag" size={20} color="#fff" />
          <Text style={styles.points}>{userPoints}</Text>
        </View>
      </View>

      <Text style={styles.date}>Vendredi, 29 Dec</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="search pour avatar badge"
          value={search}
          onChangeText={setSearch}
        />
        <Ionicons name="filter-outline" size={20} color="#555" />
      </View>

      <View style={styles.filterTabs}>
        {filters.map((f) => (
          <TouchableOpacity
            key={f}
            style={[styles.filterButton, filter === f && styles.filterSelected]}
            onPress={() => setFilter(f)}
          >
            <Text style={[styles.filterText, filter === f && styles.filterTextSelected]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Text style={styles.sectionTitle}>badges principaux</Text>
        <View style={styles.grid}>
          {filteredBadges.map((item) => renderCard(item))}
        </View>

        <Text style={styles.sectionTitle}>Avatar</Text>
        <View style={styles.grid}>
          {filteredAvatars.map((item) => renderCard(item))}
        </View>
      </ScrollView>

      {selectedItems.length > 0 && (
        <View style={styles.cartBar}>
          <Text style={styles.cartText}>{selectedItems.length} élément(s) sélectionné(s)</Text>
          <TouchableOpacity style={styles.cartButton} onPress={handleValidate}>
            <Text style={styles.cartButtonText}>Valider</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default StoreScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingHorizontal: 20,
    paddingTop: 50,
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
    backgroundColor: '#FB8C00',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 6,
  },
  points: {
    color: '#fff',
    fontWeight: 'bold',
  },
  date: {
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 10,
    fontSize: 14,
    color: '#555',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  filterTabs: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 14,
  },
  filterButton: {
    backgroundColor: '#eee',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  filterSelected: {
    backgroundColor: '#7A4CD9',
  },
  filterText: {
    color: '#444',
    fontWeight: '600',
    fontSize: 13,
  },
  filterTextSelected: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 20,
  },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: '#7A4CD9',
  },
  cardDisabled: {
    opacity: 0.5,
  },
  cardImage: {
    width: 56,
    height: 56,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6,
  },
  cardPoints: {
    fontSize: 13,
    color: '#FB8C00',
    marginBottom: 8,
  },
  cardAdd: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FB8C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAddSelected: {
    backgroundColor: '#7A4CD9',
  },
  cardAddDisabled: {
    backgroundColor: '#ccc',
  },
  cardAddText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  lockText: {
    marginTop: 6,
    fontSize: 11,
    color: '#D32F2F',
    fontWeight: '500',
  },
  cartBar: {
    position: 'absolute',
    bottom: 70,
    left: 20,
    right: 20,
    backgroundColor: '#FB8C00',
    padding: 12,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5,
  },
  cartText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  cartButtonText: {
    fontWeight: 'bold',
    color: '#FB8C00',
  },
});
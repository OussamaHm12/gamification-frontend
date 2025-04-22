import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';



const { width } = Dimensions.get('window');

const allData = [
  // Factures (5)
  { id: 'f1', type: 'Factures', name: 'ONEP', date: '01 Avr', montant: '150 DH', points: 10 },
  { id: 'f2', type: 'Factures', name: 'IAM', date: '05 Mar', montant: '320 DH', points: 20 },
  { id: 'f3', type: 'Factures', name: 'Lydec', date: '15 Fév', montant: '100 DH', points: 8 },
  { id: 'f4', type: 'Factures', name: 'Orange', date: '28 Jan', montant: '200 DH', points: 12 },
  { id: 'f5', type: 'Factures', name: 'Inwi', date: '20 Mar', montant: '250 DH', points: 14 },

  // Carte (3)
  { id: 'c1', type: 'Carte', name: 'Restaurant', date: '02 Avr', montant: '120 DH', points: 12 },
  { id: 'c2', type: 'Carte', name: 'Transport', date: '28 Mar', montant: '40 DH', points: 4 },
  { id: 'c3', type: 'Carte', name: 'Épicerie', date: '18 Mar', montant: '60 DH', points: 6 },

  // Virements (7)
  { id: 'v1', type: 'Virements', name: 'Virement à Anas', date: '01 Avr', montant: '200 DH', points: 15 },
  { id: 'v2', type: 'Virements', name: 'Virement à Karim', date: '25 Mar', montant: '300 DH', points: 18 },
  { id: 'v3', type: 'Virements', name: 'Virement à Sara', date: '10 Mar', montant: '180 DH', points: 10 },
  { id: 'v4', type: 'Virements', name: 'Virement à Youssef', date: '22 Fév', montant: '250 DH', points: 14 },
  { id: 'v5', type: 'Virements', name: 'Virement à Leila', date: '05 Fév', montant: '150 DH', points: 9 },
  { id: 'v6', type: 'Virements', name: 'Virement à Nada', date: '12 Jan', montant: '400 DH', points: 20 },
  { id: 'v7', type: 'Virements', name: 'Virement à Mohamed', date: '07 Jan', montant: '100 DH', points: 5 },
];


const filterOptions = ['Tous', 'Factures', 'Carte', 'Virements'];

const OperationsScreen = () => {
  
  const route = useRoute();
  const initialFilter = route.params?.filter || 'Tous';
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const filteredData = allData.filter((item) => {
    const matchType = selectedFilter === 'Tous' || item.type === selectedFilter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mes opérations</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Filtres */}
      <View style={styles.filterContainer}>
        {filterOptions.map((item) => {
          const isActive = selectedFilter === item;
          return (
            <TouchableOpacity
              key={item}
              style={[styles.filterButton, isActive && styles.filterButtonActive]}
              onPress={() => setSelectedFilter(item)}
            >
              <Text style={[styles.filterText, isActive && styles.filterTextActive]}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Rechercher..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
        <Ionicons name="search" size={18} color="#aaa" />
      </View>

      {/* Liste des interactions */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View style={styles.leftCol}>
              <View style={styles.iconCircle}>
                <Ionicons
                  name={
                    item.type === 'Factures'
                      ? 'receipt-outline'
                      : item.type === 'Carte'
                      ? 'card-outline'
                      : 'swap-horizontal-outline'
                  }
                  size={18}
                  color="#FB8C00"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.itemTitle}>{item.name}</Text>
                <Text style={styles.itemDate}>{item.date}</Text>
                <Text style={styles.itemPoints}>+{item.points} pts</Text>
              </View>
            </View>
            <Text style={styles.itemAmount}>{item.montant}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OperationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF8F3',
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
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent: 'space-between',
  },
  filterButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 14,
    alignItems: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#7A4CD9',
  },
  filterText: {
    color: '#333',
    fontWeight: '600',
    fontSize: 13,
  },
  filterTextActive: {
    color: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 16,
    height: 40,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    elevation: 1,
  },
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    backgroundColor: '#FFF4E6',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemDate: {
    fontSize: 12,
    color: '#999',
  },
  itemPoints: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '500',
  },
  itemAmount: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FB8C00',
  },
});

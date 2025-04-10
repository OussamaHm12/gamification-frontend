// ✅ screens/FacturesScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const allFactures = [
  { id: '1', name: 'ONEP', date: 'Le 29 Mar', montant: '150 DH', points: 10 },
  { id: '2', name: 'IAM', date: 'Le 05 Mar', montant: '320 DH', points: 20 },
  { id: '3', name: 'Lydec', date: 'Le 11 Fév', montant: '120 DH', points: 5 },
  { id: '4', name: 'Orange', date: 'Le 20 Jan', montant: '210 DH', points: 15 },
  { id: '5', name: 'Inwi', date: 'Le 08 Fév', montant: '190 DH', points: 12 },
  { id: '6', name: 'IAM', date: 'Le 02 Avr', montant: '280 DH', points: 18 },
  { id: '7', name: 'ONEP', date: 'Le 18 Mar', montant: '160 DH', points: 9 },
];

const filterOptions = ['IAM', 'ONEP', 'Lydec', 'Orange', 'Inwi'];

const FacturesScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const filteredFactures = allFactures.filter((item) => {
    const matchFilter = selectedFilter ? item.name === selectedFilter : true;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Factures</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.subheader}>{filteredFactures.length} Factures Payées</Text>

      <View style={styles.progressContainer}>
        <View style={styles.progressBase}>
          <View style={[styles.progressFill, { width: '65%' }]} />
        </View>
        <Text style={styles.progressLabel}>+ 15 Points</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Rechercher une facture..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
        <Ionicons name="search" size={20} color="#aaa" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
        {filterOptions.map((option) => {
          const isActive = selectedFilter === option;
          return (
            <TouchableOpacity
              key={option}
              style={[styles.filterButton, isActive && styles.filterButtonActive]}
              onPress={() => setSelectedFilter(isActive ? '' : option)}
            >
              <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                {option}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.details}>Détails</Text>
      </View>

      <FlatList
        data={filteredFactures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.factureCard}>
            <View style={styles.leftCol}>
              <View style={styles.iconCircle}>
                <Ionicons name="swap-horizontal" size={18} color="#FB8C00" />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.factureTitle}>Facture {item.name}</Text>
                <Text style={styles.factureDate}>{item.date}</Text>
                <Text style={styles.pointsText}>Points gagnés {item.points}</Text>
              </View>
            </View>
            <Text style={styles.amount}>{item.montant}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FacturesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  subheader: {
    textAlign: 'center',
    fontSize: 14,
    color: '#FB8C00',
    marginBottom: 12,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBase: {
    width: width * 0.8,
    height: 12,
    backgroundColor: '#E8EAF6',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: 12,
    backgroundColor: '#FB8C00',
    borderRadius: 10,
  },
  progressLabel: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#2196F3',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 10,
    height: 40,
  },
  input: {
    flex: 1,
    marginRight: 8,
  },
  filters: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#eee',
    borderRadius: 16,
    marginRight: 8,
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterButtonActive: {
    backgroundColor: '#FB8C00',
  },
  filterText: {
    color: '#333',
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#fff',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  factureCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },
  leftCol: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF4E6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  factureTitle: {
    fontWeight: '600',
    fontSize: 14,
  },
  factureDate: {
    fontSize: 12,
    color: '#999',
  },
  pointsText: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '500',
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FB8C00',
  },
});

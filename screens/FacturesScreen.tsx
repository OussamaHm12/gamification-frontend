import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const factures = [
  {
    id: '1',
    destinataire: 'ONEP',
    date: 'Le 29 Mar',
    montant: '150 DH',
    points: 10,
  },
  {
    id: '2',
    destinataire: 'IAM',
    date: 'Le 05 Mar',
    montant: '320 DH',
    points: 20,
  },
  {
    id: '3',
    destinataire: 'Lydec',
    date: 'Le 11 Fév',
    montant: '120 DH',
    points: 5,
  },
];

const FacturesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Factures</Text>
      <Text style={styles.subtitle}>3 Factures Payées</Text>

      <View style={styles.curve}>
        <Text style={styles.pointTag}>+ 15 Points</Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Détails</Text>
        <Text style={styles.showAll}>Afficher tout</Text>
      </View>

      <FlatList
        data={factures}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.iconCircle}>
              <Ionicons name="swap-horizontal" size={20} color="#FB8C00" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.dest}>{`Facture ${item.destinataire}`}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.points}>Points gagnés {item.points}</Text>
            </View>
            <Text style={styles.montant}>{item.montant}</Text>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    textAlign: 'center',
    color: '#FB8C00',
    marginBottom: 20,
    fontSize: 14,
  },
  curve: {
    height: 80,
    backgroundColor: '#fff0d6',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  pointTag: {
    backgroundColor: '#E0F7FA',
    color: '#007ACC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 13,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  showAll: {
    color: '#7E57C2',
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff7ec',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  dest: {
    fontWeight: '500',
    fontSize: 15,
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  points: {
    fontSize: 12,
    color: '#007ACC',
  },
  montant: {
    color: '#FB8C00',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

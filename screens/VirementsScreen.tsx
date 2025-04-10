// ✅ screens/VirementsScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const virements = [
  {
    id: '1',
    destinataire: 'Anas',
    date: 'Le 29 Dec',
    montant: '1500 DH',
    points: 25,
  },
  {
    id: '2',
    destinataire: 'Bachir',
    date: 'Le 03 Dec',
    montant: '400 DH',
    points: 10,
  },
  {
    id: '3',
    destinataire: 'Imad',
    date: 'Le 15 Nov',
    montant: '500 DH',
    points: 15,
  },
];

const VirementsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#091E42" />
      </TouchableOpacity>
      <Text style={styles.title}>Virement</Text>
      <Text style={styles.subtitle}>10 Virements Faits</Text>

      <View style={styles.curveContainer}>
        <View style={styles.curve} />
        <View style={styles.pointLabel}><Text style={styles.pointText}>+ 15 Points</Text></View>
      </View>

      <View style={styles.detailsHeader}>
        <Text style={styles.detailsTitle}>Détails</Text>
        <TouchableOpacity><Text style={styles.afficherTout}>Afficher tout</Text></TouchableOpacity>
      </View>

      <FlatList
        data={virements}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Ionicons name="swap-horizontal" size={30} color="#FB8C00" style={styles.icon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.dest}>Virement vers {item.destinataire}</Text>
              <Text style={styles.date}>{item.date}</Text>
              {index === 0 && (
                <Text style={styles.points}>Points gagnés {'\n'}<Text style={styles.boldPoints}>{item.points}</Text></Text>
              )}
            </View>
            <Text style={styles.montant}>{item.montant}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default VirementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F6F9FC',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 40,
  },
  subtitle: {
    textAlign: 'center',
    color: '#FB8C00',
    marginBottom: 20,
    fontSize: 14,
  },
  curveContainer: {
    height: 100,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  curve: {
    height: 3,
    backgroundColor: '#FB8C00',
    borderRadius: 2,
  },
  pointLabel: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#E0F7FA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pointText: {
    color: '#007ACC',
    fontWeight: 'bold',
    fontSize: 12,
  },
  detailsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  afficherTout: {
    color: '#7A4CD9',
    fontWeight: '600',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 14,
  },
  dest: {
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
  montant: {
    color: '#FB8C00',
    fontWeight: 'bold',
    fontSize: 16,
  },
  points: {
    color: '#888',
    fontSize: 12,
    marginTop: 4,
  },
  boldPoints: {
    fontWeight: 'bold',
    color: '#091E42',
  },
});

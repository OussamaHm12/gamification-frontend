import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import ActivityCard from '../components/ActivityCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const navigation = useNavigation() as NativeStackNavigationProp<RootStackParamList>;

  const today = new Date();
  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const monthNames = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Dec'];
  const formattedDate = `${dayNames[today.getDay()]}, Le ${today.getDate()} ${monthNames[today.getMonth()]}`;

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Bonjour, Anas</Text>
        <View style={styles.pointsBox}>
          <Ionicons name="pricetag" size={16} color="#fff" style={styles.pointsIcon} />
          <Text style={styles.pointsText}>1190</Text>
        </View>
      </View>

      <Text style={styles.date}>{formattedDate}</Text>

      {/* Cards */}
      <View style={styles.grid}>
        <ActivityCard
          title="Factures"
          value="5 fois"
          icon="water"
          onPress={() => navigation.navigate('Factures')}
        />
        <ActivityCard
          title="Carte"
          value="25 paiement"
          icon="card"
          onPress={() => navigation.navigate('Virements')}
        />
        <ActivityCard
          title="Virements"
          value="15 effectués"
          icon="swap-horizontal"
          onPress={() => navigation.navigate('Virements')}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  pointsBox: {
    backgroundColor: '#FB8C00',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 4,
  },
  pointsText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pointsIcon: {
    color: '#fff',
  },
  date: {
    color: '#6a6a6a',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
});

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ActivityCard from '../components/ActivityCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';


const HomeScreen = () => {
  const today = new Date();
  const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const monthNames = ['Jan', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Dec'];
  const formattedDate = `${dayNames[today.getDay()]}, Le ${today.getDate()} ${monthNames[today.getMonth()]}`;
  const navigation = useNavigation() as NativeStackNavigationProp<RootStackParamList>;


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Bonjour, Anas</Text>
      <Text style={styles.date}>{formattedDate}</Text>

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
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  date: {
    color: '#6a6a6a',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

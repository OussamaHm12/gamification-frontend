import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useRoute, useNavigation } from '@react-navigation/native';

type Item = {
  id: string;
  name: string;
  points: number;
  icon: any;
};

type RouteParams = {
  selectedItems: Item[];
  onPurchase?: (purchasedIds: string[]) => void;
};

const ConfirmPurchaseScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { selectedItems, onPurchase } = route.params as RouteParams;

  const [confirmed, setConfirmed] = useState(false);

  const totalPoints = selectedItems.reduce((sum, item) => sum + item.points, 0);

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      onPurchase && onPurchase(selectedItems.map((item) => item.id));
      navigation.goBack();
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Confirmation d'achat</Text>

      {!confirmed ? (
        <>
          <ScrollView contentContainerStyle={styles.list}>
            {selectedItems.map((item) => (
              <View key={item.id} style={styles.card}>
                <Image source={item.icon} style={styles.icon} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.points}>{item.points} pts</Text>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.totalBox}>
            <Text style={styles.totalText}>Total : {totalPoints} pts</Text>
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
              <Text style={styles.buttonText}>Confirmer l'achat</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Animatable.View animation="bounceIn" duration={1000} style={styles.successBox}>
          <Text style={styles.successEmoji}>🎉</Text>
          <Text style={styles.successText}>Félicitations !</Text>
          <Text style={styles.successSub}>Votre achat a été confirmé</Text>
        </Animatable.View>
      )}
    </View>
  );
};

export default ConfirmPurchaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
  },
  icon: {
    width: 48,
    height: 48,
    marginRight: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
  },
  points: {
    color: '#FB8C00',
    fontSize: 13,
  },
  totalBox: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: 16,
    marginTop: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#FB8C00',
    paddingVertical: 12,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  successBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successEmoji: {
    fontSize: 60,
    marginBottom: 20,
  },
  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  successSub: {
    fontSize: 14,
    color: '#666',
  },
});
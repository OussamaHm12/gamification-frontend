import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

type SelectedItem = {
  id: string;
  name: string;
  points: number;
  icon: any;
};

const ConfirmPurchaseScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { selectedItems } = (route as { params: { selectedItems: SelectedItem[] } }).params;

  const totalPoints = selectedItems.reduce((sum: number, item) => sum + item.points, 0);

  const handleConfirm = () => {
    Alert.alert('Achat confirmé', 'Votre sélection a bien été validée ✅', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmation d’achat</Text>

      <FlatList
        data={selectedItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={item.icon} style={styles.icon} />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.points}>{item.points.toLocaleString()} pts</Text>
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total : {totalPoints.toLocaleString()} pts</Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
            <Text style={styles.cancelText}>Annuler</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
            <Text style={styles.confirmText}>Valider</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConfirmPurchaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
  icon: {
    width: 48,
    height: 48,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
  },
  points: {
    fontSize: 14,
    color: '#FB8C00',
    marginTop: 4,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  confirmButton: {
    backgroundColor: '#FB8C00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  confirmText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

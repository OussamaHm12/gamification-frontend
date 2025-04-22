// ✅ CreateDefiScreen.tsx
import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Modal, TextInput, ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const initialDefis = [
  { id: '1', name: 'Défi virements', progress: 75, moyenne: 4, meilleur: 5, total: 15, goal: 20 },
  { id: '2', name: 'Défi carte week-end', progress: 60, moyenne: 3, meilleur: 4, total: 12, goal: 20 },
];

const autresDefis = [
  { id: '3', titre: 'Payer 3 factures via Pocket Bank', amis: 3 },
  { id: '4', titre: 'Effectuer plus de 5 paiements par carte', amis: 3 },
];

const CreateDefiScreen = () => {
  const [defis, setDefis] = useState(initialDefis);
  const [selectedDefi, setSelectedDefi] = useState(initialDefis[0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [renameModal, setRenameModal] = useState(false);
  const [renameValue, setRenameValue] = useState(selectedDefi.name);
  const [newDefi, setNewDefi] = useState({
    name: '', description: '', type: '', goal: '', period: '',
  });

  const handleCreateDefi = () => {
    if (newDefi.name) {
      const newEntry = {
        id: Date.now().toString(),
        name: newDefi.name,
        progress: 0,
        moyenne: 0,
        meilleur: 0,
        total: 0,
        goal: parseInt(newDefi.goal),
      };
      const updated = [...defis, newEntry];
      setDefis(updated);
      setSelectedDefi(newEntry);
      setCreateModal(false);
      setNewDefi({ name: '', description: '', type: '', goal: '', period: '' });
    }
  };

  const handleRenameDefi = () => {
    const updated = defis.map((d) =>
      d.id === selectedDefi.id ? { ...d, name: renameValue } : d
    );
    setDefis(updated);
    const updatedSelected = updated.find((d) => d.id === selectedDefi.id);
    if (updatedSelected) setSelectedDefi(updatedSelected);
    setRenameModal(false);
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100, paddingTop: 50, paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setCreateModal(true)} style={styles.iconBtn}>
          <Ionicons name="add-circle-outline" size={24} color="#7A4CD9" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.defiSelector}>
          <Text style={styles.defiName}>{selectedDefi.name}</Text>
          <Ionicons name="chevron-down" size={18} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setRenameValue(selectedDefi.name);
          setRenameModal(true);
        }} style={styles.iconBtn}>
          <Ionicons name="create-outline" size={20} color="#7A4CD9" />
        </TouchableOpacity>
      </View>

      <View style={styles.challengeBox}>
        <Image source={require('../assets/badge.png')} style={styles.challengeImage} />
        <Text style={styles.challengeTitle}>Vous y êtes presque !</Text>
        <Text style={styles.challengeSubtitle}>Virement restant à gagner</Text>
        <Text style={styles.challengeCount}>{selectedDefi.goal - selectedDefi.total}</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${selectedDefi.progress}%` }]} />
          <Ionicons name="trophy" size={18} color="#7A4CD9" style={styles.rewardIcon} />
        </View>
        <View style={styles.progressLabelRow}>
          <Text style={styles.progressLabel}>{selectedDefi.total} virements faits</Text>
          <Text style={styles.progressLabel}>But {selectedDefi.goal}</Text>
        </View>
        <View style={styles.statsBox}>
          <View style={styles.stat}><Text style={styles.statTitle}>Moyenne</Text><Text style={styles.statValue}>{selectedDefi.moyenne}</Text></View>
          <View style={styles.stat}><Text style={styles.statTitle}>Meilleur</Text><Text style={styles.statValue}>{selectedDefi.meilleur}</Text></View>
        </View>

        {/* Classement intégré */}
        <Text style={styles.sectionTitle}>Classement</Text>
        {[{ name: 'Anas', pts: 75 }, { name: 'Bachir', pts: 60 }, { name: 'Sofia', pts: 55 }].map((p, i) => (
          <View key={i} style={styles.rankingRow}>
            <Text>{['🥇', '🥈', '🥉'][i]} {p.name}</Text>
            <Text style={{ fontWeight: 'bold' }}>{p.pts} pts</Text>
          </View>
        ))}
      </View>

      {/* Autres Défis */}
      <Text style={styles.sectionTitle}>Autres Défis</Text>
      {autresDefis.map((item) => {
  const alreadyJoined = defis.some((d) => d.name === item.titre);
  return (
    <View key={item.id} style={styles.otherChallengeItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.otherChallengeText}>{item.titre}</Text>
        <Text style={styles.challengeFriends}>{item.amis} amis sur ce challenge</Text>
      </View>
      <TouchableOpacity
        style={[
          styles.joinButton,
          alreadyJoined && { backgroundColor: '#ccc' }
        ]}
        onPress={() => {
          if (!alreadyJoined) {
            const newDefi = {
              id: Date.now().toString(),
              name: item.titre,
              progress: 0,
              moyenne: 0,
              meilleur: 0,
              total: 0,
              goal: 10,
            };
            setDefis([...defis, newDefi]);
            setSelectedDefi(newDefi);
          }
        }}
        disabled={alreadyJoined}
      >
        <Text style={[styles.joinText, alreadyJoined && { color: '#666' }]}>
          {alreadyJoined ? 'Déjà rejoint' : 'Rejoindre'}
        </Text>
      </TouchableOpacity>
    </View>
  );
})}


      {/* Modals */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Changer de défi</Text>
            {defis.map((d) => (
              <TouchableOpacity key={d.id} onPress={() => { setSelectedDefi(d); setModalVisible(false); }}>
                <Text style={styles.modalOption}>{d.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>

      <Modal visible={renameModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Renommer le défi</Text>
            <TextInput style={styles.input} value={renameValue} onChangeText={setRenameValue} />
            <TouchableOpacity style={styles.createBtn} onPress={handleRenameDefi}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Valider</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRenameModal(false)}><Text style={{ textAlign: 'center', marginTop: 8, color: '#999' }}>Annuler</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={createModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Créer un défi</Text>
            <TextInput placeholder="Titre" style={styles.input} onChangeText={(text) => setNewDefi({ ...newDefi, name: text })} />
            <TextInput placeholder="Description" style={styles.input} onChangeText={(text) => setNewDefi({ ...newDefi, description: text })} />
            <TextInput placeholder="Type" style={styles.input} onChangeText={(text) => setNewDefi({ ...newDefi, type: text })} />
            <TextInput placeholder="Objectif (nombre)" keyboardType="numeric" style={styles.input} onChangeText={(text) => setNewDefi({ ...newDefi, goal: text })} />
            <TextInput placeholder="Période" style={styles.input} onChangeText={(text) => setNewDefi({ ...newDefi, period: text })} />
            <TouchableOpacity style={styles.createBtn} onPress={handleCreateDefi}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Créer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCreateModal(false)}><Text style={{ textAlign: 'center', marginTop: 8, color: '#999' }}>Annuler</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default CreateDefiScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#FDF8F3',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBtn: {
    padding: 8,
  },
  defiSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  defiName: {
    fontWeight: 'bold',
    marginRight: 6,
  },
  challengeBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginVertical: 16,
    elevation: 2,
  },
  challengeImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  challengeTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  challengeSubtitle: {
    fontSize: 13,
    color: '#666',
  },
  challengeCount: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#E9E2D8',
    borderRadius: 5,
    position: 'relative',
    marginBottom: 6,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#32C17C',
    borderRadius: 5,
  },
  rewardIcon: {
    position: 'absolute',
    right: -12,
    top: -14,
  },
  progressLabelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  progressLabel: {
    fontSize: 12,
  },
  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 8,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statTitle: {
    fontSize: 12,
    color: '#888',
  },
  statValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rankingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 6,
  },
  otherChallengeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7DED3',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
  },
  otherChallengeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  challengeFriends: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
  joinButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
  },
  joinText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000055',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 16,
    elevation: 4,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  modalOption: {
    paddingVertical: 10,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  createBtn: {
    backgroundColor: '#7A4CD9',
    padding: 12,
    alignItems: 'center',
    borderRadius: 10,
  },
});
// ✅ components/RewardPopup.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';

interface RewardPopupProps {
  visible: boolean;
  onClose: () => void;
}

const RewardPopup: React.FC<RewardPopupProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.congrats}>Congrats!</Text>
          <Text style={styles.message}>You did it!{''}High fives all around!</Text>

          <Image
            source={require('../assets/badge.png')} // badge/image à placer dans /assets
            style={styles.image}
          />

          <View style={styles.progressBarContainer}>
            <View style={styles.progressBar} />
            <Text style={styles.progressText}>200 payment done!</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Claim reward</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RewardPopup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '85%',
    alignItems: 'center',
  },
  congrats: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  message: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: 72,
    height: 72,
    marginBottom: 16,
  },
  progressBarContainer: {
    height: 8,
    width: '100%',
    backgroundColor: '#DDD2C0',
    borderRadius: 4,
    marginBottom: 8,
    justifyContent: 'center',
  },
  progressBar: {
    height: 8,
    width: '100%',
    backgroundColor: '#35B36A',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#7A4CD9',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

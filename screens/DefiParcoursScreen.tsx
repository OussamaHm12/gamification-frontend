// ✅ screens/DefiParcoursScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DefiParcoursScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Desert, April</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Image avec chemin */}
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <ImageBackground
          source={require('../assets/desert_map.png')} // 🔁 remplace par ton image de fond
          style={styles.map}
          imageStyle={{ resizeMode: 'cover', borderRadius: 20 }}
        >
          {/* Étapes */}
          <View style={[styles.step, { top: '85%', left: '10%' }]}>
            <Image source={require('../assets/star.png')} style={styles.stepIcon} />
            <Text style={styles.stepText}>20K</Text>
          </View>
          <View style={[styles.step, { top: '75%', left: '30%' }]}>
            <Image source={require('../assets/star.png')} style={styles.stepIcon} />
            <Text style={styles.stepText}>35K</Text>
          </View>
          <View style={[styles.step, { top: '60%', left: '50%' }]}>
            <Image source={require('../assets/star.png')} style={styles.stepIcon} />
            <Text style={styles.stepText}>70K</Text>
          </View>
          <View style={[styles.step, { top: '45%', left: '20%' }]}>
            <Image source={require('../assets/star.png')} style={styles.stepIcon} />
            <Text style={styles.stepText}>100K</Text>
          </View>
          <View style={[styles.step, { top: '30%', left: '60%' }]}>
            <Image source={require('../assets/star.png')} style={styles.stepIcon} />
            <Text style={styles.stepText}>150K</Text>
          </View>
          <View style={[styles.step, { top: '10%', left: '40%' }]}>
            <Image source={require('../assets/star.png')} style={styles.stepIcon} />
            <Text style={styles.stepText}>200K</Text>
          </View>

          {/* Position actuelle de l'utilisateur */}
          <Image
            source={require('../assets/avatar_green.png')} // 🔁 avatar vert à préparer
            style={[styles.avatar, { top: '60%', left: '50%' }]}
          />
        </ImageBackground>

        {/* Statistiques */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Achievements</Text>
            <Text style={styles.statValue}>17,840</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statTitle}>Rankings</Text>
            <Text style={styles.statValue}>834,083ᵉ</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DefiParcoursScreen;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F5F1',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  map: {
    width: '100%',
    height: 400,
    justifyContent: 'flex-start',
    position: 'relative',
  },
  step: {
    position: 'absolute',
    alignItems: 'center',
  },
  stepIcon: {
    width: 24,
    height: 24,
  },
  stepText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  avatar: {
    position: 'absolute',
    width: 36,
    height: 36,
  },
  statsContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginTop: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  title: string;
  value: string;
  icon: string;
  gradient?: readonly [string, string, ...string[]];
};

const ActivityCard = ({ title, value, icon, gradient }: Props) => {
  const hasGradient = gradient && gradient.length >= 2;

  return (
    <TouchableOpacity style={[styles.card, hasGradient && { padding: 0 }]}>
      {hasGradient ? (
        <LinearGradient colors={gradient} style={styles.gradientCard}>
          <Text style={styles.titleWhite}>{title}</Text>
          <Ionicons name={icon as any} size={28} color="#fff" />
          <Text style={styles.valueWhite}>{value}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.inner}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name={icon as any} size={28} color="#FB8C00" />
          <Text style={styles.value}>{value}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({
  card: {
    width: '47%',
    height: 130,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
    marginBottom: 16,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#FB8C00',
    marginTop: 8,
  },
  titleWhite: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  valueWhite: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
  },
});

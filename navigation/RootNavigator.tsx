// ✅ navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OnboardingScreen from '../screens/OnboardingScreen';
import TabNavigator from './TabNavigator';
import FacturesScreen from '../screens/FacturesScreen';
import VirementsScreen from '../screens/VirementsScreen';
import InteractionsScreen from '../screens/InteractionsScreen'; // ou le bon chemin selon ton projet
import DefiDetailScreen from '../screens/DefiDetailScreen';
import BadgeProfileScreen from '../screens/BadgeProfileScreen';
import NiveauScreen from '../screens/NiveauScreen';

export type RootStackParamList = {
  Root: undefined;
  Factures: undefined;
  Virements: undefined;
  Interactions: undefined;
  DefiDetail: { defiId: string };
  BadgeProfile: undefined;
  NiveauScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Root">
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen name="Factures" component={FacturesScreen} />
      <Stack.Screen name="Virements" component={VirementsScreen} />
      <Stack.Screen name="Interactions" component={InteractionsScreen} />
      <Stack.Screen name="DefiDetail" component={DefiDetailScreen} />
      <Stack.Screen name="BadgeProfile" component={BadgeProfileScreen} />
      <Stack.Screen name="Niveau" component={NiveauScreen} />    
    </Stack.Navigator>
  );
};

export default RootNavigator;

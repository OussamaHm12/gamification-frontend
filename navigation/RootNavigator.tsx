// ✅ navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OnboardingScreen from '../screens/OnboardingScreen';
import TabNavigator from './TabNavigator';
import InteractionsScreen from '../screens/OperationsScreen'; // ou le bon chemin selon ton projet
import DefiDetailScreen from '../screens/DefiPersDetailScreen';
import BadgeProfileScreen from '../screens/MaPage';
import NiveauScreen from '../screens/NiveauFideliteScreen';
import FriendsScreen from '../screens/FriendsLeaderboardScreen';
import DefiParcoursScreen from '../screens/DefiRoadMapScreen';
import ConfirmPurchaseScreen from '../screens/ConfirmPurchaseScreen';
import CreateDefiScreen from '../screens/CreateDefiScreen';


export type RootStackParamList = {
  Root: undefined;
  Factures: undefined;
  Virements: undefined;
  Interactions: undefined;
  DefiDetail: { defiId: string };
  BadgeProfile: undefined;
  NiveauScreen: undefined;
  Friends: { tab?: 'Leaderboard' | 'Friends' };
  DefiDesert: undefined;
  DefiParcours: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Root">
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen name="Interactions" component={InteractionsScreen} />
      <Stack.Screen name="DefiDetail" component={DefiDetailScreen} />
      <Stack.Screen name="BadgeProfile" component={BadgeProfileScreen} />
      <Stack.Screen name="Niveau" component={NiveauScreen} />    
      <Stack.Screen name="Friends" component={FriendsScreen} />
      <Stack.Screen name="DefiParcours" component={DefiParcoursScreen} />
      <Stack.Screen name="ConfirmPurchase" component={ConfirmPurchaseScreen} options={{ headerShown: false }}/>
      <Stack.Screen
  name="CreateDefi"
  component={CreateDefiScreen}
  options={{ headerShown: true, title: 'Créer un défi' }}
/>
      </Stack.Navigator>
  );
};

export default RootNavigator;

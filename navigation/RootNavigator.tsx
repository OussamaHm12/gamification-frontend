// ✅ navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OnboardingScreen from '../screens/OnboardingScreen';
import TabNavigator from './TabNavigator';
import OperationsScreen from '../screens/OperationsScreen'; // ou le bon chemin selon ton projet
import DefiPersDetailScreen from '../screens/DefiPersDetailScreen';
import MaPage from '../screens/MaPage';
import NiveauFideliteScreen from '../screens/NiveauFideliteScreen';
import FriendsLeaderboardScreen from '../screens/FriendsLeaderboardScreen';
import DefiRoadMapScreen from '../screens/DefiRoadMapScreen';
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
      <Stack.Screen name="Interactions" component={OperationsScreen} />
      <Stack.Screen name="DefiDetail" component={DefiPersDetailScreen} />
      <Stack.Screen name="BadgeProfile" component={MaPage} />
      <Stack.Screen name="Niveau" component={NiveauFideliteScreen} />    
      <Stack.Screen name="Friends" component={FriendsLeaderboardScreen} />
      <Stack.Screen name="DefiParcours" component={DefiRoadMapScreen} />
      <Stack.Screen name="ConfirmPurchase" component={ConfirmPurchaseScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateDefi" component={CreateDefiScreen} options={{ headerShown: true, title: 'Créer un défi' }}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;

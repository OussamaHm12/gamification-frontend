// ✅ navigation/RootNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import OnboardingScreen from '../screens/OnboardingScreen';
import TabNavigator from './TabNavigator';
import FacturesScreen from '../screens/FacturesScreen';
import VirementsScreen from '../screens/VirementsScreen';
import InteractionsScreen from '../screens/InteractionsScreen'; // ou le bon chemin selon ton projet


export type RootStackParamList = {
  Onboarding: undefined;
  Root: undefined;
  Factures: undefined;
  Virements: undefined;
  Interactions: undefined; // 👈 ajoute ça
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
    </Stack.Navigator>
  );
};

export default RootNavigator;

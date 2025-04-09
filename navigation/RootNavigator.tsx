import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import OnboardingScreen from '../screens/OnboardingScreen';
import FacturesScreen from '../screens/FacturesScreen';


export type RootStackParamList = {
  Onboarding: undefined;
  Root: undefined;
  Factures: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen name="Factures" component={FacturesScreen} />

    </Stack.Navigator>
  );
};

export default RootNavigator;

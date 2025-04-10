// ✅ navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DefisScreen from '../screens/DefisScreen';
import StoreScreen from '../screens/StoreScreen';
import EnsembleScreen from '../screens/EnsembleScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({
        route,
      }: {
        route: { name: string };
      }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#FB8C00',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          let iconName = 'home';

          switch (route.name) {
            case 'Accueil':
              iconName = 'home';
              break;
            case 'Défis':
              iconName = 'trophy-outline';
              break;
            case 'Ensemble':
              iconName = 'people-outline';
              break;
            case 'Store':
              iconName = 'cart-outline';
              break;
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Défis" component={DefisScreen} />
      <Tab.Screen name="Ensemble" component={EnsembleScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
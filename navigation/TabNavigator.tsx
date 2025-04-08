import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

const DummyScreen = () => null;

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
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
      <Tab.Screen name="Défis" component={DummyScreen} />
      <Tab.Screen name="Ensemble" component={DummyScreen} />
      <Tab.Screen name="Store" component={DummyScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

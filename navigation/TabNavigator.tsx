import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DefisScreen from '../screens/TogetherScreen';
import StoreScreen from '../screens/StoreScreen';
// ✅ Remplace EnsembleScreen par BadgeProfileScreen
import BadgeProfileScreen from '../screens/MaPage';
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
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 8,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: 'absolute',
          backgroundColor: '#fff',
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarIcon: ({ color, size }: { color: string; size: number }) => {
          let iconName = 'home';

          switch (route.name) {
            case 'Accueil':
              iconName = 'home';
              break;
            case 'Partage':
              iconName = 'trophy-outline';
              break;
            case 'Ma page':
              iconName = 'person-outline';
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
      <Tab.Screen name="Partage" component={DefisScreen} />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen name="Ma page" component={BadgeProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

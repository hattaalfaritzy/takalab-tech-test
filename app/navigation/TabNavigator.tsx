import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from './Fragments/IconBottomTabs';

import HomeScreen from 'app/screens/HomeScreen';
import ProfileScreen from 'app/screens/ProfileScreen';
import CartScreen from 'app/screens/CartScreen';

import rnStyles from '../../styles.json';
import {create} from 'tailwind-rn';

import {useStore} from 'app/store';

const {tailwind} = create(rnStyles);

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const {cart} = useStore((state) => {
    return {
      cart: state.cart,
    };
  });

  return (
    <Tab.Navigator
      initialRouteName="Home Screen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#374699',
      }}>
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarStyle: tailwind('h-14'),
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart Screen"
        component={CartScreen}
        options={{
          tabBarBadge: cart.length,
          tabBarBadgeStyle: tailwind('bg-red-700'),
          tabBarLabel: '',
          tabBarShowLabel: false,
          tabBarStyle: tailwind('h-14'),
          tabBarIcon: ({color, size}) => (
            <Icon name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarShowLabel: false,
          tabBarStyle: tailwind('h-14'),
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default React.memo(TabNavigator);

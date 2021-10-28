import React from 'react';
import {StatusBar} from 'react-native';
import {navigationRef} from './NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import LoggedInNavigator from './LoggedInNavigator';

const Stack = createStackNavigator();

const Navigator: React.FC<{}> = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar backgroundColor={'#374699'} />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        detachInactiveScreens={false}
        initialRouteName={'Auth'}>
        <Stack.Screen name={'Tab'} component={TabNavigator} />
        <Stack.Screen name={'Home'} component={LoggedInNavigator} />
        <Stack.Screen name={'Auth'} component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(Navigator);

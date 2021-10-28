import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'app/screens/LoginScreen';
import SplashScreen from 'app/screens/SplashScreen';
import WelcomeScreen from 'app/screens/WelcomeScreen';

const AuthStack = createStackNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      detachInactiveScreens={false}
      initialRouteName="Splash Screen"
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Splash Screen" component={SplashScreen} />
      <AuthStack.Screen name="Login Screen" component={LoginScreen} />
      <AuthStack.Screen name="Welcome Screen" component={WelcomeScreen} />
    </AuthStack.Navigator>
  );
}

export default React.memo(AuthNavigator);

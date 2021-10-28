import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EditProfileScreen from 'app/screens/EditProfileScreen';
import EditAddressScreen from 'app/screens/EditAddressScreen';
import DetailProductScreen from 'app/screens/DetailProductScreen';
import CartScreen from 'app/screens/CartScreen';
import CheckoutScreen from 'app/screens/CheckoutScreen';
import OrderConfirmationScreen from 'app/screens/OrderConfirmationScreen';

const LoggedInStack = createStackNavigator();

function LoggedInNavigator() {
  return (
    <LoggedInStack.Navigator
      detachInactiveScreens={false}
      initialRouteName="Edit Profile Screen"
      screenOptions={{headerShown: false}}>
      <LoggedInStack.Screen
        name="Edit Profile Screen"
        component={EditProfileScreen}
      />
      <LoggedInStack.Screen
        name="Edit Address Screen"
        component={EditAddressScreen}
      />
      <LoggedInStack.Screen
        name="Detail Product Screen"
        component={DetailProductScreen}
      />
      <LoggedInStack.Screen name="Cart Screen" component={CartScreen} />
      <LoggedInStack.Screen name="Checkout Screen" component={CheckoutScreen} />
      <LoggedInStack.Screen
        name="Order Confirmation Screen"
        component={OrderConfirmationScreen}
      />
    </LoggedInStack.Navigator>
  );
}

export default React.memo(LoggedInNavigator);

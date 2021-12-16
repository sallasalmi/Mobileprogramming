import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from "../../screens/AccountScreen";

const Stack = createNativeStackNavigator();

const AccountNavigation = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={AccountScreen} />
  </Stack.Navigator>
);

export default AccountNavigation;
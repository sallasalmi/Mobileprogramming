import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../../screens/Login";
import NewAccount from "../../screens/NewAccount";
import WelcomeScreen from "../../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();

const LoginNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={NewAccount} />
  </Stack.Navigator>
);

export default LoginNavigation;
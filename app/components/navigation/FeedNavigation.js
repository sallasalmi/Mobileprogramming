import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InformationScreen from "../../screens/InformationScreen";
import SceneList from "../../screens/SceneList";

const Stack = createNativeStackNavigator();

const FeedNavigation = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Scenes" component={SceneList} />
    <Stack.Screen name="Information" component={InformationScreen} />
  </Stack.Navigator>
);

export default FeedNavigation;

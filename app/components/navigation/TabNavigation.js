import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigation from "./AccountNavigation";
import FeedNavigation from "./FeedNavigation";
import NewScene from "../../screens/NewScene";
import NewSceneButton from "./NewSceneButton";

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Scenes"
      component={FeedNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="New Scene"
      component={NewScene}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewSceneButton
            onPress={() => navigation.navigate("NewScene")}
          />
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      screenOptions={{ headerShown: false }}
      component={AccountNavigation}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
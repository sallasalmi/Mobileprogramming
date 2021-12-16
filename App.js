import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTheme from "./app/components/navigation/NavigationTheme";

import TabNavigation from "./app/components/navigation/TabNavigation";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Login from "./app/screens/Login";
import NewAccount from "./app/screens/NewAccount";
import InformationScreen from "./app/screens/InformationScreen";

export default function App() {
  return(
  
    <InformationScreen/>
   
  );
}
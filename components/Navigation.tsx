import { HomeScreen } from "../screens/Home.screen";
import { SettingsScreen } from "../screens/Settings.screen";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
const AppStack = createStackNavigator();
import React from "react";

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="Settings" component={SettingsScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

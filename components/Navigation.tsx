import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { HomeScreen } from "../screens/Home.screen";
import { SettingsScreen } from "../screens/Settings.screen";

const AppStack = createStackNavigator();

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

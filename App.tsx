import "react-native-gesture-handler";
import React from "react";
import { Text } from "react-native";
import { DisplayPrimary, TextPrimary } from "./components/Typography.component";
import { Layout } from "./components/Layout.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { Spacer } from "./components/Spacer.component";
import { createStackNavigator } from "@react-navigation/stack";
import { useCachedResources } from "./hooks/useCachedResources";

const AppStack = createStackNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Layout.Column bg="white" grow justify>
      <Layout.PressableColumn
        px
        py
        onPress={() => navigation.navigate("Settings")}
      >
        <DisplayPrimary size="xl-28">I am the Home Screen</DisplayPrimary>
        <TextPrimary size="l-24">Press Me!</TextPrimary>
      </Layout.PressableColumn>
      <Layout.Column>
        <Spacer.Vertical size="l-24" />
      </Layout.Column>
      <Spacer.Horizontal size="l-24" />
    </Layout.Column>
  );
}

function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <Layout.Column bg="white" grow justify>
      <Layout.PressableColumn px py onPress={() => navigation.navigate("Home")}>
        <DisplayPrimary size="xl-28">I am the Settings Screen</DisplayPrimary>
        <TextPrimary size="l-24">Press Me!</TextPrimary>
      </Layout.PressableColumn>
      <Layout.Column>
        <Spacer.Vertical size="l-24" />
      </Layout.Column>
      <Spacer.Horizontal size="l-24" />
    </Layout.Column>
  );
}

export default function App() {
  const fontsLoaded = useCachedResources();

  if (!fontsLoaded) {
    return (
      <Layout.Column grow center>
        <Text>Loading...</Text>
      </Layout.Column>
    );
  }

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <AppStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <AppStack.Screen name="Home" component={HomeScreen} />
            <AppStack.Screen name="Settings" component={SettingsScreen} />
          </AppStack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    );
  }
}

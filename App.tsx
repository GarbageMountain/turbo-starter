import React from "react";
import { Text } from "react-native";
import { DisplayPrimary, TextPrimary } from "./components/Typography.component";
import { Layout } from "./components/Layout.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_300Light,
} from "@expo-google-fonts/open-sans";

import {
  RobotoSlab_300Light,
  RobotoSlab_500Medium,
  RobotoSlab_700Bold,
} from "@expo-google-fonts/roboto-slab";

import { useFonts } from "expo-font";
import { Spacer } from "./components/Spacer.component";

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
    OpenSans_300Light,
    RobotoSlab_300Light,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <Layout.Column grow center>
        <Text>Loading...</Text>
      </Layout.Column>
    );
  }

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <Layout.Column grow justify>
          <Layout.PressableColumn px py onPress={() => alert("hello")}>
            <DisplayPrimary size="xl-28">I am a header</DisplayPrimary>
            <TextPrimary size="l-24">Press Me!</TextPrimary>
          </Layout.PressableColumn>
          <Layout.Column>
            <Spacer.Vertical size="l-24" />
          </Layout.Column>
          <Spacer.Horizontal size="l-24" />
        </Layout.Column>
      </ThemeProvider>
    );
  }
}

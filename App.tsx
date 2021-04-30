import "react-native-gesture-handler";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useCachedResources } from "./hooks/useCachedResources";
import { LoadingScreen } from "./screens/Loading.screen";
import { Navigation } from "./components/Navigation";

export default function App() {
  const fontsLoaded = useCachedResources();

  if (fontsLoaded) {
    return <LoadingScreen screen="app" />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

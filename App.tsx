import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

import { Navigation } from "./components/Navigation";
import { useCachedResources } from "./hooks/useCachedResources";
import { LoadingScreen } from "./screens/Loading.screen";
import { theme } from "./theme";

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

import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Layout } from "../components/Layout.component";

import { Display } from "../components/Typography.component";

export const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <Layout.ScreenContainer bg="white" grow>
      <Layout.Row py justify align="flex-end">
        <Display color="grey" size="xl-28">
          Turbo-Props Starter
        </Display>
      </Layout.Row>
      {/* TODO: Check typescript docs on Navigation 6 */}
      {/* @ts-expect-error */}
      <Layout.PressableRow center onPress={() => navigate("Settings")}>
        <Display>Click For Settings</Display>
      </Layout.PressableRow>
    </Layout.ScreenContainer>
  );
};

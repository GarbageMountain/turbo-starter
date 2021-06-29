import React from "react";
import { Text } from "react-native";

import { Layout } from "../components/Layout.component";

type LoadingProps = {
  screen: string;
};

export const LoadingScreen: React.FC<LoadingProps> = (props) => {
  const { screen } = props;
  return (
    <Layout.Column grow center>
      {/* Fonts haven't loaded yet, use system default */}
      <Text accessibilityLabel={`loading ${screen}`}>Loading...</Text>
    </Layout.Column>
  );
};

import { Layout } from "../components/Layout.component";
import { TextPrimary } from "../components/Typography.component";
import React from "react";
import { Text } from "react-native";

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

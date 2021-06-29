import { View, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styled, baseLayout, baseColumnLayout, baseRowLayout } from "../theme";

export const Layout = {
  Row: styled(View)`
    ${baseLayout}
    ${baseRowLayout}
    ${({ debug, theme: { debugBorders } }) =>
      (debugBorders || debug) &&
      `border: solid ${StyleSheet.hairlineWidth}px red;`}
  `,
  PressableRow: styled(Pressable)`
    ${baseLayout}
    ${baseRowLayout}
    ${({ debug, theme: { debugBorders } }) =>
      (debugBorders || debug) &&
      `border: solid ${StyleSheet.hairlineWidth}px blue;`}
  `,
  Column: styled(View)`
    ${baseLayout}
    ${baseColumnLayout}
    ${({ debug, theme: { debugBorders } }) =>
      (debugBorders || debug) &&
      `border: solid ${StyleSheet.hairlineWidth}px green;`}
  `,
  PressableColumn: styled(Pressable)`
    ${baseLayout}
    ${baseColumnLayout}
    ${({ debug, theme: { debugBorders } }) =>
      (debugBorders || debug) &&
      `border: solid ${StyleSheet.hairlineWidth}px purple;`}
  `,

  ScreenContainer: styled(SafeAreaView)`
    ${baseLayout}
    ${baseColumnLayout}
    ${({ debug, theme: { debugBorders } }) =>
      (debugBorders || debug) &&
      `border: solid ${StyleSheet.hairlineWidth}px purple;`}
  `,
};

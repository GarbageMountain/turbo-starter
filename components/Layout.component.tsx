import { styled, baseLayout, baseColumnLayout, baseRowLayout } from "../theme";

import { View, Pressable, StyleSheet } from "react-native";

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
};

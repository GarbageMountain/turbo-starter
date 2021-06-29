import { StyleSheet, View } from "react-native";

import { styled, spacer } from "../theme";

export const Spacer = {
  Vertical: styled(View)`
    ${spacer.horizontal}
    ${({ debug, theme: { debugBorders } }) =>
      (debugBorders || debug) &&
      `border: solid ${StyleSheet.hairlineWidth}px brown;`}
  `,
  Horizontal: styled(View)`
    ${spacer.horizontal}
    ${({ debug, theme: { debugBorders } }) =>
      (debugBorders || debug) &&
      `border: solid ${StyleSheet.hairlineWidth}px teal;`}
  `,
  Flex: styled(View)`
    ${spacer.flex}
    ${({ debug, theme: { debugBorders } }) =>
      (debugBorders || debug) &&
      `border: solid ${StyleSheet.hairlineWidth}px grey;`}
  `,
};

import { styled, baseTypography } from "../theme";
import { StyleSheet, Text as RawText } from "react-native";

export const Text = styled(RawText)`
  ${baseTypography}
  ${({ theme, weight }) =>
    `font-family: ${theme.fonts["open-sans"][weight ?? "regular"]}`}
  ${({ debug, theme: { debugBorders } }) =>
    (debugBorders || debug) &&
    `border: solid ${StyleSheet.hairlineWidth}px orange;`}
`;

//
export const Display = styled(RawText)`
  ${baseTypography}
  ${({ theme, weight }) =>
    `font-family: ${theme.fonts["roboto-slab"][weight ?? "regular"]}`}
  ${({ debug, theme: { debugBorders } }) =>
    (debugBorders || debug) &&
    `border: solid ${StyleSheet.hairlineWidth}px orange;`}
`;

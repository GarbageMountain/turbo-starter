import { styled, baseTypography } from "../theme";
import { StyleSheet, Text } from "react-native";

export const TextPrimary = styled(Text)`
  ${baseTypography}
  ${({ theme, weight }) =>
    `font-family: ${theme.fonts["open-sans"][weight ?? "regular"]}`}
  ${({ debug, theme: { debugBorders } }) =>
    (debugBorders || debug) &&
    `border: solid ${StyleSheet.hairlineWidth}px orange;`}
`;

export const DisplayPrimary = styled(Text)`
  ${baseTypography}
  ${({ theme, weight }) =>
    `font-family: ${theme.fonts["roboto-slab"][weight ?? "regular"]}`}
  ${({ debug, theme: { debugBorders } }) =>
    (debugBorders || debug) &&
    `border: solid ${StyleSheet.hairlineWidth}px orange;`}
`;

import { TurboProps, ThemedProps } from "turbo-props";

export const {
  theme,
  css, // a css function with your theme baked in
  styled, // a styled function with your theme baked in
  useTheme, // a useTheme hook with your theme baked in
  // `turbo-props` basic building blocks
  baseLayout,
  baseRowLayout,
  baseColumnLayout,
  baseTypography,
  spacer,
  divider,
} = TurboProps(
  {
    colors: {
      grey: "grey",
      buttonBlue: "blue",
      text: "#262626",
      white: "#ffffff",
    },
    sizes: {
      "s-10": 12,
      "m-18": 18,
      "l-24": 24,
      "xl-28": 28,
      "xxl-48": 48,
    },
    fonts: {
      "open-sans": {
        light: "OpenSans_300Light",
        regular: "OpenSans_400Regular",
        bold: "OpenSans_700Bold",
      },
      "roboto-slab": {
        light: "RobotoSlab_300Light",
        regular: "RobotoSlab_500Medium",
        bold: "RobotoSlab_700Bold",
      },
    },
    grid: 8,
    debugBorders: false,
  },

  // these are your theme defaults, the values that are used as fallbacks if no value is entered
  // example: <Row px="l-24" /> v. <Row px />
  {
    color: "text",
    font: "open-sans",
    weight: "regular",
    // This is a not great default
    shadow: {
      color: "text",
      offset: {
        width: 0,
        height: 5,
      },
      radius: 6.27,
      elevation: 10,
    },
    sizes: {
      font: "m-18",
      px: "l-24",
      py: "m-18",
      radius: "s-10",
    },
  }
);

/**
 * export the types of your theme to be used when making
 * your UI building blocks
 */
type Theme = typeof theme;
type TP = ThemedProps<Theme>;
export type LayoutProps = TP["LayoutProps"];
export type TypographyProps = TP["TypographyProps"];
export type SpacerProps = TP["SpacerProps"];
export type DividerProps = TP["DividerProps"];
export type Color = TP["Colors"];
export type Size = TP["Sizes"];
export type Font = TP["Fonts"];
export type Weight = TP["Weights"];
export type DebugProps = TP["DebugProps"];

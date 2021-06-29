import { Pressable } from "react-native";

import { styled } from "../theme";

export const Button = styled(Pressable).attrs({
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
  bg: "buttonBlue",
})``;

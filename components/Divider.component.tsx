import { View } from "react-native";

import { styled, divider } from "../theme";

// Add attrs with more sensable defaults
export const Divider = {
  Vertical: styled(View)`
    ${divider.vertical}
  `,
  Horizontal: styled(View)`
    ${divider.horizontal}
  `,
};

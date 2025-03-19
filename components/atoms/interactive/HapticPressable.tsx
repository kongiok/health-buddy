import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { HapticFeedbackStrength } from "@/constants/interactives";
import { PlatformPressable } from "@react-navigation/elements";
import { Platform } from "react-native";
import * as Haptics from "expo-haptics";

type FunctionProps = BottomTabBarButtonProps & {
  HapticFeedbackStrength?: HapticFeedbackStrength;
};

export function HapticPressable(props: FunctionProps) {
  return (
    <PlatformPressable
      {...props}
      onPressIn={(ev) => {
        if (Platform.OS === "ios" || Platform.OS === "android") {
          switch (props.HapticFeedbackStrength) {
            case "heavy":
              Haptics.impactAsync(
                Haptics.ImpactFeedbackStyle.Heavy,
              );
              break;
            case "medium":
              Haptics.impactAsync(
                Haptics.ImpactFeedbackStyle.Medium,
              );
              break;
            case "light":
            default:
              Haptics.impactAsync(
                Haptics.ImpactFeedbackStyle.Light,
              );
              break;
          }
        }
        props.onPressIn?.(ev);
      }}
    />
  );
}

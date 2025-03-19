/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from "@/constants/colors";
import {
  ColorPaletteKey,
  ColorRoleGroup,
  ThemeColorOverrideMap,
} from "@/constants/colors.type";
import { useColorScheme } from "@/hooks/useColorScheme";

export const useThemeColor = (
  paletteName: ColorPaletteKey,
): ColorRoleGroup => {
  const theme = useColorScheme() ?? "light";
  return Colors[theme][paletteName];
};

export const useThemeOverrideColor = (
  paletteName: ColorPaletteKey,
  themeOverride?: ThemeColorOverrideMap,
): ColorRoleGroup => {
  const theme = useColorScheme() ?? "light";
  const colors = themeOverride
    ? themeOverride[theme]
    : Colors[theme];
  return colors[paletteName];
};

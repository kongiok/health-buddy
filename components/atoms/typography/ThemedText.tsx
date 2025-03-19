import { Text, type TextProps, StyleSheet } from "react-native";
import { match } from "ts-pattern";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  ColorPaletteKey,
  ThemeColorOverrideMap,
} from "@/constants/colors.type";

export type ThemedTextProps = TextProps & {
  themeOverride?: ThemeColorOverrideMap;
  colorPalette?: ColorPaletteKey;
  textVarient?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link";
};

export function ThemedText({
  style,
  colorPalette = "neutral",
  textVarient,
  ...rest
}: ThemedTextProps) {
  const color = match(textVarient)
    .with("link", () => useThemeColor("primary").base)
    .otherwise(() => useThemeColor(colorPalette).onContainer);

  const textTypography = match(textVarient)
    .with("title", () => styles.title)
    .with("defaultSemiBold", () => styles.defaultSemiBold)
    .with("subtitle", () => styles.subtitle)
    .with("link", () => styles.link)
    .otherwise(() => styles.default);

  return (
    <Text style={[{ color }, textTypography, style]} {...rest} />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    fontWeight: "bold",
  },
});

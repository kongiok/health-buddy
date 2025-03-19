export type ColorRoleGroup = {
  base: string;
  onBase: string;
  container: string;
  onContainer: string;
  border?: string;
  shadow?: string;
  tint?: string;
  selected?: string;
  disabled?: string;
  pressed?: string;
};

export type ColorPaletteKey =
  | "primary"
  | "secondary"
  | "neutral"
  | "tertiary";
// | "error"
// | "warning"
// | "success"
// | "info"

export type ColorPalette = Record<
  ColorPaletteKey,
  ColorRoleGroup
>;

enum ThemeKeys {
  LIGHT = "light",
  DARK = "dark",
}

export type ThemePalette = {
  [key in ThemeKeys]: ColorPalette;
};

export type ThemeColorOverrideMap = Partial<
  Record<ThemeKeys, string>
>;

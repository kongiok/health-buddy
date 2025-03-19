/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import type { ColorPalette } from "./colors.type";

const colorHexPalette = {
  primary: {
    50: "#F9FAFC",
    100: "#DCE0ED",
    200: "#BCC4E3",
    300: "#99A7DB",
    400: "#7288D7",
    500: "#4867D5",
    600: "#2449CF",
    700: "#1638B2",
    800: "#0B2891",
    900: "#041B6E",
    950: "#000F47",
  },
  secondary: {
    50: "#FAF9F5",
    100: "#EDE7D8",
    200: "#E3D7B9",
    300: "#DBC996",
    400: "#D6BB71",
    500: "#D4AF49",
    600: "#CDA126",
    700: "#B18819",
    800: "#916E0F",
    900: "#6F5307",
    950: "#4A3702",
  },
  tertiary: {
    50: "#FEF7F6",
    100: "#F7D6D4",
    200: "#EEB9B4",
    300: "#E49D96",
    400: "#D78379",
    500: "#C86C5F",
    600: "#B85647",
    700: "#954D41",
    800: "#744239",
    900: "#56352F",
    950: "#392723",
  },
  neutral: {
    50: "#FFFFFF",
    100: "#F7F7F7",
    200: "#DDDDDD",
    300: "#C1C1C4",
    400: "#A2A1B1",
    500: "#807DA1",
    600: "#605B8F",
    700: "#464175",
    800: "#2F2A58",
    900: "#1A1737",
    950: "#080713",
  },
};

const lightPalette: ColorPalette = {
  primary: {
    base: "hsl(226.81, 62.67%, 55.88%)",
    onBase: "hsl(220, 33.33%, 98.24%)",
    container: "hsl(227.69, 41.05%, 81.37%)",
    onContainer: "hsl(227.32, 100%, 13.92%)",
    tint: "hsl(225.88, 32.08%, 89.61%)",
  },
  secondary: {
    base: "hsl(44.03, 61.78%, 55.88%)",
    onBase: "hsl(48, 33.33%, 97.06%)",
    container: "hsl(42.86, 42.86%, 80.78%)",
    onContainer: "hsl(44.17, 94.74%, 14.9%)",
    tint: "hsl(42.86, 36.84%, 88.82%)",
  },
  tertiary: {
    base: "hsl(7.43, 48.84%, 57.84%)",
    onBase: "hsl(245, 46.15%, 5.1%)",
    container: "hsl(5.17, 63.04%, 81.96%)",
    onContainer: "hsl(245, 46.15%, 5.1%)",
    tint: "hsl(3.43, 68.63%, 90%)",
  },
  neutral: {
    base: "hsl(245, 16.07%, 56.08%)",
    onBase: "hsl(245, 46.15%, 5.1%)",
    container: "hsl(0, 0%, 96.86%)",
    onContainer: "hsl(245, 46.15%, 5.1%)",
  },
};

const Colors = {
  light: lightPalette,
  // TODO: 待程式完善之時再行調整。
  dark: lightPalette,
};

export { Colors };

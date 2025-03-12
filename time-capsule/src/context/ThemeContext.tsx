import { Theme } from "../types/theme.ts";
import { createContext } from "react";

type ThemeContextsetCapsule = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextsetCapsule>({
  theme: "light",
  toggleTheme: () => {},
});

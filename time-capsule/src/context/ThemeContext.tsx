import { Theme } from "../types/theme.ts";
import { createContext } from "react";

type ThemeContextsetCpsule = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextsetCpsule>({
  theme: "light",
  toggleTheme: () => {},
});

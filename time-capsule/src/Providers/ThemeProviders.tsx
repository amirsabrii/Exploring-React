import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";
import { Theme } from "../types/theme.ts";

type Props = PropsWithChildren;

function ThemeProviders({ children }: Props): ReactNode {
  const [theme, setTheme] = useState<Theme>(themeInitialState);

  useEffect(() => {
    localStorage.setItem("themes", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((old) => (old === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function themeInitialState(): Theme {
  const items = localStorage.getItem("themes");

  return items === "dark" || items === "light" ? items : "light";
}
export default ThemeProviders;

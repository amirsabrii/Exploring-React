import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext.tsx";
import { Theme } from "../types/theme.ts";

type Props = PropsWithChildren;

function ThemeProviders({ children }: Props): ReactNode {
  const [theme, setTheme] = useState<Theme>(themeInitialState);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((old) => (old === "light" ? "dark" : "light"));
    document.documentElement.dataset.theme = theme;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function themeInitialState(): Theme {
  const items = localStorage.getItem("theme");

  return items === "dark" || items === "light" ? items : "light";
}
export default ThemeProviders;

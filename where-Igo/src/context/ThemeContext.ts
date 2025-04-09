import {Theme} from "../type/Theme.ts";
import {createContext} from "react";


type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
    theme : 'light' ,
    toggleTheme : () => {}
})
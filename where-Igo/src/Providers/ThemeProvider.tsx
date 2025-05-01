import {PropsWithChildren, ReactNode, useEffect, useState} from "react";
import {ThemeContext} from "../context/ThemeContext.ts";
import {Theme} from "../type/Theme.ts";

type Props   = PropsWithChildren

function ThemeProvider({children} : Props) : ReactNode{

    const [theme , setTheme] = useState<Theme>(themeInitialState)

    useEffect(() => {

        localStorage.setItem("themes", theme);
        document.documentElement.dataset.theme = theme;
    } , [theme])


    const toggleTheme = () => {
        setTheme((old) => (old === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext value={{ theme ,  toggleTheme}}>
            {children}
        </ThemeContext>
    )
}

function themeInitialState () : Theme{

    const items =  localStorage.getItem('themes')

    return items === "light" || items === "dark" ? items : "dark";
}

export default ThemeProvider;
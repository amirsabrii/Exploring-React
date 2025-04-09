import {ReactNode, useContext} from "react";

import {Link, NavLink} from "react-router";

import kojaberam from '../../icons/kojaberam.jpeg'

import styles from "./Header.module.css";
import clsx from "clsx";
import Button from "../Button/Button.tsx";
import {ThemeContext} from "../../context/ThemeContext.ts";
import MingcuteSunFill from "../../icons/MingcuteSunFill.tsx";
import SolarMoonBold from "../../icons/SolarMoonBold.tsx";

type NavItem  = {
    title : string,
    href : string
}

const navItem : NavItem[] =  [
    {title : 'خانه' , href : '/'},
    {title : 'درباره ما' , href : '/about'},
    {title : 'تماس با ما' , href : '/contact'},
    {title : 'راهنمای سفر' , href : '/ravel-Guide'}
]

function Header(): ReactNode {
    const {theme ,toggleTheme} = useContext(ThemeContext)
  return (
    <div className={styles["header"]}>
      <Link to={'/'}  className={styles.logo}><img src={kojaberam} /></Link>

        <nav>
            <ul>
            <Button onClick={() => toggleTheme()} >{theme === "dark" ? <MingcuteSunFill/> : <SolarMoonBold/>}</Button>
                {navItem.map(item => (
                    <li key={item.title}>
                        <NavLink to={item.href} className={({isActive}) => clsx(isActive && styles.active) }  > {item.title} </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  )
}

export default Header;

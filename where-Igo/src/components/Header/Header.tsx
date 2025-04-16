import { ReactNode, useContext, useState } from "react";

import { Link, NavLink } from "react-router";

import kojaberam from "../../icons/kojaberam.jpeg";

import styles from "./Header.module.css";
import clsx from "clsx";
import Button from "../Button/Button.tsx";
import { ThemeContext } from "../../context/ThemeContext.ts";
import MingcuteSunFill from "../../icons/MingcuteSunFill.tsx";
import SolarMoonBold from "../../icons/SolarMoonBold.tsx";
import MingcuteMenuFill from "../../icons/MingcuteMenuFill.tsx";

type NavItem = {
  title: string;
  href: string;
};

const navItem: NavItem[] = [
  { title: "خانه", href: "/" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
  { title: "راهنمای سفر", href: "/ravel-Guide" },
];

function Header(): ReactNode {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isopen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isopen);
  };
  return (
    <div className={styles["header"]}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <MingcuteMenuFill />
      </div>

      <nav>
        <ul className={clsx(styles.menu, isopen && styles.active)}>
          <Button
            className={styles["theme-button"]}
            onClick={() => toggleTheme()}
            shape={"circle"}
          >
            {theme === "dark" ? <MingcuteSunFill /> : <SolarMoonBold />}
          </Button>

          {navItem.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.href}
                className={({ isActive }) => clsx(isActive && styles.active)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Link to={"/"} className={styles.logo}>
        <img src={kojaberam} />
      </Link>
    </div>
  );
}

export default Header;

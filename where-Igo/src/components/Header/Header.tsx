import { ReactNode, useContext, useState } from "react";

import { NavLink } from "react-router";

import styles from "./Header.module.css";
import clsx from "clsx";
import Button from "../Button/Button.tsx";
import { ThemeContext } from "../../context/ThemeContext.ts";
import MingcuteSunFill from "../../icons/MingcuteSunFill.tsx";
import SolarMoonBold from "../../icons/SolarMoonBold.tsx";
import MingcuteMenuFill from "../../icons/MingcuteMenuFill.tsx";
import MingcuteUser2Fill from "../../icons/MingcuteUser2Fill.tsx";

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
      <nav>
        <div className={styles.hamburger} onClick={toggleMenu}>
          <MingcuteMenuFill />
        </div>
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
        <MingcuteUser2Fill className={styles.suffix} />
      </nav>
    </div>
  );
}

export default Header;

import { ReactNode } from "react";

import styles from "./Header.module.css";
import {Link} from "react-router";

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
  return (
    <div className={styles["header"]}>
      <div className={styles.logo}>Where i go</div>

        <nav>
            <ul>
                {navItem.map(item => (
                    <li key={item.title}>
                        <Link to={item.href}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
  );
}

export default Header;

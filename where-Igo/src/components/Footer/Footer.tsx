import {ReactNode} from "react";

import styles from "./Footer.module.css"
import {Link} from "react-router";

function Footer() : ReactNode{
    return (<h1 className={styles['footer']}>
        <Link to={'/'}>footer</Link>
    </h1>)
}

export default Footer;
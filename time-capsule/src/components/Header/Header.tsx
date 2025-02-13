import {ReactNode} from 'react'

import styles from './Header.module.css'

function Header(): ReactNode {
    return (
        <header>
            <h1 className={styles.title}>Time Capsules</h1>
    </header>
    );
}

export default Header;
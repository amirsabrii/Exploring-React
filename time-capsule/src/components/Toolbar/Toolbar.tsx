import {ReactNode} from 'react'

import styles from './Toolbar.module.css'

function Toolbar() : ReactNode{
    return (
      <div className={styles.toolbar}>
        <input type="text" />

        <select>
          <option selected value="all">
            all
          </option>
          <option value="work">work</option>
          <option value="frindly">frindly</option>
          <option value="family">family</option>
        </select>

        <button>..</button>
      </div>
    );
}

export default Toolbar;
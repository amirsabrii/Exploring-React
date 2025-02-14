import { ReactNode } from "react";

import styles from "./Toolbar.module.css";
import TextInput from "../Text-input/Text-input.tsx";
import MingcuteSearch2Line from "../../icons/MingcuteSearch2Line.tsx";

function Toolbar(): ReactNode {
  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search Note..."
        suffixIcon={<MingcuteSearch2Line />}
      />

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

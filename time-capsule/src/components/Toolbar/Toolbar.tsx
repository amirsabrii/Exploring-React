import { ReactNode, useContext } from "react";

import styles from "./Toolbar.module.css";
import TextInput from "../TextInput/TextInput.tsx";
import MingcuteSearch2Line from "../../icons/MingcuteSearch2Line.tsx";

import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";

import { ThemeContext } from "../../context/ThemeContext.tsx";
import MingcuteSunFill from "../../icons/MingcuteSunFill.tsx";
import SolarMoonBold from "../../icons/SolarMoonBold.tsx";

function Toolbar(): ReactNode {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.toolbar}>
      <TextInput
        placeholder="Search Note..."
        suffixIcon={<MingcuteSearch2Line />}
      />

      <Select
        options={[
          { value: "all", label: "all" },
          { value: "work", label: "work" },
          { value: "friendly", label: "friendly" },
          { value: "family", label: "family" },
        ]}
      ></Select>
      <Button
        size="medium"
        variant="solid"
        shape="square"
        onClick={() => toggleTheme()}
        suffixIcon={theme === "dark" ? <SolarMoonBold /> : <MingcuteSunFill />}
      ></Button>
    </div>
  );
}

export default Toolbar;

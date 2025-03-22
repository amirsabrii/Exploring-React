import { ReactNode, useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext.tsx";


import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";

import MingcuteSearch2Line from "../../icons/MingcuteSearch2Line.tsx";
import MingcuteSunFill from "../../icons/MingcuteSunFill.tsx";
import SolarMoonBold from "../../icons/SolarMoonBold.tsx";


import styles from "./Toolbar.module.css";
import LanguageButton from "../../LanguageButton/LanguageButton.tsx";

function Toolbar(): ReactNode {
  const { theme, toggleTheme } = useContext(ThemeContext);


  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
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
      <LanguageButton/>
      <Button
        size="medium"
        variant="solid"
        shape="square"
        onClick={() => toggleTheme()}
        suffixIcon={theme === "dark" ? <MingcuteSunFill /> :<SolarMoonBold /> }
      ></Button>
    </div>
  );
}

export default Toolbar;

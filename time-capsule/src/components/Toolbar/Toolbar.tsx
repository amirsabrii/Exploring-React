import { ReactNode, useContext } from "react";

import {useTranslation} from "react-i18next";

import { ThemeContext } from "../../context/ThemeContext.tsx";

import TextInput from "../TextInput/TextInput.tsx";
import Select from "../Select/Select.tsx";
import Button from "../Button/button.tsx";
import LanguageButton from "../../LanguageButton/LanguageButton.tsx";

import MingcuteSearch2Line from "../../icons/MingcuteSearch2Line.tsx";
import MingcuteSunFill from "../../icons/MingcuteSunFill.tsx";
import SolarMoonBold from "../../icons/SolarMoonBold.tsx";

import styles from "./Toolbar.module.css";


function Toolbar(): ReactNode {
  const { theme, toggleTheme } = useContext(ThemeContext);

    const {t} = useTranslation();

  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        placeholder={t('toolbar.search.placeholder')}
        suffixIcon={<MingcuteSearch2Line />}
      />

      <Select
        options={[
          { value: "all", label: t('capsule.form.Category.all') },
          { value: "work", label: t('capsule.form.Category.work')},
          { value: "friendly", label: t('capsule.form.Category.friendly')},
          { value: "family", label:t('capsule.form.Category.family') },
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

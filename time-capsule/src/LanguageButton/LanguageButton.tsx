import {ReactNode} from "react";

import Button from "../components/Button/button.tsx";

import {useTranslation} from "react-i18next";

import TwemojiFlagUnitedKingdom from "../icons/TwemojiFlagUnitedKingdom.tsx";
import TwemojiFlagIran from "../icons/TwemojiFlagIran.tsx";


function LanguageButton() : ReactNode {

const {i18n} = useTranslation()

    return (
        <Button
            onClick={() => i18n.changeLanguage(i18n.language === 'fa' ? 'en'  : 'fa')}
            shape={"square"}
            size={"medium"}
            suffixIcon={
                i18n.language === 'fa' ? <TwemojiFlagUnitedKingdom /> : <TwemojiFlagIran />
            }
        ></Button>
    )
}

export default LanguageButton;
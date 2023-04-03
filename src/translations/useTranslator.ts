import { useCallback, useEffect, useState } from "react"
import { useLanguage } from "../hooks/context/LanguageProvider";
import { translator as translatorDanish } from "./generated/da"
import { translator as translatorEnglish } from "./generated/en"
import {useTranslation} from "react-i18next";

export const useTranslator = () => {
    const userLanguage = useLanguage();
    const {t} = useTranslation(userLanguage.language);
    
    const getTranslatorForLanguage = useCallback(() => {
        if(userLanguage.language === "da") {
            return translatorDanish(t);
        } else if (userLanguage.language === "en") {
            return translatorEnglish(t)
        }
        return translatorDanish(t);
        
    }, [userLanguage.language, t])
    const [translator, setTranslator] = useState(getTranslatorForLanguage());
    
    useEffect(() => {
        setTranslator(getTranslatorForLanguage())
    }, [userLanguage.language, getTranslatorForLanguage])

    return translator;
}
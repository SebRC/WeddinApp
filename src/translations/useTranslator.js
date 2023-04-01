import { useCallback, useEffect, useState } from "react"
import { useLanguage } from "../hooks/context/LanguageProvider";
import { translator as translatorDanish } from "./generated/da"
import { translator as translatorEnglish } from "./generated/en"

export const useTranslator = () => {
    const userLanguage = useLanguage();
    
    const getTranslatorForLanguage = useCallback(() => {
        if(userLanguage.language === "da") {
            return translatorDanish;
        } else if (userLanguage.language === "en") {
            return translatorEnglish
        }
        return translatorDanish;
        
    }, [userLanguage.language])
    const [translator, setTranslator] = useState(getTranslatorForLanguage());
    
    useEffect(() => {
        setTranslator(getTranslatorForLanguage())
    }, [userLanguage.language, getTranslatorForLanguage])

    return translator;
}
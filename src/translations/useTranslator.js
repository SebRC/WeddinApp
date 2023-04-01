import { useEffect, useState } from "react"
import { useLanguage } from "../hooks/context/LanguageProvider";
import { translator as translatorDanish } from "./generated/da"
import { translator as translatorEnglish } from "./generated/en"

export const useTranslator = () => {
    const userLanguage = useLanguage();
    const [translator, setTranslator] = useState(translatorDanish);

    useEffect(() => {
        if(userLanguage.language === "da") {
            console.log("language to danish");
            setTranslator(translatorDanish)
        } else if (userLanguage.language === "en") {
            console.log("language to english");
            setTranslator(translatorEnglish)
        }
    }, [userLanguage.language])

    return translator;
}
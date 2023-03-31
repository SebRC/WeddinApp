import { useEffect, useState } from "react"
import { translator as translatorDanish } from "./generated/da"
import { translator as translatorEnglish } from "./generated/en"

export const useTranslator = () => {
    const userLanguage = "da";
    const [translator, setTranslator] = useState(translatorDanish);

    useEffect(() => {
        if(userLanguage === "da") {
            setTranslator(translatorDanish)
        } else if (userLanguage === "en") {
            setTranslator(translatorEnglish)
        }
    }, [userLanguage])

    return translator;
}
// hooks
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

// type
import { SelectChangeEvent } from "@mui/material"

const useLangSelect = () => {

    const { i18n } = useTranslation()
    const [lang, setLang] = useState<string>(i18n.language)

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value);
        i18n.changeLanguage(event.target.value)
    };

    useEffect(() => {
        document.documentElement.lang = i18n.language
    }, [i18n.language])

    return { lang, handleChange }
}

export default useLangSelect
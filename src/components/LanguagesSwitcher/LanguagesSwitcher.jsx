import React from "react";
import { useTranslation } from "react-i18next";


const LanguagesSwitcher = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const { t, i18n } = useTranslation();

const changeLanguage = (language) => {
    i18n.changeLanguage(language);
};

return (
<>
<button type="button" onClick={() => changeLanguage("en")}>EN</button>
<button type="button" onClick={() => changeLanguage("ua")}>UA</button>
<div>{t('title')}</div>
</>

);

};

export default LanguagesSwitcher;
import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translationEN';
import translationUA from './locales/ua/translationUA';



i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    resources: {
        en: {
            translation: translationEN,
        },
        ua: {
            translation: translationUA,
        },
    },
    debug: false,
    detection: {
        order: ['queryString, cookie'],
        cache: ['cookie'],
    },
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

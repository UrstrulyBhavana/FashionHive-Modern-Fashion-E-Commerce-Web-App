import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import english from './locales/english.json'
import bangla from './locales/bangla.json'
import Cookies from 'js-cookie'

const resources = {
    en: {
        translation: english
    },
    bn: {
        translation: bangla
    }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    lng: Cookies.get('fj_lang') || 'en',
    fallbackLng: "en"
})

export default i18n
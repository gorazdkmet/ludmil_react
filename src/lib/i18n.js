import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './locales.json';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        languages: ['en', 'sk'],
        lng: 'sk',
        fallbackLng: 'en',
        debug: true,
    });

export default i18next;


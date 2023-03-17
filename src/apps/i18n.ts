import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
	.use(HttpApi)
	// pass the i18n instance to react-i18next
	.use(initReactI18next)
	// detect user language
	.use(LanguageDetector)
	// init i18next
	.init({
		supportedLngs: ['ar', 'en', 'fr', 'de'],
		fallbackLng: 'en',
		detection: {
			order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
			caches: ['localStorage', 'cookie'],
		},
		backend: {
			loadPath: '/locales/{{lng}}.json',
		},
		debug: false,
	});

export default i18n;

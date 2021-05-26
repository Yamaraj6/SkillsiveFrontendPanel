import { supportedLanguages } from 'services/api/apiModels/app';
import Constants from 'shared/Constants';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './resources';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		debug: false,
		returnObjects: true,
		keySeparator: '.',

		interpolation: {
			escapeValue: false
		},
		detection: {
			order: ['cookie', 'navigator'],
			lookupCookie: Constants.NEXT_LOCALE,
			nonExplicitSupportedLngs: true
		},
		fallbackLng: 'en',
		supportedLngs: supportedLanguages.map(lang => lang.Name)
	});

export default i18n;

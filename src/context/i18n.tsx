import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useMemo,
} from 'react';
import { LANGUAGES } from '../constants/navbar';

const DEFAULT_LANGUAGE = LANGUAGES.find((lang) => lang.code === 'en');

const I18nContext = createContext({
	language: DEFAULT_LANGUAGE,
	setLanguage: (language: any) => {},
});

const UseI18nContext = () => {
	return useContext(I18nContext);
};

const I18nContextProvider = (props: { children: React.ReactElement }) => {
	const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

	useEffect(() => {
		try {
			const i18nextLng = localStorage.getItem('i18nextLng');

			if (i18nextLng) {
				const lang = LANGUAGES.find((lang) => lang.code === i18nextLng);

				document.documentElement.lang = lang?.code || 'en';

				setLanguage(lang);

				if (lang?.rtl) {
					document.body.classList.add('rtl');
					document.documentElement.dir = 'rlt';
				} else {
					document.body.classList.remove('rtl');
					document.documentElement.dir = 'ltr';
				}
			}
		} catch (error) {
			// error
		}
	}, []);

	return (
		<I18nContext.Provider
			value={useMemo(
				() => ({
					language,
					setLanguage,
				}),
				[language]
			)}
		>
			{props.children}
		</I18nContext.Provider>
	);
};

export { I18nContext, UseI18nContext, I18nContextProvider };

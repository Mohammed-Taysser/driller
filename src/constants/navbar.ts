import { Language, SocialMedia } from '../apps/react-app-env';

import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from 'react-icons/fa';

const LANGUAGES: Language[] = [
	{
		title: 'German',
		rtl: false,
		code: 'de',
	},
	{
		title: 'Français',
		rtl: false,
		code: 'fr',
	},
	{
		title: 'English',
		rtl: false,
		code: 'en',
	},
	{
		title: 'العربية',
		rtl: true,
		code: 'ar',
	},
];

const SOCIAL_MEDIA: SocialMedia[] = [
	{
		title: 'facebook',
		icon: FaFacebookF,
	},
	{
		title: 'linkedin',
		icon: FaLinkedinIn,
	},
	{
		title: 'twitter',
		icon: FaTwitter,
	},
	{
		title: 'instagram',
		icon: FaInstagram,
	},
];

export { LANGUAGES, SOCIAL_MEDIA };

import { IconType } from "react-icons"
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from 'react-icons/fa';

interface Language {
	title: string,
	rtl: boolean
}

interface SocialMedia {
	title: string,
	icon: IconType
}

const LANGUAGES: Language[] = [
	{
		title: 'German',
		rtl: false,
	},
	{
		title: 'French',
		rtl: false,
	}, {
		title: 'Italian',
		rtl: false,
	}, {
		title: 'العربية',
		rtl: true,
	}
]

const SOCIAL_MEDIA: SocialMedia[] = [
	{
		title: 'facebook',
		icon: FaFacebookF
	},
	{
		title: 'linkedin',
		icon: FaLinkedinIn
	},
	{
		title: 'twitter',
		icon: FaTwitter
	},
	{
		title: 'instagram',
		icon: FaInstagram
	},
]

export { LANGUAGES, SOCIAL_MEDIA }

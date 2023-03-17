import { BsEnvelope, BsGlobe, BsTelephone } from 'react-icons/bs';
import i18next from 'i18next';
import { LANGUAGES, SOCIAL_MEDIA } from '../constants/navbar';
import { UseI18nContext } from '../context/i18n';
import { Language } from '../apps/react-app-env';

const NavbarLanguages = () => {
	const i18nContext = UseI18nContext();

	const onLanguageChange = (lang: Language) => {
		document.documentElement.lang = lang?.code || 'en';

		i18nContext.setLanguage(lang);
		i18next.changeLanguage(lang.code);

		if (lang?.rtl) {
			document.body.classList.add('rtl');
			document.documentElement.dir = 'rlt';
		} else {
			document.body.classList.remove('rtl');
			document.documentElement.dir = 'ltr';
		}
	};

	return (
		<>
			{LANGUAGES.map((lang) =>
				lang.code === i18nContext.language?.code ? (
					<></>
				) : (
					<li key={lang.title}>
						<button
							className={`dropdown-item ${lang.rtl ? 'arabic-font' : ''}`}
							onClick={() => onLanguageChange(lang)}
						>
							{lang.title}
						</button>
					</li>
				)
			)}
		</>
	);
};

function NavbarSocialMedia() {
	return (
		<div className='navbar-top-social'>
			{SOCIAL_MEDIA.map((link) => (
				<a href={`#${link.title}`} title={link.title} key={link.title}>
					<link.icon />
				</a>
			))}
		</div>
	);
}

function TopNavbar() {
	return (
		<div className='navbar-top'>
			<div className='container'>
				<div className='navbar-top-inner'>
					<div className='row justify-content-center justify-content-md-between align-items-center gy-2'>
						<div className='col-auto'>
							<div className='navbar-top-links'>
								<ul className='list-unstyled mb-0 p-0'>
									<li>
										<BsTelephone className='icon' />
										<a className='mx-2' href='tel:+19524357106'>
											19524357106
										</a>
									</li>
									<li>
										<BsEnvelope className='icon' />
										<a className='mx-2' href='mailto:info@driller.com'>
											info@driller.com
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-auto'>
							<div className='navbar-top-links'>
								<ul className='list-unstyled mb-0'>
									<li>
										<div className='dropdown language-dropdown'>
											<div
												className='dropdown-toggle cursor-pointer'
												id='navbar-languages'
												data-bs-toggle='dropdown'
											>
												<BsGlobe />
											</div>
											<ul
												className='dropdown-menu'
												aria-labelledby='navbar-languages'
											>
												<NavbarLanguages />
											</ul>
										</div>
									</li>
									<li>
										<NavbarSocialMedia />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopNavbar;

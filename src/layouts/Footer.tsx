import {
	FaFacebookF,
	FaLinkedinIn,
	FaRegPaperPlane,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa';

import { useState } from 'react';
import { AiOutlineCopyright } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants/service';

import footerOverlay from '../assets/images/background/bg-footer-overlay.jpg';
import favicon from '../assets/images/icons/favicon.svg';
import footerPattern from '../assets/images/icons/service-pattern.png';
import { useTranslation } from 'react-i18next';

function Footer() {
	const { t } = useTranslation();
	const [currentYear] = useState(new Date().getFullYear());

	return (
		<footer
			className='footer-wrapper'
			style={{
				background: `center / cover no-repeat url(${footerOverlay})`,
			}}
		>
			<div className='widget-area'>
				<div className='container'>
					<div className='row justify-content-between'>
						<div className='col-md-6 col-xl-3'>
							<div className='widget footer-widget'>
								<div className='about-logo'>
									<Link to='/'>
										<img
											className='bg-white p-2 img-fluid'
											src={favicon}
											alt='favicon'
											width='180'
										/>
									</Link>
								</div>
								<p className='my-3'>{t('footer-about')}</p>
								<div className='social-media'>
									<a href='#facebook' title='facebook'>
										<FaFacebookF />
									</a>
									<a href='#twitter' title='twitter'>
										<FaTwitter />
									</a>
									<a href='#linkedin' title='linkedin'>
										<FaLinkedinIn />
									</a>
									<a href='#whatsapp' title='whatsapp'>
										<FaWhatsapp />
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-xl-auto'>
							<div className='widget footer-widget'>
								<h3 className='widget-title'>
									{t('quick-link').toUpperCase()}
								</h3>
								<div className='menu-all-pages-container'>
									<ul className='menu'>
										<li>
											<Link to='/about-us'>{t('about-us')}</Link>
										</li>
										<li>
											<Link to='/services'>{t('services')}</Link>
										</li>
										<li>
											<Link to='/projects'>{t('projects')}</Link>
										</li>
										<li>
											<Link to='/contact-us'>{t('contact-us')}</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-xl-auto'>
							<div className='widget footer-widget'>
								<h3 className='widget-title'>{t('services').toUpperCase()}</h3>
								<div className='menu-all-pages-container'>
									<ul className='menu'>
										{SERVICES.map((service) => (
											<li key={service.title}>
												<Link to='/single-service'>{t(service.title)}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-xl-auto'>
							<div className='widget newsletter-widget footer-widget'>
								<h3 className='widget-title'>{t('subscribe')}</h3>
								<p className='footer-text'>{t('footer-subscribe')}</p>
								<form className='newsletter-form'>
									<input
										className='form-control'
										type='email'
										placeholder={t('enter-email').toString()}
									/>
									<button className='icon-btn' type='submit' title='send'>
										<FaRegPaperPlane />
									</button>
								</form>
								<div
									className='bg-shape'
									style={{
										background: `center / cover no-repeat var(--main-color) url(${footerPattern})`,
									}}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='copyright-wrap'>
				<div className='container'>
					<div className='row justify-content-between align-items-center'>
						<div className='col-auto'>
							<p className='copyright-text'>
								{t('copyright')} <AiOutlineCopyright />
								<span className='mx-1'>2022</span>-
								<span className='mx-1'>{currentYear}</span>
								<a
									href='https://github.com/Mohammed-Taysser/'
									rel='noreferrer noopener'
									target='_blank'
								>
									{t('Mohammed-Taysser')}
								</a>
								. {t('all-right')}.
							</p>
						</div>
						<div className='col-auto'>
							<div className='footer-links'>
								<ul>
									<li>
										<Link to='/about-us'>{t('privacy-policy')}</Link>
									</li>
									<li>
										<Link to='/about-us'>{t('terms-of-use')}</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

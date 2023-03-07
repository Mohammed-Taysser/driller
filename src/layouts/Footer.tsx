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

function Footer() {
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
								<p className='my-3'>
									Quickly supply alternative strategic theme areas vis-a-vis B2C
									mindshare. Objectively repurpose stand-alone synergy via
									user-centric architectures.
								</p>
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
								<h3 className='widget-title'>QUICK LINKS</h3>
								<div className='menu-all-pages-container'>
									<ul className='menu'>
										<li>
											<Link to='/about-us'>About Us</Link>
										</li>
										<li>
											<Link to='/services'>Services</Link>
										</li>
										<li>
											<Link to='/projects'>Projects</Link>
										</li>
										<li>
											<Link to='/contact-us'>Contact Us</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-xl-auto'>
							<div className='widget footer-widget'>
								<h3 className='widget-title'>SERVICES</h3>
								<div className='menu-all-pages-container'>
									<ul className='menu'>
										{SERVICES.map((service) => (
											<li key={service.title}>
												<Link to='/single-service'>{service.title}</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-xl-auto'>
							<div className='widget newsletter-widget footer-widget'>
								<h3 className='widget-title'>Subscribe</h3>
								<p className='footer-text'>
									Subscribe For Our Latest News &amp; Articles.
								</p>
								<form className='newsletter-form'>
									<input
										className='form-control'
										type='email'
										placeholder='Enter Email'
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
								Copyright <AiOutlineCopyright />
								<span className='mx-1'>2022</span>-
								<span className='mx-1'>{currentYear}</span>
								<a
									href='https://github.com/Mohammed-Taysser/'
									rel='noreferrer noopener'
									target='_blank'
								>
									Mohammed-Taysser
								</a>
								. All Rights Reserved.
							</p>
						</div>
						<div className='col-auto'>
							<div className='footer-links'>
								<ul>
									<li>
										<Link to='/about-us'>Privacy Policy</Link>
									</li>
									<li>
										<Link to='/about-us'>Terms of Use</Link>
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

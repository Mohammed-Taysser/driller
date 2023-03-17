import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import ContactForm from '../ContactForm';

import overlay from '../../assets/images/background/bg-projects-pattern.png';
import quote1 from '../../assets/images/background/quote-1.jpg';
import quote2 from '../../assets/images/background/quote-2.jpg';

function Contact() {
	const { t } = useTranslation();

	return (
		<section
			className='contact-us-section py-5'
			style={{
				background: `center / cover no-repeat url(${overlay})`,
			}}
		>
			<div className='container my-5 py-5'>
				<div className='row justify-content-center '>
					<div className='col-md-6 my-3'>
						<div className='title-area'>
							<div className='sub-title'>
								{t('contact-us').toUpperCase()}
								<div className='shape right'>
									<div className='dots'></div>
								</div>
							</div>
							<div className='sec-title'>
								{t('to-get-any-help-were-always-here')}
							</div>
						</div>
						<p className='text-muted mt-4'>
							{t(
								'phosfluorescently-incubate-turnkey-methodologies-rather-than-wireless-resources-compellingly-incubate-enabled-interfaces-enthusiastically-exploit-cost-effective-growth-strategies-with-customer-directed'
							)}
						</p>
						<div className='row px-0 mx-0 align-items-center mt-3 mb-5'>
							<div className='col-sm-6 my-3 px-0'>
								<div className='single-image'>
									<img src={quote1} alt='quote-1' />
								</div>
							</div>
							<div className='col-sm-6 my-3 px-0'>
								<div className='single-image mx-4'>
									<img src={quote2} alt='quote-2' />
								</div>
							</div>
						</div>
						<Link to='/about-us' className='btn-aurora'>
							{t('read-more')} <MdArrowForwardIos className='fs-5 my-0 mx-2' />
						</Link>
					</div>
					<div className='col-md-6 my-3'>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;

import { useTranslation } from 'react-i18next';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsEnvelope } from 'react-icons/bs';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';
import Banner from '../layouts/Banner';
import usePageTitle from '../hooks/usePageTitle';

function ContactUs() {
	const { t } = useTranslation();
	usePageTitle('Contact Us');

	return (
		<>
			<Banner title={t('contact-us').toString()} />

			<section className='contact-us bg-semi-light p-5'>
				<div className='container my-5'>
					<div className='row justify-content-center align-items-center my-5'>
						<div className='col-md-6 my-3'>
							<div className='main-content'>
								<div className='title-area'>
									<div className='sub-title'>
										{t('contact-us')}
										<div className='shape right'>
											<div className='dots'></div>
										</div>
									</div>
								</div>
								<div className='contact-us-desc mt-5 pt-2'>
									<div className='single-desc'>
										<div className='icon'>
											<BiMap className='fs-3' />
										</div>
										<div className='info mx-3'>
											<h4>{t('office-address')}:</h4>
											<p className='mb-0'>
												Burnsville, MN 55337 Streat, United States
											</p>
										</div>
									</div>
									<div className='single-desc'>
										<div className='icon'>
											<AiOutlinePhone className='fs-3' />
										</div>
										<div className='info mx-3'>
											<h4>{t('contact-number')}:</h4>
											<a href='tel:01010101010'> 01010101010</a>
										</div>
									</div>
									<div className='single-desc'>
										<div className='icon'>
											<BsEnvelope className='fs-3' />
										</div>
										<div className='info mx-3'>
											<h4>{t('mail-address')}:</h4>
											<a href='mailto:info@driller.com'> info@driller.com</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-6 my-3'>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='ratio ratio-16x9'>
					<iframe
						title='google map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55251.335640563026!2d31.223444919610298!3d30.059558098332307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1667473373148!5m2!1sen!2seg'
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</section>
			<Newsletter />
		</>
	);
}

export default ContactUs;

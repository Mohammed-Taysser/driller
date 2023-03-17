import { useTranslation } from 'react-i18next';
import { AiOutlinePlus } from 'react-icons/ai';
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaWhatsapp,
} from 'react-icons/fa';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TEAMS } from '../constants/team';

import overlay from '../assets/images/background/team-overlay.jpg';
import BGOverlay from '../assets/images/icons/service-pattern.png';

import 'swiper/css';
import 'swiper/css/autoplay';

function SingleSlide({ member = { img: '', name: '', cty: '' } }) {
	const { t } = useTranslation();

	return (
		<div className='team-card'>
			<div className='team-img'>
				<img src={member.img} alt={t(member.name).toString()} />
			</div>
			<div
				className='team-content'
				style={{
					background: `center / cover no-repeat var(--main-color) url(${BGOverlay})`,
				}}
			>
				<div className='team-social'>
					<span className='play-btn'>
						<AiOutlinePlus />
					</span>
					<div className='as-social'>
						<a
							href='http://facebook.com'
							target='_blank'
							title='facebook'
							rel='noreferrer noopener'
						>
							<FaFacebookF />
						</a>
						<a
							href='http://twitter.com'
							target='_blank'
							title='twitter'
							rel='noreferrer noopener'
						>
							<FaTwitter />
						</a>
						<a
							href='http://whatsapp.com'
							target='_blank'
							title='whatsapp'
							rel='noreferrer noopener'
						>
							<FaWhatsapp />
						</a>
						<a
							href='http://linkedin.com'
							target='_blank'
							title='linkedin'
							rel='noreferrer noopener'
						>
							<FaLinkedinIn />
						</a>
					</div>
				</div>
				<h3 className='team-title'>
					<a href='#single-team'>{t(member.name)}</a>
				</h3>
				<span className='team-cty'>{t(member.cty)}</span>
			</div>
		</div>
	);
}

function Team() {
	const { t } = useTranslation();

	return (
		<section
			className='our-team-section py-5 mb-5'
			style={{
				background: `center / cover no-repeat url(${overlay})`,
			}}
		>
			<div className='container my-5'>
				<div className='title-area text-center'>
					<div className='sub-title'>
						<div className='shape left'>
							<div className='dots'></div>
						</div>
						{t('team-member')}
						<div className='shape right'>
							<div className='dots'></div>
						</div>
					</div>
					<div className='sec-title'>{t('our-professional-team')}</div>
				</div>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={20}
					autoplay={{ delay: 5000 }}
					loop={true}
					slidesPerView={4}
					breakpoints={{
						1: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 4,
						},
					}}
				>
					{TEAMS.map((member) => (
						<SwiperSlide key={member.name}>
							<SingleSlide member={member} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Team;

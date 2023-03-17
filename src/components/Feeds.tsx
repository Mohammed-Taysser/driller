import { useTranslation } from 'react-i18next';
import { BsCalendar2Event } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { MdArrowForwardIos } from 'react-icons/md';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FEEDS } from '../constants/feed';

import overlay from '../assets/images/background/feed-overlay.png';

import 'swiper/css';
import 'swiper/css/autoplay';

function SingleSlide({ feed = { img: '', title: '', date: '', body: '' } }) {
	const { t } = useTranslation();

	return (
		<div className='blog-card'>
			<div className='blog-img'>
				<img
					src={feed.img}
					alt={feed.title}
					className='img-fluid'
					width='391'
					height='220'
				/>
			</div>
			<div className='blog-content'>
				<div className='blog-meta'>
					<span className='d-flex align-items-center'>
						<FiUser className='text-aurora fs-5' />
						<span className='mx-2'>Driller </span>
					</span>
					<span className='mx-2'>|</span>
					<span className='d-flex align-items-center'>
						<BsCalendar2Event className='text-aurora fs-5' />
						<span className='mx-2'>{feed.date}</span>
					</span>
				</div>
				<h3 className='blog-title'>
					<a href='#single-blog'>{t(feed.title)}</a>
				</h3>
				<p className='blog-text'>{t(feed.body)}</p>
				<a href='#single-blog' className='line-btn'>
					{t('read-more')}
					<MdArrowForwardIos className='fs-5 my-0 mx-2' />
				</a>
			</div>
		</div>
	);
}

function Feeds() {
	const { t } = useTranslation();

	return (
		<section
			className='feed-section py-5 mb-5'
			style={{
				background: `center / cover no-repeat url(${overlay})`,
			}}
		>
			<div className='container my-5'>
				<div className='title-area text-center mb-5'>
					<div className='sub-title'>
						<div className='shape left'>
							<div className='dots'></div>
						</div>
						{t('latest-blogs')}
						<div className='shape right'>
							<div className='dots'></div>
						</div>
					</div>
					<div className='sec-title'>{t('latest-blogs-feeds')}</div>
				</div>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={20}
					autoplay={{ delay: 5000 }}
					loop={true}
					slidesPerView={3}
					breakpoints={{
						1: {
							slidesPerView: 1,
						},
						768: {
							slidesPerView: 2,
						},
						992: {
							slidesPerView: 3,
						},
					}}
				>
					{FEEDS.map((feed) => (
						<SwiperSlide key={feed.title}>
							<SingleSlide feed={feed} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Feeds;

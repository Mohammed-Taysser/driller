import { useTranslation } from 'react-i18next';
import { BiRightArrow } from 'react-icons/bi';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import BGOverlay from '../assets/images/background/bg-hero-slider.jpg';

import slideImage1 from '../assets/images/slider/slide-1.jpg';
import slideImage2 from '../assets/images/slider/slide-2.jpg';
import slideImage3 from '../assets/images/slider/slide-3.jpg';

import 'swiper/css';
import 'swiper/css/autoplay';

function SlideNextButton() {
	const swiper = useSwiper();

	return (
		<button
			className='icon-btn'
			title='next'
			onClick={() => swiper.slideNext()}
		>
			<BiRightArrow />
		</button>
	);
}

function SingleSlide({ img = '' }) {
	const { t } = useTranslation();

	return (
		<div className='single-slide'>
			<div
				className='bg-overlay'
				style={{
					background: `center / cover no-repeat url(${BGOverlay})`,
				}}
			></div>
			<div className='row g-0 h-100 text-wrap align-items-center'>
				<div className='col-md-5 offset-md-1'>
					<div className='px-4 py-5 hero-content'>
						<h1 className='slider-title js-slider-title'>
							{t('we-help-you-build-and-develop-your-business')}
						</h1>
						<p className='lead'>
							{t(
								'we-provide-you-with-the-best-solutions-in-the-single-serve-and-machine-market'
							)}
						</p>
						<p className='mb-0'>
							{t('our-partnership-is-modular-scalable-and-customizable')}
						</p>
						<p>{t('optimum-quality-supply-reliability-italian-know-how')}</p>
						<Link className='mt-4 btn-aurora' to='/about-us'>
							{t('read-more')}
							<MdArrowForwardIos className='fs-5 my-0 mx-2' />
						</Link>
					</div>
				</div>
			</div>
			<div className='hero-image'>
				<img src={img} alt='slide' />
				<SlideNextButton />
			</div>
		</div>
	);
}

function Slider() {
	const SLIDES = [slideImage1, slideImage2, slideImage3];

	return (
		<header className='position-relative hero-slider-container'>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={50}
				autoplay={{ delay: 5000 }}
				loop={true}
			>
				{SLIDES.map((slide) => (
					<SwiperSlide key={slide}>
						<SingleSlide img={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</header>
	);
}

export default Slider;

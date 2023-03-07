import { MdArrowForwardIos } from 'react-icons/md';
import { TfiAngleRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SERVICES } from '../constants/service';

import servicePattern from '../assets/images/background/bg-service-pattern.png';
import BGOverlay from '../assets/images/icons/service-pattern.png';

import 'swiper/css';
import 'swiper/css/autoplay';

function SingleSlide({ service = { img: '', title: '', icon: '' } }) {
	return (
		<div className='nice-shadow single-slide'>
			<div className='service-image'>
				<img className='img-fluid' src={service.img} alt={service.title} />
			</div>
			<div
				className='service-content p-3'
				style={{
					background: `center / cover no-repeat var(--main-color) url(${BGOverlay})`,
				}}
			>
				<Link
					className='service-title h5 text-decoration-none'
					to='/single-service'
					title={service.title}
				>
					{service.title}
				</Link>
				<p className='service-info small mb-0 mt-2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quasi
					numquam, quod minima nam a. Autem pariatur aspernatur magnam incidunt
					voluptates
				</p>
				<div className='service-icon'>
					<img src={service.icon} alt='service-icon' />
				</div>
			</div>
			<Link className='service-btn' to='/single-service' title={service.title}>
				<TfiAngleRight className='fs-2' />
			</Link>
		</div>
	);
}

function Services() {
	return (
		<section
			className='our-services-section py-5 mb-5'
			style={{
				background: `center / cover no-repeat url(${servicePattern})`,
			}}
		>
			<div className='container my-5'>
				<div className='row justify-content-between'>
					<div className='col-auto my-3'>
						<div className='title-area'>
							<div className='sub-title'>
								Our Services
								<div className='shape right'>
									<div className='dots'></div>
								</div>
							</div>
							<div className='sec-title'>The Best Service For You</div>
						</div>
					</div>
					<div className='col-auto my-3 mb-5'>
						<Link className='btn-aurora' to='/services'>
							view all services
							<MdArrowForwardIos className='fs-5 my-0 mx-2' />
						</Link>
					</div>
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
					{SERVICES.map((service) => (
						<SwiperSlide key={service.img}>
							<SingleSlide service={service} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Services;

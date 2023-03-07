import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TESTIMONIALS } from '../constants/testimonial';

import overlay from '../assets/images/background/testimonial-overlay.jpg';

import 'swiper/css';
import 'swiper/css/autoplay';

function SingleSlide({
	member = { img: '', name: '', body: '', position: '' },
}) {
	return (
		<div className='testimonial-box'>
			<div className='box-img'>
				<img src={member.img} alt={member.name} />
			</div>
			<div className='box-content'>
				<h3 className='box-name'>{member.name}</h3>
				<span className='box-position'>{member.position}</span>
				<p className='box-text'>{member.body}</p>
			</div>
		</div>
	);
}

function Testimonials() {
	return (
		<section
			className='testimonial-section py-5'
			style={{
				background: `center / cover no-repeat url(${overlay})`,
			}}
		>
			<div className='container my-5 py-5'>
				<div className='row justify-content-end'>
					<div className='col-md-7 '>
						<div className='title-area'>
							<div className='sub-title text-white'>
								TESTIMONIALS
								<div className='shape right'>
									<div className='dots'></div>
								</div>
							</div>
							<div className='sec-title text-white'>What Our Client Say?</div>
						</div>
						<Swiper
							modules={[Autoplay]}
							spaceBetween={20}
							autoplay={{ delay: 5000 }}
							loop={true}
							slidesPerView={2}
							breakpoints={{
								1: {
									slidesPerView: 1,
								},
								500: {
									slidesPerView: 2,
								},
							}}
						>
							{TESTIMONIALS.map((member) => (
								<SwiperSlide key={member.name}>
									<SingleSlide member={member} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Testimonials;

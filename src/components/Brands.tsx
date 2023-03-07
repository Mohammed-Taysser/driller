import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BRANDS } from '../constants/brand';

import 'swiper/css';
import 'swiper/css/autoplay';

function Brands() {
	return (
		<section className='brands-section py-5'>
			<div className='container'>
				<Swiper
					modules={[Autoplay]}
					spaceBetween={20}
					autoplay={{ delay: 5000 }}
					loop={true}
					slidesPerView={5}
					breakpoints={{
						1: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						992: {
							slidesPerView: 5,
						},
					}}
				>
					{BRANDS.map((brand) => (
						<SwiperSlide key={brand.img} className='text-center'>
							<img src={brand.img} alt='brand' className='img-fluid' />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Brands;

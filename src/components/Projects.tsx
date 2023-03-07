import { HiOutlinePlus } from 'react-icons/hi';
import { MdArrowForwardIos } from 'react-icons/md';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PROJECTS } from '../constants/project';
import { Link } from 'react-router-dom';

import projectPattern from '../assets/images/background/bg-projects-pattern.png';

import 'swiper/css';
import 'swiper/css/autoplay';

function SingleSlide({ project = { img: '', title: '' } }) {
	return (
		<div className='text-center single-slide m-3'>
			<div className='project-image'>
				<img src={project.img} alt={project.title} />
			</div>
			<div className='project-content'>
				<Link
					className='project-title'
					to='/single-project'
					title={project.title}
				>
					{project.title}
				</Link>
				<Link
					className='project-icon'
					to='/single-project'
					title={project.title}
				>
					<HiOutlinePlus />
				</Link>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<section
			className='our-projects-section py-5 mt-5'
			style={{
				background: `center / cover no-repeat url(${projectPattern})`,
			}}
		>
			<div className='container my-5'>
				<div className='row justify-content-between'>
					<div className='col-auto my-3'>
						<div className='title-area'>
							<div className='sub-title'>
								PROJECT GALLERY
								<div className='shape right'>
									<div className='dots'></div>
								</div>
							</div>
							<div className='sec-title'>See Our Portfolio</div>
						</div>
					</div>
					<div className='col-auto my-3'>
						<Link className='btn-aurora' to='/projects'>
							view all projects
							<MdArrowForwardIos className='fs-5 my-0 mx-2' />
						</Link>
					</div>
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
					{PROJECTS.map((project) => (
						<SwiperSlide key={project.img}>
							<SingleSlide project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Projects;

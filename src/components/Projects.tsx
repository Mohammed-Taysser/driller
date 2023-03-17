import { HiOutlinePlus } from 'react-icons/hi';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants/project';

import projectPattern from '../assets/images/background/bg-projects-pattern.png';

import 'swiper/css';
import 'swiper/css/autoplay';

function SingleSlide({ project = { img: '', title: '' } }) {
	const { t } = useTranslation();

	return (
		<div className='text-center single-slide m-3'>
			<div className='project-image'>
				<img src={project.img} alt={t(project.title).toString()} />
			</div>
			<div className='project-content'>
				<Link
					className='project-title'
					to='/single-project'
					title={t(project.title).toString()}
				>
					{t(project.title).toString()}
				</Link>
				<Link
					className='project-icon'
					to='/single-project'
					title={t(project.title).toString()}
				>
					<HiOutlinePlus />
				</Link>
			</div>
		</div>
	);
}

function Projects() {
	const { t } = useTranslation();

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
								{t('project-gallery').toUpperCase()}
								<div className='shape right'>
									<div className='dots'></div>
								</div>
							</div>
							<div className='sec-title'>{t('see-our-portfolio')}</div>
						</div>
					</div>
					<div className='col-auto my-3'>
						<Link className='btn-aurora' to='/projects'>
							{t('view-all-projects')}
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

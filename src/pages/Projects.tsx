import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants/project';
import Banner from '../layouts/Banner';
import { useTranslation } from 'react-i18next';
import usePageTitle from '../hooks/usePageTitle';

function Projects() {
	usePageTitle('Projects');
	const { t } = useTranslation();

	return (
		<>
			<Banner title={t('projects').toString()} />
			<section className='category-page py-5 mb-5'>
				<div className='container my-5'>
					<div className='title-area text-center'>
						<div className='sub-title'>
							<div className='shape left'>
								<div className='dots'></div>
							</div>
							{t('project-gallery')}
							<div className='shape right'>
								<div className='dots'></div>
							</div>
						</div>
						<div className='sec-title'>{t('see-our-portfolio')}</div>
					</div>
					<div className='row justify-content-center align-items-center mt-5'>
						{PROJECTS.map((project) => (
							<div className='col-md-6 col-lg-4 my-3' key={project.img}>
								<div className='category-block'>
									<div className='category-image'>
										<img src={project.img} alt={t(project.title).toString()} />
									</div>
									<div className='category-content'>
										<div className='category-icon'>
											<img
												src={project.icon}
												alt={t(project.title).toString() + ' icon'}
											/>
										</div>
										<a className='h4 category-title' href='single-service.html'>
											{t(project.title)}
										</a>
										<p className='mt-2 category-text'>
											{t(
												'moertsarti-market-before-enterprise-wide-e-commerce-competently-actualize-bleeding-edge-matures'
											)}
										</p>
									</div>
									<Link
										className='btn-aurora category-btn'
										to='/single-project'
									>
										{t('read-more')}
										<MdArrowForwardIos className='fs-5 my-0 mx-2' />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;

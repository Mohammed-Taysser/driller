import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants/project';
import Banner from '../layouts/Banner';

function Projects() {
	return (
		<>
			<Banner title='Services' />
			<section className='category-page py-5 mb-5'>
				<div className='container my-5'>
					<div className='title-area text-center'>
						<div className='sub-title'>
							<div className='shape left'>
								<div className='dots'></div>
							</div>
							PROJECT GALLERY
							<div className='shape right'>
								<div className='dots'></div>
							</div>
						</div>
						<div className='sec-title'>See Our Portfolio</div>
					</div>
					<div className='row justify-content-center align-items-center mt-5'>
						{PROJECTS.map((project) => (
							<div className='col-md-6 col-lg-4 my-3' key={project.img}>
								<div className='category-block'>
									<div className='category-image'>
										<img src={project.img} alt={project.title} />
									</div>
									<div className='category-content'>
										<div className='category-icon'>
											<img src={project.icon} alt='Icon' />
										</div>
										<a className='h4 category-title' href='single-service.html'>
											Interior Developments
										</a>
										<p className='mt-2 category-text'>
											Moertsarti market before enterprise wide e-commerce.
											Competently actualize bleeding-edge matures.
										</p>
									</div>
									<Link
										className='btn-aurora category-btn'
										to='/single-project'
									>
										READ MORE
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

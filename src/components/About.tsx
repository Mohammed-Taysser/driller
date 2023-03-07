import { MdArrowForwardIos } from 'react-icons/md';
import { TfiAngleDoubleRight } from 'react-icons/tfi';
import { FEATURES } from '../constants/about';
import { Link } from 'react-router-dom';

import aboutImage from '../assets/images/background/about-us.jpg';
import aboutPattern from '../assets/images/icons/about-us-pattern.png';
import aboutShape from '../assets/images/icons/about-us-shape.svg';
import avatar from '../assets/images/icons/avatar.jpg';
import counterPattern from '../assets/images/icons/service-pattern.png';

function AboutFeatures() {
	return (
		<ul className='list-unstyled p-0 m-0 mt-4'>
			{FEATURES.map((feature) => (
				<li className='d-flex my-2 align-items-center' key={feature}>
					<TfiAngleDoubleRight className='fas fa-angle-double-right text-aurora' />
					<span className='mx-2'>{feature}</span>
				</li>
			))}
		</ul>
	);
}

function About(props: { noBtn?: boolean }) {
	return (
		<section
			className='about-us-section'
			style={{
				background: `center / cover no-repeat url(${aboutPattern})`,
			}}
		>
			<div className='container py-5'>
				<div className='row py-5'>
					<div className='col-lg-5 my-3'>
						<div className='about-image-wrapper'>
							<div className='about-image my-3'>
								<img className='img-fluid' src={aboutImage} alt='about-us' />
							</div>
							<div
								className='about-year-exp'
								style={{
									background: `center / cover no-repeat var(--main-color) url(${counterPattern})`,
								}}
							>
								<h3 className='counter-title'>
									<span className='counter-number'>24</span>
								</h3>
								<span className='counter-text'>Years Experience</span>
							</div>
							<div className='about-shape'>
								<img
									className='img-fluid'
									src={aboutShape}
									alt='about-us-shape'
								/>
							</div>
						</div>
					</div>
					<div className='col-lg-6 offset-lg-1 my-3'>
						<div className='wrapper'>
							<div className='title-area'>
								<div className='sub-title'>
									About Us
									<div className='shape right'>
										<div className='dots'></div>
									</div>
								</div>
								<div className='sec-title'>
									A Company To Change The World We're Driller Industrial.
								</div>
							</div>
							<p className='text-muted mt-4'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
								tempore odio magni ea! Debitis labore repellat, perspiciatis
								fugiat consequuntur incidunt. Dolorem, quos. Expedita, debitis
								molestiae vitae doloremque distinctio nulla accusantium!
							</p>
							<AboutFeatures />
							<hr className='my-5' />
							<div className='d-md-flex align-items-center justify-content-between'>
								{!props.noBtn && (
									<div className=''>
										<Link className='mt-3 btn-aurora' to='/about-us'>
											Read More
											<MdArrowForwardIos className='fs-5 my-0 mx-2' />
										</Link>
									</div>
								)}
								<div className='signature-box'>
									<div className='avatar'>
										<img src={avatar} alt='avatar' />
									</div>
									<div className='content'>
										<div className='signature'>
											<img
												src='https://angfuzsoft.com/wordpress/driller/wp-content/uploads/2022/11/signature.png'
												alt='signature'
											/>
										</div>
										<span className='info'>CEO, Of Company</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;

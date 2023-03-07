import { BsCheck2Circle } from 'react-icons/bs';

import overlay from '../assets/images/background/why-choose-us-overlay.png';
import image from '../assets/images/background/why-choose-us.jpg';

import mission from '../assets/images/background/features/mission.jpg';
import value from '../assets/images/background/features/value.jpg';
import vision from '../assets/images/background/features/vision.jpg';

function WhyChooseUs() {
	return (
		<section
			className='why-choose-us-section'
			style={{
				background: `center / cover no-repeat url(${overlay})`,
			}}
		>
			<div className='container py-5'>
				<div className='row py-5'>
					<div className='col-md-6 my-3'>
						<div className='wrapper'>
							<div className='title-area'>
								<div className='sub-title'>
									WHY CHOOSE US
									<div className='shape right'>
										<div className='dots'></div>
									</div>
								</div>
								<div className='sec-title'>Why Choose For Us</div>
							</div>
							<p className='text-muted lead'>
								Interactively transition performance based services vis-a-vis
								world wide ROI. Proactively network next-generation markets
								whereas. Conveniently grow resource-leveling partnerships for
								top-line.
							</p>
						</div>
						<div className='d-flex align-items-start mt-5'>
							<div
								className='nav flex-column nav-pills me-3 pe-3'
								id='v-pills-tab'
								role='tablist'
								aria-orientation='vertical'
							>
								<button
									className='nav-link fs-1 px-4 active'
									id='choose-us-mission-tab'
									data-bs-toggle='pill'
									data-bs-target='#choose-us-mission'
									type='button'
									role='tab'
									aria-controls='choose-us-mission'
									aria-selected='true'
								>
									1
								</button>
								<button
									className='nav-link fs-1 px-4'
									id='choose-us-vision-tab'
									data-bs-toggle='pill'
									data-bs-target='#choose-us-vision'
									type='button'
									role='tab'
									aria-controls='choose-us-vision'
									aria-selected='false'
								>
									2
								</button>
								<button
									className='nav-link fs-1 px-4'
									id='choose-us-value-tab'
									data-bs-toggle='pill'
									data-bs-target='#choose-us-value'
									type='button'
									role='tab'
									aria-controls='choose-us-value'
									aria-selected='false'
								>
									3
								</button>
							</div>
							<div className='tab-content' id='v-pills-tabContent'>
								<div
									className='tab-pane fade show active'
									id='choose-us-mission'
									role='tabpanel'
									aria-labelledby='choose-us-mission-tab'
								>
									<div className='single-box'>
										<h3 className='box-title'>Mission</h3>
										<p className='box-text'>
											Assertively deliver client-centered communities without
											frictionless services.
										</p>
										<div className='checklist-wrap'>
											<div className='box-img'>
												<img src={mission} alt='mission' />
											</div>
											<div className='checklist'>
												<ul>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Commercial Services </span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Residential Services</span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Industrial Services </span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Construction Service</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div
									className='tab-pane fade'
									id='choose-us-vision'
									role='tabpanel'
									aria-labelledby='choose-us-vision-tab'
								>
									<div className='single-box'>
										<h3 className='box-title'>Vision</h3>
										<p className='box-text'>
											Assertively deliver client-centered communities without
											frictionless services.
										</p>
										<div className='checklist-wrap'>
											<div className='box-img'>
												<img src={vision} alt='vision' />
											</div>
											<div className='checklist style2'>
												<ul>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Commercial Services </span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Residential Services</span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Industrial Services </span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Construction Service</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div
									className='tab-pane fade'
									id='choose-us-value'
									role='tabpanel'
									aria-labelledby='choose-us-value-tab'
								>
									<div className='single-box'>
										<h3 className='box-title'>Value</h3>
										<p className='box-text'>
											Assertively deliver client-centered communities without
											frictionless services.
										</p>
										<div className='checklist-wrap'>
											<div className='box-img'>
												<img src={value} alt='value' />
											</div>
											<div className='checklist style2'>
												<ul>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Commercial Services </span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Residential Services</span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Industrial Services </span>
													</li>
													<li>
														<BsCheck2Circle className='text-aurora fs-5' />
														<span className='mx-1'>Construction Service</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-6 my-3'>
						<img src={image} alt='why choose us' className='img-fluid' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;

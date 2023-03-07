import Banner from '../layouts/Banner';

import { BiPhone } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

import serviceInnerImage1 from '../assets/images/background/service-details-inner-1.jpg';
import serviceImage from '../assets/images/background/service-details.jpg';

function ProjectDetails() {
	return (
		<>
			<Banner title='Bridge Trangle Core' />
			<div className='category-details-page my-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 my-3'>
							<div className='single-menu-our-services'>
								<div className='title-area '>
									<div className='sub-title text-white'>
										Project Details
										<div className='shape right'>
											<div className='dots'></div>
										</div>
									</div>
								</div>
								<ul className='menu-our-services text-white'>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>Project Category</span> : Road
										Bridge
									</li>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>Clients</span> : David Malan
									</li>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>Project Date</span> : 13 June,
										2020
									</li>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>Project End Date</span> : 22
										July, 2021
									</li>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>Location</span> : NY - 2546
										Streat, USA
									</li>
									<li className=' my-3'>
										<span className='text-aurora'>Price After</span> : $1
										Million
									</li>
								</ul>
							</div>

							<div
								className='widget-with-banner mt-5'
								style={{
									background: `center / cover no-repeat url(${serviceImage})`,
								}}
							>
								<h4 className='widget-title'>Need Any Help?</h4>
								<div className='widget-banner'>
									<p className='banner-text'>
										Assertively pontificate high standards in scenarios rather
										than sustainable system. Interactively empower.
									</p>
									<a href='mailto:info@driller.com' className='banner-link'>
										<MdOutlineMail /> info@driller.com
									</a>
									<a href='tel:+19524357106' className='banner-link'>
										<BiPhone /> +1 952-435-7106
									</a>
								</div>
							</div>
						</div>
						<div className='col-lg-8 my-3'>
							<img
								src={serviceImage}
								alt='service-title'
								className='img-fluid'
							/>

							<h1 className='my-4 fw-bold'>Building Construction</h1>

							<p className='mt-3'>
								A collection of textile samples lay spread out on the table
								Samsa was travelling salesman and above it there hung a picture
								that he had recently cut out of an illustrated magazine and
								housed in a nice, gilded frame. It showed a lady fitted out with
								a fur hat and fur boa who sat upright, raising a heavy.
							</p>

							<p className='lead my-3'>
								Globally optimize highly efficient solution whereas open-source
								application. Completely strategize quality internal or 'organic'
								sources for virtual e-business. Phosfluorescently re-engineer
								enterprise markets via value-added networks. Seamlessly restore
								inexpensive e-markets vis-a-vis corporate intellectual capital.
							</p>

							<p className='lead my-3'>
								Holisticly reinvent compelling niche markets via scalable
								strategic. Authoritatively scale business meta-services before
								client-based technologies. Collaboratively strategize
								synergistic scenarios rather than flexible action items.
								Continually deliver market positioning convergence and
								mission-critical infrastructures.
							</p>

							<p className='mt-3'>
								A collection of textile samples lay spread out on the table
								Samsa was travelling salesman and above it there hung a picture
								that he had recently cut out of an illustrated magazine and
								housed in a nice, gilded frame. It showed a lady fitted out with
								a fur hat and fur boa who sat upright, raising a heavy.
							</p>

							<div className='d-md-flex'>
								<div className=''>
									<img
										src={serviceInnerImage1}
										alt='inner-1'
										className='img-fluid'
									/>
								</div>
								<div className='mx-4'>
									<h4 className='fw-bold '>Services Benefits:</h4>
									<p className='text-muted'>
										Authoritatively scale business meta-services before
										client-based technologies.
									</p>
									<ul className='list-unstyled'>
										<li className='my-1'>
											<BsCheck2Circle className='text-aurora fs-5' />
											<span className='mx-2'>Commercial Services </span>
										</li>
										<li className='my-1'>
											<BsCheck2Circle className='text-aurora fs-5' />
											<span className='mx-2'>Residential Services</span>
										</li>
										<li className='my-1'>
											<BsCheck2Circle className='text-aurora fs-5' />
											<span className='mx-2'>Industrial Services </span>
										</li>
										<li className='my-1'>
											<BsCheck2Circle className='text-aurora fs-5' />
											<span className='mx-2'>Construction Service</span>
										</li>
									</ul>
								</div>
							</div>

							<div className='title-area mt-5'>
								<div className='sub-title fs-3'>
									Work Process:
									<div className='shape right'>
										<div className='dots'></div>
									</div>
								</div>
							</div>
							<p className='mt-3'>
								A collection of textile samples lay spread out on the table
								Samsa was travelling salesman and above it there hung a picture
								that he had recently cut out of an illustrated magazine and
								housed in a nice, gilded frame. It showed a lady fitted out with
								a fur hat and fur boa who sat upright, raising a heavy.
							</p>
							<p className='mt-3'>
								A collection of textile samples lay spread out on the table
								Samsa was travelling salesman and above it there hung a picture
								that he had recently cut out of an illustrated magazine and
								housed in a nice, gilded frame. It showed a lady fitted out with
								a fur hat and fur boa who sat upright, raising a heavy.
							</p>
							<p className='lead mb-0'>
								Dynamically conceptualize vertical partnerships without
								long-term high-impact interface. Monotonectally fashion
								multimedia based leadership skill wherea scalable meta-service.
								Seamless integrate collaborative information whereas.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectDetails;

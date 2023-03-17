import { useTranslation } from 'react-i18next';
import { BiPhone } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import Banner from '../layouts/Banner';

import serviceInnerImage1 from '../assets/images/background/service-details-inner-1.jpg';
import serviceImage from '../assets/images/background/service-details.jpg';

function ProjectDetails() {
	const { t } = useTranslation();

	return (
		<>
			<Banner title={t('bridge-trangle-core').toString()} />
			<div className='category-details-page my-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4 my-3'>
							<div className='single-menu-our-services'>
								<div className='title-area '>
									<div className='sub-title text-white'>
										{t('project-details')}
										<div className='shape right'>
											<div className='dots'></div>
										</div>
									</div>
								</div>
								<ul className='menu-our-services text-white'>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>{t('project-category')}</span>{' '}
										: {t('road-bridge')}
									</li>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>{t('clients')}</span> : David
										Malan
									</li>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>{t('project-date')}</span> :
										13 June, 2020
									</li>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>{t('project-end-date')}</span>{' '}
										: 22 July, 2021
									</li>
									<li className='pb-3 border-bottom my-3'>
										<span className='text-aurora'>{t('location')}</span> : NY -
										2546 Streat, USA
									</li>
									<li className=' my-3'>
										<span className='text-aurora'>{t('price-after')}</span> : $1
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
								<h4 className='widget-title'>{t('need-any-help')}?</h4>
								<div className='widget-banner'>
									<p className='banner-text'>
										{t(
											'assertively-pontificate-high-standards-in-scenarios-rather-than-sustainable-system-interactively-empower'
										)}
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

							<h1 className='my-4 fw-bold'>{t('building-construction')}</h1>

							<p className='mt-3'>
								{t(
									'a-collection-of-textile-samples-lay-spread-out-on-the-table-samsa-was-travelling-salesman-and-above-it-there-hung-a-picture-that-he-had-recently-cut-out-of-an-illustrated-magazine-and-housed-in-a-nice-gilded-frame-it-showed-a-lady-fitted-out-with-a-fur-hat-and-fur-boa-who-sat-upright-raising-a-heavy'
								)}
							</p>

							<p className='lead my-3'>
								{t(
									'globally-optimize-highly-efficient-solution-whereas-open-source-application-completely-strategize-quality-internal-or-organic-sources-for-virtual-e-business-phosfluorescently-re-engineer-enterprise-markets-via-value-added-networks-seamlessly-restore-inexpensive-e-markets-vis-a-vis-corporate-intellectual-capital'
								)}
							</p>

							<p className='lead my-3'>
								{t(
									'holisticly-reinvent-compelling-niche-markets-via-scalable-strategic-authoritatively-scale-business-meta-services-before-client-based-technologies-collaboratively-strategize-synergistic-scenarios-rather-than-flexible-action-items-continually-deliver-market-positioning-convergence-and-mission-critical-infrastructures'
								)}
							</p>

							<p className='mt-3'>
								{t(
									'a-collection-of-textile-samples-lay-spread-out-on-the-table-samsa-was-travelling-salesman-and-above-it-there-hung-a-picture-that-he-had-recently-cut-out-of-an-illustrated-magazine-and-housed-in-a-nice-gilded-frame-it-showed-a-lady-fitted-out-with-a-fur-hat-and-fur-boa-who-sat-upright-raising-a-heavy'
								)}
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
									<h4 className='fw-bold '>{t('services-benefits')}:</h4>
									<p className='text-muted'>
										{t(
											'authoritatively-scale-business-meta-services-before-client-based-technologies'
										)}
									</p>
									<ul className='list-unstyled'>
										<li className='my-1'>
											<BsCheck2Circle className='text-aurora fs-5' />
											<span className='mx-2'>{t('commercial-services')} </span>
										</li>
										<li className='my-1'>
											<BsCheck2Circle className='text-aurora fs-5' />
											<span className='mx-2'>{t('residential-services')}</span>
										</li>
										<li className='my-1'>
											<BsCheck2Circle className='text-aurora fs-5' />
											<span className='mx-2'>{t('industrial-services')} </span>
										</li>
										<li className='my-1'>
											<BsCheck2Circle className='text-aurora fs-5' />
											<span className='mx-2'>{t('construction-service')}</span>
										</li>
									</ul>
								</div>
							</div>

							<div className='title-area mt-5'>
								<div className='sub-title fs-3'>
									{t('work-process')}
									<div className='shape right'>
										<div className='dots'></div>
									</div>
								</div>
							</div>
							<p className='mt-3'>
								{t(
									'a-collection-of-textile-samples-lay-spread-out-on-the-table-samsa-was-travelling-salesman-and-above-it-there-hung-a-picture-that-he-had-recently-cut-out-of-an-illustrated-magazine-and-housed-in-a-nice-gilded-frame-it-showed-a-lady-fitted-out-with-a-fur-hat-and-fur-boa-who-sat-upright-raising-a-heavy'
								)}
							</p>
							<p className='mt-3'>
								{t(
									'a-collection-of-textile-samples-lay-spread-out-on-the-table-samsa-was-travelling-salesman-and-above-it-there-hung-a-picture-that-he-had-recently-cut-out-of-an-illustrated-magazine-and-housed-in-a-nice-gilded-frame-it-showed-a-lady-fitted-out-with-a-fur-hat-and-fur-boa-who-sat-upright-raising-a-heavy'
								)}
							</p>
							<p className='lead mb-0'>
								{t(
									'dynamically-conceptualize-vertical-partnerships-without-long-term-high-impact-interface-monotonectally-fashion-multimedia-based-leadership-skill-wherea-scalable-meta-service-seamless-integrate-collaborative-information-whereas'
								)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectDetails;

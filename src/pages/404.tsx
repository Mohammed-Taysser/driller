import { Link } from 'react-router-dom';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { useTranslation } from 'react-i18next';
import usePageTitle from '../hooks/usePageTitle';

import PageNotFoundImage from '../assets/images/background/404-page.svg';

function PageNotFound() {
	const { t } = useTranslation();
	usePageTitle('Page Not Found');

	return (
		<div className='page-not-found-page my-5 py-5'>
			<div className='row h-100 g-0 align-items-center justify-content-center'>
				<div className='col-md-4 text-center'>
					<img src={PageNotFoundImage} alt='404 page' className='img-fluid' />
					<h2 className='h4 my-5'>{t('404-oops')}</h2>
					<h3 className='small text-muted'>{t('404-not-found')}</h3>
					<Link to='/' className='btn btn-aurora mt-5'>
						<VscArrowSmallLeft className='h3 m-0' />
						{t('take-me-home')}
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PageNotFound;

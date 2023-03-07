import { Link } from 'react-router-dom';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import PageNotFoundImage from '../assets/images/background/404-page.svg';

function PageNotFound() {
	return (
		<div className='page-not-found-page my-5 py-5'>
			<div className='row h-100 g-0 align-items-center justify-content-center'>
				<div className='col-md-4 text-center'>
					<img src={PageNotFoundImage} alt='404 page' className='img-fluid' />
					<h2 className='h4 my-5'>Oops… You just found an error page</h2>
					<h3 className='small text-muted'>
						We are sorry but the page you are looking for was not found
					</h3>
					<Link to='/' className='btn btn-aurora mt-5'>
						<VscArrowSmallLeft className='h3 m-0' />
						Take me home
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PageNotFound;

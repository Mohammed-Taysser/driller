import { Link } from 'react-router-dom';
import bannerImage from '../assets/images/background/banner.jpg';

function Banner({ title = 'banner' }) {
	return (
		<div
			className='banner first-section'
			style={{
				background: `#eee center / cover no-repeat url(${bannerImage})`,
			}}
		>
			<div className='text-center d-flex h-100 align-items-center justify-content-center'>
				<div className='wrapper'>
					<h1 className='display-3'>{title}</h1>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<Link className='text-white' to='/'>
									Home
								</Link>
							</li>
							<li className='breadcrumb-item active'>{title}</li>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Banner;

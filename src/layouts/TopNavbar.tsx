import React from 'react';
import { BsEnvelope, BsGlobe, BsTelephone } from 'react-icons/bs';
import { LANGUAGES, SOCIAL_MEDIA } from '../constants/navbar';

const NavbarLanguages = () => {
	return (
		<>
			{LANGUAGES.map((lang) => (
				<li key={lang.title}>
					<a
						className={`dropdown-item ${lang.rtl ? 'arabic-font' : ''}`}
						href={`#${lang.title}`}
					>
						{lang.title}
					</a>
				</li>
			))}
		</>
	);
};

function NavbarSocialMedia() {
	return (
		<div className='navbar-top-social'>
			{SOCIAL_MEDIA.map((link) => (
				<a href={`#${link.title}`} title={link.title} key={link.title}>
					<link.icon />
				</a>
			))}
		</div>
	);
}

function TopNavbar() {
	return (
		<div className='navbar-top'>
			<div className='container'>
				<div className='navbar-top-inner'>
					<div className='row justify-content-center justify-content-md-between align-items-center gy-2'>
						<div className='col-auto'>
							<div className='navbar-top-links'>
								<ul className='list-unstyled mb-0 p-0'>
									<li>
										<BsTelephone className='icon' />
										<a className='mx-2' href='tel:+19524357106'>
											19524357106
										</a>
									</li>
									<li>
										<BsEnvelope className='icon' />
										<a className='mx-2' href='mailto:info@driller.com'>
											info@driller.com
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-auto'>
							<div className='navbar-top-links'>
								<ul className='list-unstyled mb-0'>
									<li>
										<div className='dropdown language-dropdown'>
											<div
												className='dropdown-toggle cursor-pointer'
												id='navbar-languages'
												data-bs-toggle='dropdown'
											>
												<BsGlobe />
											</div>
											<ul
												className='dropdown-menu'
												aria-labelledby='navbar-languages'
											>
												<NavbarLanguages />
											</ul>
										</div>
									</li>
									<li>
										<NavbarSocialMedia />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopNavbar;

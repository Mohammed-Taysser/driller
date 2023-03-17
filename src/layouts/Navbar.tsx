import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import SearchPopup from './SearchPopup';
import TopNavbar from './TopNavbar';

import favicon from '../assets/images/icons/favicon.svg';

function StickyNavbar(props: StickyNavbarProps) {
	return (
		<div className='stick-navbar'>
			<div className='stick-navbar-inner'>
				<div className='container'>
					<div className='row align-items-center justify-content-between'>
						<div className='col-auto'>
							<div className='favicon'>
								<Link to='/'>
									<img src={favicon} alt='website favicon' />
								</Link>
							</div>
						</div>
						<div className='col-auto'>
							<svg
								className='humbugger-svg  ham-4 d-lg-none'
								viewBox='0 0 100 100'
								width='80'
								ref={props.navbarHumbugger}
								onClick={props.toggleMobileNavigation}
							>
								<path
									className='line top'
									d='m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20'
								/>
								<path className='line middle' d='m 70,50 h -40' />
								<path
									className='line bottom'
									d='m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20'
								/>
							</svg>
							<div className='row align-items-center'>
								<div className='col-auto'>
									<div className='main-menu d-none d-lg-inline-block'>
										<ul className='list-unstyled mb-0'>
											<li>
												<Link to='/'>Home</Link>
											</li>
											<li>
												<Link to='/about-us'>About Us</Link>
											</li>
											<li className='menu-item-has-children'>
												<Link to='/services'>Services</Link>
												<ul className='sub-menu'>
													<li>
														<Link to='/single-service'>Service Title</Link>
													</li>
													<li>
														<Link to='/single-service'>Service Title</Link>
													</li>
													<li>
														<Link to='/single-service'>Service Title</Link>
													</li>
												</ul>
											</li>
											<li className='menu-item-has-children'>
												<Link to='/projects'>Projects</Link>
												<ul className='sub-menu'>
													<li>
														<Link to='/single-project'>Project Title</Link>
													</li>
													<li>
														<Link to='/single-project'>Project Title</Link>
													</li>
													<li>
														<Link to='/single-project'>Project Title</Link>
													</li>
												</ul>
											</li>
											<li>
												<Link to='/contact-us'>Contact Us</Link>
											</li>
											<li>
												<a
													className='js-search-bar-toggle'
													onClick={props.onSearchBtnClick}
													href='#search'
													title='search'
												>
													<BsSearch className='fas fa-search text-white cursor-pointer' />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Navbar() {
	const navbarHumbugger = useRef<SVGSVGElement>(null);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	const popupSearchBoxRef = useRef<HTMLDivElement>(null);
	const popupFormInputRef = useRef<HTMLInputElement>(null);
	const popupSubmitBtnRef = useRef<HTMLButtonElement>(null);
	const popupSearchFormRef = useRef<HTMLFormElement>(null);

	const toggleMobileNavigation = () => {
		navbarHumbugger.current?.classList.toggle('active');
		mobileMenuRef.current?.classList.toggle('open');
	};

	const onSearchBtnClick = (
		evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		evt.stopPropagation();
		evt.preventDefault();
		popupSearchBoxRef.current?.classList.add('show');
		popupFormInputRef?.current?.focus();
	};

	return (
		<>
			<TopNavbar />
			<StickyNavbar
				navbarHumbugger={navbarHumbugger}
				toggleMobileNavigation={toggleMobileNavigation}
				onSearchBtnClick={onSearchBtnClick}
			/>
			<SearchPopup
				formInputRef={popupFormInputRef}
				submitBtnRef={popupSubmitBtnRef}
				searchFormRef={popupSearchFormRef}
				searchBoxRef={popupSearchBoxRef}
			/>
			<MobileNavbar
				menuRef={mobileMenuRef}
				navbarHumbuggerRef={navbarHumbugger}
				toggleMobileNavigation={toggleMobileNavigation}
				onSearchBtnClick={onSearchBtnClick}
			/>
		</>
	);
}

export default Navbar;

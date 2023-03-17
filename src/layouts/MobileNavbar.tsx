import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { FaAngleDown, FaAngleRight, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import favicon from '../assets/images/icons/favicon.svg';

const LinkWithMenu = (props: LinkWithMenuProps) => {
	const [isClick, setIsClick] = useState(false);
	const [maxHeight, setMaxHeight] = useState('unset');
	const ulRef = useRef<HTMLUListElement>(null);

	const onExpandBtnClick = () => {
		setIsClick((prev) => !prev);
		setMaxHeight(ulRef?.current?.scrollHeight + 'px');
	};

	return (
		<li className='has-children'>
			<button className='expand-menu' onClick={onExpandBtnClick} title='expand'>
				{isClick ? <AiOutlineMinus /> : <AiOutlinePlus />}
			</button>
			<Link to={props.path}>
				{isClick ? (
					<FaAngleDown className='mx-2' />
				) : (
					<FaAngleRight className='mx-2' />
				)}
				{props.title}
			</Link>
			<ul
				className='sub-menu'
				style={{ maxHeight: isClick ? maxHeight : 0 }}
				ref={ulRef}
			>
				{props.items.map((item, index) => (
					<li key={index}>
						<Link to={item.path}>{item.title}</Link>
					</li>
				))}
			</ul>
		</li>
	);
};

function MobileNavbar(props: MobileNavbarProps) {
	useEffect(() => {
		document.addEventListener('click', (event) => {
			if (event.target !== props.navbarHumbuggerRef?.current) {
				if (props.menuRef?.current?.classList.contains('open')) {
					props.menuRef?.current?.classList.remove('open');
					props.navbarHumbuggerRef?.current?.classList.remove('active');
				}
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onMobileNavigationClick = (evt: React.MouseEvent<HTMLDivElement>) => {
		evt.stopPropagation();
	};

	return (
		<div className='mobile-navigation-menu-wrapper' ref={props.menuRef}>
			<div
				className='mobile-navigation-menu'
				role='button'
				tabIndex={0}
				onKeyDown={() => {}}
				onClick={onMobileNavigationClick}
			>
				<button
					className='mobile-menu-toggle'
					title='toggle navigation'
					type='button'
					onClick={props.toggleMobileNavigation}
				>
					<FaTimes />
				</button>
				<div className='mobile-logo'>
					<a href='index.html'>
						<img
							className='img-fluid'
							src={favicon}
							alt='website favicon'
							width='180'
						/>
					</a>
				</div>
				<div className='mobile-menu' id='js-mobile-menu'>
					<ul>
						<li>
							<Link to='/'>
								<FaAngleRight className='mx-2' />
								Home
							</Link>
						</li>
						<li>
							<Link to='/about-us'>
								<FaAngleRight className='mx-2' />
								About Us
							</Link>
						</li>
						<li>
							<Link to='/contact-us'>
								<FaAngleRight className='mx-2' />
								Contact Us
							</Link>
						</li>

						<LinkWithMenu
							path='/services'
							title='Services'
							items={[
								{ path: '/single-service', title: 'Service Title' },
								{ path: '/single-service', title: 'Service Title' },
								{ path: '/single-service', title: 'Service Title' },
							]}
						/>
						<LinkWithMenu
							path='/projects'
							title='Projects'
							items={[
								{ path: '/single-project', title: 'Project Title' },
								{ path: '/single-project', title: 'Project Title' },
								{ path: '/single-project', title: 'Project Title' },
							]}
						/>

						<li>
							<a onClick={props.onSearchBtnClick} href='#search' title='search'>
								<FaAngleRight className='mx-2' />
								Search
								<BsSearch className='fas fa-search cursor-pointer mx-2' />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MobileNavbar;

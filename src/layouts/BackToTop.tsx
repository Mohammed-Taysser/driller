import { useEffect, useRef, useState } from 'react';
import { TbTriangle } from 'react-icons/tb';

function BackToTop() {
	const btnRef = useRef(null);
	const [display, setDisplay] = useState('none');

	useEffect(() => {
		onWindowScroll();

		window.onscroll = onWindowScroll;
	}, []);

	const onWindowScroll = () => {
		if (
			document.body.scrollTop > 700 ||
			document.documentElement.scrollTop > 700
		) {
			setDisplay('block');
		} else {
			setDisplay('none');
		}
	};

	const onBtnClick = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		evt.preventDefault();
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<a
			className={`back-to-top d-${display}`}
			ref={btnRef}
			href='#go-to-top'
			title='go-to-top'
			onClick={onBtnClick}
		>
			<TbTriangle />
		</a>
	);
}

export default BackToTop;

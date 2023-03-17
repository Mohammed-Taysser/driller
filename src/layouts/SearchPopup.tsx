import React, { useEffect } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function SearchPopup(props: SearchPopupProps) {
	const navigateTo = useNavigate();

	useEffect(() => {
		document.addEventListener('click', (event) => {
			if (
				event.target !== props.searchFormRef?.current &&
				event.target !== props.formInputRef?.current &&
				event.target !== props.submitBtnRef?.current
			) {
				if (props.searchBoxRef?.current?.classList.contains('show')) {
					props.searchBoxRef?.current?.classList.remove('show');
				}
			}
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		navigateTo('/results');
	};

	return (
		<div className='popup-search-box' ref={props.searchBoxRef}>
			<button className='searchClose' type='button' title='close'>
				<MdOutlineClose />
			</button>
			<form id='js-popup-search-form' onSubmit={onFormSubmit}>
				<input
					type='text'
					placeholder='What are you looking for?'
					name='query'
					ref={props.formInputRef}
				/>
				<button type='submit' ref={props.submitBtnRef} title='search'>
					<BiSearchAlt />
				</button>
			</form>
		</div>
	);
}

export default SearchPopup;

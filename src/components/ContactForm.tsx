import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function ContactForm() {
	return (
		<div className='quote-form-wrapper'>
			<form action='#'>
				<div className='row'>
					<div className='form-group col-md-6'>
						<input
							className='form-control'
							type='text'
							name='name'
							placeholder='Your Name'
						/>
						<i className='far fa-user'></i>
					</div>
					<div className='form-group col-md-6'>
						<input
							className='form-control'
							type='email'
							name='email'
							placeholder='Email Address'
						/>
						<i className='far fa-envelope'></i>
					</div>
					<div className='form-group col-md-6'>
						<input
							className='form-control'
							type='tel'
							name='number'
							placeholder='Phone Number'
						/>
						<i className='fa fa-phone'></i>
					</div>
					<div className='form-group col-md-6'>
						<input
							className='form-control'
							type='text'
							name='subject'
							placeholder='Subject'
						/>
						<i className='fas fa-inbox'></i>
					</div>
					<div className='form-group col-12'>
						<textarea
							className='form-control'
							name='message'
							cols={30}
							rows={3}
							placeholder='Your Message'
						></textarea>
						<i className='far fa-comment'></i>
					</div>
					<div className='form-btn col-12'>
						<button className='btn-aurora w-100'>
							SUBMIT REQUEST
							<BsFillCheckCircleFill className='mx-2' />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;

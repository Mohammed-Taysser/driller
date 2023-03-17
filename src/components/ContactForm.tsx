import { useTranslation } from 'react-i18next';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function ContactForm() {
	const { t } = useTranslation();

	return (
		<div className='quote-form-wrapper'>
			<form action='#'>
				<div className='row'>
					<div className='form-group col-md-6'>
						<input
							className='form-control'
							type='text'
							name='name'
							placeholder={t('enter-name').toString()}
						/>
						<i className='far fa-user'></i>
					</div>
					<div className='form-group col-md-6'>
						<input
							className='form-control'
							type='email'
							name='email'
							placeholder={t('enter-email').toString()}
						/>
						<i className='far fa-envelope'></i>
					</div>
					<div className='form-group col-md-6'>
						<input
							className='form-control'
							type='tel'
							name='number'
							placeholder={t('enter-phone').toString()}
						/>
						<i className='fa fa-phone'></i>
					</div>
					<div className='form-group col-md-6'>
						<input
							className='form-control'
							type='text'
							name='subject'
							placeholder={t('enter-subject').toString()}
						/>
						<i className='fas fa-inbox'></i>
					</div>
					<div className='form-group col-12'>
						<textarea
							className='form-control'
							name='message'
							cols={30}
							rows={3}
							placeholder={t('enter-message').toString()}
						></textarea>
						<i className='far fa-comment'></i>
					</div>
					<div className='form-btn col-12'>
						<button className='btn-aurora w-100'>
							{t('submit-request').toString().toUpperCase()}
							<BsFillCheckCircleFill className='mx-2' />
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;

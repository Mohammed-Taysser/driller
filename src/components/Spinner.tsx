import { useTranslation } from 'react-i18next';

function Spinner() {
	const { t } = useTranslation();

	return (
		<div className='spinner-border border-aurora' role='status'>
			<span className='visually-hidden'>{t('loading')}...</span>
		</div>
	);
}

export default Spinner;

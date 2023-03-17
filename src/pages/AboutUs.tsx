import { useTranslation } from 'react-i18next';
import About from '../components/About';
import Brands from '../components/Brands';
import Counter from '../components/Counter';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Banner from '../layouts/Banner';

function AboutUs() {
	const { t } = useTranslation();

	return (
		<>
			<Banner title={t('about-us').toString()} />
			<About noBtn={true} />
			<Counter />
			<WhyChooseUs />
			<Team />
			<Testimonials />
			<Brands />
		</>
	);
}

export default AboutUs;

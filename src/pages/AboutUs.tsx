import About from '../components/About';
import Brands from '../components/Brands';
import Counter from '../components/Counter';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Banner from '../layouts/Banner';

function AboutUs() {
	return (
		<>
			<Banner title='About Us' />
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
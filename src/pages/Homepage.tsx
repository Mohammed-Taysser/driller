import About from '../components/About';
import Brands from '../components/Brands';
import Counter from '../components/Counter';
import Feeds from '../components/Feeds';
import HowWeWork from '../components/HowWeWork';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/homepage/Contact';

function Homepage() {
	return (
		<div className=''>
			<Slider />
			<About />
			<HowWeWork />
			<Services />
			<Projects />
			<WhyChooseUs />
			<Counter />
			<Team />
			<Testimonials />
			<Contact />
			<Feeds />
			<Brands />
		</div>
	);
}

export default Homepage;

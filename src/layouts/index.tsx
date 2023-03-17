import { Outlet } from 'react-router-dom';
import BackToTop from './BackToTop';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
	return (
		<>
			<Navbar />
			<BackToTop />
			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;

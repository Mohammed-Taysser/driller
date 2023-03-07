import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import ErrorBoundary from './ErrorBoundary';
import '../assets/scss/core.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		document.body.classList.remove('load');
	}, []);

	return (
		<ErrorBoundary>
			<BrowserRouter>
				<MainRoutes />
			</BrowserRouter>
		</ErrorBoundary>
	);
}

export default App;

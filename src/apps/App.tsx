import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import MainRoutes from './routes';
import ErrorBoundary from './ErrorBoundary';
import {I18nContextProvider} from '../context/i18n'

import './i18n';

import 'bootstrap/dist/js/bootstrap.bundle';
import '../assets/scss/core.scss';

function App() {
	useEffect(() => {
		document.body.classList.remove('load');
	}, []);

	return (
		<ErrorBoundary>
			<I18nContextProvider>
				<BrowserRouter>
					<MainRoutes />
				</BrowserRouter>
			</I18nContextProvider>
		</ErrorBoundary>
	);
}

export default App;

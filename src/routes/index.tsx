import { createBrowserRouter } from 'react-router-dom';

import App from '../pages/App';
import Login from '../pages/Login';
import AuthGuard from './AuthGuard';

const router = createBrowserRouter([
	{
		path: '/login',
		element: (
			<AuthGuard>
				<Login />
			</AuthGuard>
		),
	},
	{
		path: '/',
		element: (
			<AuthGuard>
				<App />
			</AuthGuard>
		),
	},
]);

export default router;

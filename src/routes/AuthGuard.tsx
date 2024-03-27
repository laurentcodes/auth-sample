/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import authStore from '../store';
import Login from '../pages/Login';

const AuthGuard = ({ children }: { children: ReactNode }) => {
	const authenticated = authStore((state) => state.authenticated);

	const { pathname } = useLocation();

	const [requestedLocation, setRequestedLocation] = useState<string>('');

	if (!authenticated) {
		if (pathname !== requestedLocation) {
			setRequestedLocation(pathname);
		}

		return <Login />;
	}

	if (requestedLocation && pathname !== requestedLocation) {
		setRequestedLocation('');

		return <Navigate to={requestedLocation} />;
	}

	if (pathname === '/login') {
		return <Navigate to='/' />;
	}

	return <>{children}</>;
};

export default AuthGuard;

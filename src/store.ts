/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand';
import { clearCookie, getCookie, setCookie } from './utils/cookies';

interface AuthState {
	authenticated: boolean;
	user: { email: string; password: string };
	login: (user: any) => void;
	logout: () => void;
}

const authStore = create<AuthState>()((set) => ({
	authenticated: !!getCookie('authenticated'),
	user: JSON.parse(getCookie('user') || '""') || null,
	login: (state) => {
		set(() => ({
			isAuthenticated: true,
			user: state.data,
		}));

		setCookie('authenticated', 'true', 3600 * 6);
		setCookie('user', JSON.stringify(state.data), 3600 * 6);

		location.href = '/';
	},
	logout: () => {
		set(() => ({
			authenticated: false,
			// user: null,
		}));

		clearCookie('authenticated');
		clearCookie('user');

		location.href = '/';
	},
}));

export default authStore;

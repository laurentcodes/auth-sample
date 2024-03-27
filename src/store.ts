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

		setCookie('authenticated', 'true', 60);
		setCookie('user', JSON.stringify(state.data), 60);

		location.href = '/';
	},
	logout: () => {
		clearCookie('authenticated');
		clearCookie('user');

		location.href = '/';
	},
}));

export default authStore;

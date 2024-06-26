/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import authStore from '../store';

const Login = () => {
	const login = authStore((state) => state.login);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmit = (e: any) => {
		e.preventDefault();

		const data = { email, password };

		login({ data });
	};

	return (
		<form className='w-screen md:w-96 p-5 md:p-0 md:mt-12' onSubmit={onSubmit}>
			<h3 className='font-bold text-3xl my-6'>Login</h3>

			<div className='mb-6 w-full'>
				<label
					htmlFor='email'
					className='block mb-2 text-sm font-medium text-gray-900 '
				>
					Email
				</label>
				<input
					type='email'
					id='email'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600 block w-full p-2.5'
					placeholder='Enter Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div className='mb-6 w-full'>
				<label
					htmlFor='password'
					className='block mb-2 text-sm font-medium text-gray-900 '
				>
					Password
				</label>
				<input
					type='password'
					id='password'
					className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-600 block w-full p-2.5'
					placeholder='Enter Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
			</div>

			<button className='bg-[#1d2d44] w-full p-2 text-white rounded-lg'>
				Login
			</button>
		</form>
	);
};

export default Login;

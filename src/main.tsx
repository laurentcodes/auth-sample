import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider } from 'react-router-dom';

import router from './routes/index.tsx';
import Navbar from './components/Navbar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<div className='h-screen'>
			<Navbar />

			<section className='p-8 flex justify-center items-center'>
				<RouterProvider router={router} />
			</section>
		</div>
	</React.StrictMode>
);

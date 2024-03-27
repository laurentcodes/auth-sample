import authStore from '../store';

const Navbar = () => {
	const authenticated = authStore((state) => state.authenticated);
	const user = authStore((state) => state.user);
	const logout = authStore((state) => state.logout);

	return (
		<header className='flex justify-center items-center p-6 bg-[#1d2d44] text-white flex-col md:flex-row md:justify-between'>
			<h2 className='text-2xl'>Authentication Sample</h2>

			{authenticated && (
				<div className='flex gap-6'>
					<p>{user.email}</p>

					<p className='cursor-pointer' onClick={logout}>
						Logout
					</p>
				</div>
			)}
		</header>
	);
};

export default Navbar;

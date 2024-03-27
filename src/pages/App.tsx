const App = () => {
	return (
		<div>
			<h3 className='text-2xl font-bold text-center mb-12'>
				This is the App Main Page
			</h3>

			<div>
				<h3 className='text-2xl font-bold mb-3'>Considerations:</h3>
				<ul className='list-decimal'>
					<li>Zustand for State Management</li>
					<li>Auth State and User Info Saved as Cookies</li>
					<li>
						An Auth Guard is Used to Verify Authentication and Route Accordingly
					</li>
					<li>Tailwind Used for Styling</li>
					<li>Cookie Utility File to Manage Cookies</li>
				</ul>
			</div>
		</div>
	);
};

export default App;

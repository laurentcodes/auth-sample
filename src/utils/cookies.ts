// Function to set a cookie
export const setCookie = (
	name: string,
	value: string,
	expiresInSeconds: number
) => {
	const expirationTime = new Date().getTime() + expiresInSeconds * 1000;
	const expirationDate = new Date(expirationTime);

	// Convert the expirationDate to a UTC string
	const expires = `expires=${expirationDate.toUTCString()}`;

	// Create the cookie string
	const cookieString = `${name}=${value}; ${expires}; path=/`;

	// Set the cookie
	document.cookie = cookieString;
};

// Function to get a cookie by name
export const getCookie = (name: string) => {
	const cookieString = decodeURIComponent(document.cookie);
	const cookieArray = cookieString.split(';');

	// eslint-disable-next-line no-plusplus
	for (let i = 0; i < cookieArray.length; i++) {
		const cookie = cookieArray[i].trim();
		// Check if the cookie starts with the desired name
		if (cookie.startsWith(`${name}=`)) {
			// Extract and return the cookie's value
			return cookie.substring(name.length + 1);
		}
	}

	// Return null if the cookie is not found
	return null;
};

// Function to clear a cookie by setting its expiration to the past
export const clearCookie = (name: string) => {
	const cookieString = `${name}=; Max-Age=${0}; path=/;`;

	// Set the cookie with an expired date
	document.cookie = cookieString;
};

import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	if (!url.searchParams.has('code')) {
		return {};
	}

	
	const response = await fetch(
		`${env.AUTH_URL || 'https://authmensa.luminos.dev'}/.well-known/openid-configuration`
	);
	const authEndpoints = await response.json();
	const tokenBody = new URLSearchParams();
	tokenBody.append('grant_type', 'authorization_code');
	tokenBody.append('client_id', env.CLIENT_ID || '212205468813164598@website');
	tokenBody.append(
		'client_secret',
		env.CLIENT_SECRET || 'ZhTynXTX2q5onLbwS0qhyFvh8LymZkw4ZyhQ71K7XE7mQfEZDLvMNP7wZShkLHEP'
	);
	tokenBody.append('redirect_uri', `${env.BASE_URL || 'http://localhost:5173'}/auth/redirect`);
	tokenBody.append('code', url.searchParams.get('code') || '');

	const tokenResponse = await fetch(authEndpoints.token_endpoint, {
		method: 'POST',
		body: tokenBody,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	const token = await tokenResponse.json();

	const userResponse = await fetch(authEndpoints.userinfo_endpoint, {
		headers: {
			Authorization: `Bearer ${token.access_token}`
		}
	});
	const userData = await userResponse.json();

	return {
		token: token,
		user_data: userData
	};
}

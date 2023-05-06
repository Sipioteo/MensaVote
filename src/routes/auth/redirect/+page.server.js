/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	if (!url.searchParams.has('code')) {
		return {};
	}

	let tokenUrl = 'https://authmensa.luminos.dev/oauth/v2/token';
	let tokenBody = new URLSearchParams();
	tokenBody.append('grant_type', 'authorization_code');
	tokenBody.append('client_id', '212205468813164598@website');
	tokenBody.append(
		'client_secret',
		'ZhTynXTX2q5onLbwS0qhyFvh8LymZkw4ZyhQ71K7XE7mQfEZDLvMNP7wZShkLHEP'
	);
	tokenBody.append('redirect_uri', 'http://localhost:5173/auth/redirect');
	tokenBody.append('code', url.searchParams.get('code') || '');

	let tokenResponse = await fetch(tokenUrl, {
		method: 'POST',
		body: tokenBody,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	let token = await tokenResponse.json();

	let userResponse = await fetch('https://authmensa.luminos.dev/oidc/v1/userinfo', {
		headers: {
			Authorization: `Bearer ${token.access_token}`
		}
	});
	let userData = await userResponse.json();

	return {
		token: token,
		user_data: userData
	};
}

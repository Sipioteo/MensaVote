import memoize from 'fast-memoize';

const _getAuthUrl = memoize(async () => {
	const issuer = 'https://authmensa.luminos.dev';
	const clientId = '212205468813164598@website';
	const redirectUri = 'https://votemensa.luminos.dev/auth/redirect';
	const scope = 'openid profile email offline_access';
	const responseType = 'code';
	const wellKnownConfig = await fetch(`${issuer}/.well-known/openid-configuration`);
	const wellKnownConfigJson = await wellKnownConfig.json();
	const authorizationEndpoint = wellKnownConfigJson.authorization_endpoint;
	const state = '{{state}}';
	return `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&state=${state}`;
});

export async function getAuthUrl() {
	let authUrl = await _getAuthUrl();
	const state =
		Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	authUrl = authUrl.replace('{{state}}', state);
	return authUrl;
}

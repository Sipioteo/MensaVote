// @ts-nocheck
import { browser } from '$app/environment';
import { get, writable } from 'svelte/store';

function __auth() {
	let authData = {};
	if (browser) {
		authData = JSON.parse(localStorage.getItem('auth') || '{}') || authData;
	}
	const auth = writable(authData);

	if (browser) {
		auth.subscribe((value) => localStorage.setItem('auth', JSON.stringify(value)));
	}

	return {
		subscribe: auth.subscribe,
		set: auth.set,
		update: auth.update,
		get: () => get(auth),
		getUser: () => get(auth).user_data || {},
		getToken: () => get(auth).token || {},
		isLoggedIn: () => !!get(auth).token,
	};
}

export const auth = __auth();

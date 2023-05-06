<script>
	import { onMount } from 'svelte';
	import Button, { Label } from '@smui/button';
	import { InitialFocus } from '@smui/dialog';
	import { auth } from '../store.js';
	let authUrl = '';

	onMount(async () => {
		const issuer = 'https://authmensa.luminos.dev';
		const clientId = '212205468813164598@website';
		const redirectUri = 'https://votemensa.luminos.dev/auth/redirect';
		const scope = 'openid profile email offline_access';
		const responseType = 'code';
		const wellKnownConfig = await fetch(`${issuer}/.well-known/openid-configuration`);
		const wellKnownConfigJson = await wellKnownConfig.json();
		const authorizationEndpoint = wellKnownConfigJson.authorization_endpoint;
		const state =
			Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
		authUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}&state=${state}`;
	});

	function openUrl() {
		window.open(authUrl, '_self');
	}
</script>

{#if auth.getUser().sub == undefined && authUrl != ''}
	<Button on:click={openUrl} defaultAction use={[InitialFocus]}>
		<Label>LOGIN</Label>
	</Button>
{/if}

{#if auth.getUser().sub != undefined}
	<div class="flex-row align-items-center justify-content-center profile-chip d-none d-md-flex">
		<div class="me-2">
			<p class="p-0 m-0 fw-medium text-end">
				{auth.getUser().name}
			</p>
			<p class="p-0 m-0 fw-light text-end" style="font-size: 0.7em;">{auth.getUser().email}</p>
		</div>
		<img src={auth.getUser().picture} alt="user_image" class="userImage" />
	</div>
	<div class="d-flex d-md-none">
		<img src={auth.getUser().picture} alt="user_image" class="userImage" />
	</div>
{/if}

<style>
	.userImage {
		border-radius: 50%;
		width: 45px;
		height: 45px;
		border: 3px solid rgba(21, 78, 162, 1);
	}

	.profile-chip {
		border-radius: 50px;
		height: 100%;
		padding-left: 20px;
		max-height: 45px;
	}
</style>

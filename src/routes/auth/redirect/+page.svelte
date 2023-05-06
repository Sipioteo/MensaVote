<script>
	import { onMount } from 'svelte';
	import { auth } from '../../../store.js';
	import CircularProgress from '@smui/circular-progress';

	/** @type {import('./$types').PageData} */
	export let data;

	onMount(() => {
		if (window) {
			if (data.token && data.token.access_token) {
				auth.set(data);
			}
			window.location.href = '/';
		}
	});
</script>

<div class="d-flex flex-column gap-2 pt-3 pb-5 align-items-center justify-content-center vh-100">
	<img src="/headline.png" alt="Mensa Vote" class="logo_img" />
	<CircularProgress style="height: 32px; width: 32px;" indeterminate />
</div>

<style>
	:global(body) {
		background-color: #154ea2;
		color: white;
	}

	:global(a) {
		color: white;
	}

	.logo_img {
		width: 150px;
	}
</style>

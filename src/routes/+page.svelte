<script>
	// @ts-nocheck

	import Button, { Label } from '@smui/button';
	import Voteline from '../components/Voteline.svelte';
	import AuthButton from '../components/AuthButton.svelte';
	import TopAppBar, { Row, Section } from '@smui/top-app-bar';
	import { auth } from '../store';
	import { onMount } from 'svelte';

	let polls = [];
	
	onMount(async () => {
		const res = await fetch('/api/poll');
		polls = await res.json();
	});

	function addPoll() {
		fetch('/api/poll', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: 'Test'
			})
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				polls = data;
			});
	}
</script>

<div>
	<div class="fix-on-top">
		<TopAppBar variant="static" dense={true} color={'primary'}>
			<Row>
				<Section>
					<img src="/headline.png" alt="Mensa Vote" class="logo_img" />
				</Section>
				<Section align="end" toolbar>
					{#if auth.isLoggedIn()}
						<div class="d-none d-md-flex flex-row">
							<Button on:click={addPoll}>
								<Label>Add Poll</Label>
							</Button>
							<div class="vl" />
							<Button>
								<Label>Poll History</Label>
							</Button>
							<div class="vl" />
						</div>
					{/if}
					<AuthButton />
				</Section>
			</Row>
		</TopAppBar>
	</div>
	<div style="height: 64px;" />
	<main class="container d-flex flex-column gap-2 pt-3 pb-5">
		<h3>Running votes</h3>
		{#each { length: polls.length } as _, i}
			<Voteline name={polls[i].name} id={polls[i].id} />
		{/each}
	</main>
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
		height: 100%;
	}

	:global(.mdc-top-app-bar) {
		background-color: rgba(21, 78, 162, 0.5);
		backdrop-filter: blur(30px);
		color: white;
		display: flex;
		justify-content: space-between;
		align-content: stretch;
		align-items: center;
		padding: 5px 5px;
		border-bottom: rgba(21, 78, 162, 1) 1px solid;
	}

	.fix-on-top {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
	}

	:global(.mdc-button__label) {
		color: white;
	}

	.vl {
		border-left: 1px solid #ffffff83;
		height: 50%;
		margin: 0 5px;
	}
</style>

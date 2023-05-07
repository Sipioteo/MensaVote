<script>
	import { auth } from '../store';

	import Dialog from './Dialog.svelte';

	export let id = 'Voteline';
	export let name = 'Voteline';

	let show = false;

	function onPressedVote() {
		if (auth.isLoggedIn()) {
		} else {
			show = true;
		}
	}
</script>

<div class="d-none d-md-flex px-3 py-2 gap-2">
	<p>
		#{id} | <strong>{name}</strong>
	</p>

	<button class="btn btn-light fw-bold ms-3" on:click={onPressedVote}>VOTA</button>
</div>
<div class="d-flex d-md-none flex-column px-3 py-3 pt-2 align-items-stretch gap-3">
	<div class="d-flex flex-row">
		<div class="d-flex flex-column text-justify align-items-start fw-bold">
			<p>#{id} | {name}</p>
		</div>
	</div>
	<button class="btn btn-light fw-bold w-100" on:click={onPressedVote}>VOTA</button>
</div>

<Dialog bind:show>
	<h3>Running votes</h3>
</Dialog>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #5687cf;
		color: white;
		gap: 0;
		border-radius: 10px;
	}

	div p {
		margin: 0;
	}
</style>

<script>
	import { auth } from '../store';

	import Dialog from './Dialog.svelte';
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
		#AG19F7 | <strong>Voto per il consiglio</strong>
	</p>
	<p>12/05/2023 12:00 - 12/05/2023 18:00</p>
	<button class="btn btn-light fw-bold ms-3" on:click={onPressedVote}>VOTA</button>
</div>
<div class="d-flex d-md-none flex-column px-3 py-3 pt-2 align-items-stretch gap-3">
	<div class="d-flex flex-row">
		<div class="d-flex flex-column text-justify align-items-start fw-bold">
			<p>AG19F7</p>
			<p>Voto per il consiglio</p>
		</div>
		<div class="d-flex flex-column text-justify align-items-end">
			<p>Apertura: 12/05/2023 12:00</p>
			<p>Chiusura: 12/05/2023 18:00</p>
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

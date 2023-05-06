<script>
	import { browser } from '$app/environment';
	import Dialog, { Title, Content, Actions, InitialFocus } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import { onMount } from 'svelte';
	import AuthButton from './AuthButton.svelte';

	export let show = false;
	$: if (browser) {
		document.body.style.overflow = 'auto';
		if (show) {
			document.body.style.overflow = 'hidden';
		}
	}
</script>

<Dialog
	bind:open={show}
	aria-labelledby="default-focus-title"
	aria-describedby="default-focus-content"
>
	<Title id="default-focus-title">Login required</Title>
	<Content id="default-focus-content">You need to login to been able to vote</Content>
	<Actions>
		<Button>
			<Label>CANCEL</Label>
		</Button>
		<AuthButton />
	</Actions>
</Dialog>

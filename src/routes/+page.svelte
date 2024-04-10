<script>
	import CLauncher from '$lib/components/c_launcher.svelte';
	import { whoPlaceholder, whomPlaceholder } from '$lib/consts/strings';
	import { createRoom, sendMessage } from '$lib/socket';
	import { onMount } from 'svelte';
	let who = '';
	let whom = '';
	let step = 0;
</script>

<div class="flex flex-col justify-center items-center h-screen">
	{#if step === 0}
		<form
			class="w-full max-w-sm"
			on:submit={() => {
				step = 1;
				createRoom();
			}}
		>
			<div class="flex items-center py-2 border-b border-teal-500">
				<input
					class="px-2 py-1 mr-3 w-full leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
					type="text"
					placeholder={whoPlaceholder}
					aria-label={whoPlaceholder}
					bind:value={who}
				/>
				<button
					class="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 rounded border-4 border-teal-500 hover:bg-teal-700 hover:border-teal-700"
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	{:else if step === 1}
		<form class="w-full max-w-sm" on:submit={() => (step = 2)}>
			<div class="flex items-center py-2 border-b border-teal-500">
				<input
					class="px-2 py-1 mr-3 w-full leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
					type="text"
					placeholder={whomPlaceholder}
					aria-label={whomPlaceholder}
					bind:value={whom}
				/>
				<button
					class="flex-shrink-0 px-2 py-1 text-sm text-white bg-teal-500 rounded border-4 border-teal-500 hover:bg-teal-700 hover:border-teal-700"
					type="submit"
				>
					Submit
				</button>
			</div>
		</form>
	{:else if step === 2}
		<!-- <p>{who} => {whom}</p> -->
		<div class="flex flex-row items-center">
			<p>{who}</p>
			<CLauncher />
			<p>{whom}</p>
		</div>
	{/if}
</div>

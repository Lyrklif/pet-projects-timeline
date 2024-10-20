<script>
	import Header from './Header.svelte';
	import { QueryClientProvider } from '@sveltestack/svelte-query';
	import queryClient from '$lib/queryClient';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		if (window.location.hash) {
			const path = window.location.hash.substring(1);

			if (path.startsWith(base)) {
				goto(path);
			} else {
				goto(base + path);
			}
		}
	});
</script>

<QueryClientProvider client={queryClient}>
	<div class="app max-w-screen-2xl mx-auto">
		<Header />

		<main class="py-10 px-4 md:px-10 flex flex-col items-center max-w-screen-md mx-auto">
			<slot />
		</main>
	</div>
</QueryClientProvider>

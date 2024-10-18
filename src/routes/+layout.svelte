<script>
	import Header from './Header.svelte';
	import { QueryClientProvider } from '@sveltestack/svelte-query';
	import queryClient from '$lib/queryClient';
	import '../app.css';
</script>

<QueryClientProvider client={queryClient}>
	<div class="app">
		<Header />

		<main>
			<slot />
		</main>

		<footer>
			<p>visit <a href="https://github.com/lyrklif">GitHub</a></p>
		</footer>
	</div>
</QueryClientProvider>

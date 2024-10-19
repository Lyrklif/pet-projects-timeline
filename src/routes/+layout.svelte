<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { QueryClientProvider } from '@sveltestack/svelte-query';
	import queryClient from '$lib/queryClient';
	import '../app.css';
</script>

<QueryClientProvider client={queryClient}>
	<div class="app max-w-screen-2xl mx-auto">
		<Header />

		<main class="py-10 px-4 md:px-10">
			<slot />
		</main>

		<Footer />
	</div>
</QueryClientProvider>

<script>
	import { Alert } from 'flowbite-svelte';
	import { Heading, P, Button } from 'flowbite-svelte';


	import { useQuery } from '@sveltestack/svelte-query'

	const DAY = 1000 * 60 * 60 * 24

	const queryProfile = useQuery({
		queryKey: ['user-profile'],
		queryFn: () => fetch(
			'https://api.github.com/repos/SvelteStack/svelte-query'
		).then(res => res.json()),
		cacheTime: DAY,
		staleTime: DAY,
		select: (context) => context || {}
	})
</script>


<svelte:head>
	<title>Pet projects</title>
	<meta name="description" content="Timeline of pet projects" />
</svelte:head>


<header>
	<Heading tag="h1" class="mb-4">
		Pet projects
	</Heading>


	<Alert>
		<span class="font-medium">Info alert!</span>
		Change a few things up and try submitting again.
	</Alert>

	{#if $queryProfile.isLoading}
		Loading...
	{:else if $queryProfile.error}
		An error has occurred:
		{$queryProfile.error}
	{:else}
		<div>
			<h1>{$queryProfile.data.name}</h1>
			<p>{$queryProfile.data.description}</p>
			<strong>👀 {$queryProfile.data.subscribers_count}</strong>{' '}
			<strong>✨ {$queryProfile.data.stargazers_count}</strong>{' '}
			<strong>🍴 {$queryProfile.data.forks_count}</strong>
		</div>
	{/if}
</header>

<section>
	<h2>Timeline</h2>

	<ul>
		<li>Project 1</li>
		<li>Project 2</li>
		<li>Project 3</li>
	</ul>
</section>

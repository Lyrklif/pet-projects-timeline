<script>
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
	<h1>Pet projects</h1>

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

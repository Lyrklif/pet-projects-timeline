<script>
	import { Heading, P } from 'flowbite-svelte';
	import { useQuery } from '@sveltestack/svelte-query';
	import { CACHE_TIME, API } from '../constants/query';

	const queryUser = useQuery({
		queryKey: ['user'],
		queryFn: () => fetch(API.USER).then((res) => res.json()),
		cacheTime: CACHE_TIME,
		staleTime: CACHE_TIME,
		select: (context) => context || []
	});

	const queryRepositories = useQuery({
		queryKey: ['repositories'],
		queryFn: () => fetch(API.REPOSITORIES).then((res) => res.json()),
		cacheTime: CACHE_TIME,
		staleTime: CACHE_TIME,
		select: (context) => context || []
	});
</script>

<svelte:head>
	<title>Pet projects</title>
	<meta name="description" content="Timeline of pet projects" />
</svelte:head>

<header>
	<Heading tag="h1" class="mb-4">Pet projects</Heading>

	{#if $queryUser.data}
		<div>
			<P>avatar_url: {$queryUser.data.avatar_url}</P>
			<P>bio: {$queryUser.data.bio}</P>
			<P>location: {$queryUser.data.location}</P>
			<P>name: {$queryUser.data.name}</P>
		</div>
	{/if}
</header>

<section>
	<Heading tag="h2">Timeline</Heading>

	{#if $queryRepositories.isLoading}
		Loading...
	{:else if $queryRepositories.error}
		An error has occurred:
		{$queryRepositories.error}
	{:else}
		<ul>
			{#each $queryRepositories.data as repo}
				<li>
					<Heading tag="h3">{repo.name}</Heading>

					<a href={`/pet/${repo.name}`}>View</a>

					<P>created_at: {repo.created_at}</P>
					<P>archived: {repo.archived}</P>
					<P>description: {repo.description}</P>
					<P>homepage: {repo.homepage}</P>
					<P>language: {repo.language}</P>
					<P>topics: {repo.topics}</P>
				</li>
			{/each}
		</ul>
	{/if}
</section>

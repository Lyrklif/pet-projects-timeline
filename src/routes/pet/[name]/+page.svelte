<script lang="ts">
	import { Heading, P } from 'flowbite-svelte';
	import { useQuery } from '@sveltestack/svelte-query';
	import { CACHE_TIME, API } from '../../../constants/query';
	import { page } from '$app/stores';
	import { marked } from 'marked';

	const queryReadme = useQuery({
		queryKey: ['states'],
		queryFn: () => fetch(API.REPO_README($page.params.name)).then((res) => res.json()),
		cacheTime: CACHE_TIME,
		staleTime: CACHE_TIME,
		select: (context) => {
			// Декодируем содержимое README из Base64
			const decodedData = atob(context.content);

			// Декодируем строку в UTF-8
			const utf8Decoder = new TextDecoder('utf-8');

			const decodedContent = utf8Decoder.decode(
				new Uint8Array([...decodedData].map((char) => char.charCodeAt(0)))
			);

			return marked(decodedContent);
		}
	});

	const queryRepository = useQuery({
		queryKey: ['repo'],
		queryFn: () => fetch(API.REPOSITORY($page.params.name)).then((res) => res.json()),
		cacheTime: CACHE_TIME,
		staleTime: CACHE_TIME,
		select: (context) => context || {}
	});
</script>

<header>
	<Heading tag="h1">Project page for {$page.params.name}</Heading>
</header>

{#if $queryRepository.isLoading}
	Loading...
{:else if $queryRepository.error}
	An error has occurred:
	{$queryRepository.error}
{:else}
	<div>
		<P>created_at: {$queryRepository.data.created_at}</P>
		<P>archived: {$queryRepository.data.archived}</P>
		<P>description: {$queryRepository.data.description}</P>
		<P>homepage: {$queryRepository.data.homepage}</P>
		<P>language: {$queryRepository.data.language}</P>
		<P>topics: {$queryRepository.data.topics}</P>
	</div>
{/if}

<Heading tag="h2">Readme</Heading>

{#if $queryReadme.isLoading}
	Loading...
{:else if $queryReadme.error}
	An error has occurred:
	{$queryReadme.error}
{:else}
	<div class="markdown-content">
		{@html $queryReadme.data}
	</div>
{/if}

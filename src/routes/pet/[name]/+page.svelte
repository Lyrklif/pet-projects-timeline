<script lang="ts">
	import { Heading, P, Badge, Indicator, Button, Card, GradientButton } from 'flowbite-svelte';
	import { useQuery } from '@sveltestack/svelte-query';
	import { CACHE_TIME, API } from '../../../constants/query';
	import { page } from '$app/stores';
	import { marked } from 'marked';

	const queryReadme = useQuery({
		queryKey: ['states', $page.params.name],
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
		queryKey: ['repo', $page.params.name],
		queryFn: () => fetch(API.REPOSITORY($page.params.name)).then((res) => res.json()),
		cacheTime: CACHE_TIME,
		staleTime: CACHE_TIME,
		select: (context) => context || {}
	});
</script>

<Card class="max-w-full">
	<header>
		<Heading tag="h1">{$page.params.name}</Heading>
	</header>

	{#if $queryRepository.isLoading}
		Loading...
	{:else if $queryRepository.error}
		An error has occurred:
		{$queryRepository.error}
	{:else}
		<div>
			<P>created_at: {$queryRepository.data.created_at}</P>

			{#if $queryRepository.data.archived}
				<Badge color="dark" rounded class="px-2.5 py-0.5">
					<Indicator color="gray" size="xs" class="me-1" />Archived
				</Badge>
			{/if}

			<P class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
				{$queryRepository.data.description || 'No description'}
			</P>

			{#if $queryRepository.data.topics.length > 0}
				<ul class="flex flex-wrap gap-1 mt-2">
					{#each $queryRepository.data.topics as topic}
						<li>
							<Badge border color="dark">{topic}</Badge>
						</li>
					{/each}
				</ul>
			{/if}

			<div class="flex flex-wrap gap-2 mt-4">
				<Button href={$queryRepository.data.html_url} target="_blank" outline color="dark">
					Code
				</Button>

				{#if $queryRepository.data.homepage}
					<GradientButton
						href={$queryRepository.data.homepage}
						target="_blank"
						outline
						color="greenToBlue"
					>
						Demo
					</GradientButton>
				{/if}
			</div>
		</div>
	{/if}
</Card>

<Card class="max-w-full mt-10">
	<Heading tag="h6" class="mb-4">/readme.md</Heading>

	{#if $queryReadme.isLoading}
		Loading...
	{:else if $queryReadme.error}
		An error has occurred:
		{$queryReadme.error}
	{:else}
		<div class="markdown">
			{@html $queryReadme.data}
		</div>
	{/if}
</Card>

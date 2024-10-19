<script lang="ts">
	import {
		Heading,
		P,
		A,
		Badge,
		Indicator,
		Button,
		Card,
		GradientButton,
		Spinner,
		Alert
	} from 'flowbite-svelte';
	import { useQuery } from '@sveltestack/svelte-query';
	import { CACHE_TIME, API } from '../../../constants/query';
	import { page } from '$app/stores';
	import { marked } from 'marked';
	import { formatDate } from '../../../stores/date';

	let description: string = '';

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
		select: (context) => {
			description = context.description || 'No description';

			return context || {};
		}
	});
</script>

<svelte:head>
	<title>{$page.params.name}</title>
	<meta name="description" content={description} />
</svelte:head>

<A href="/" class="font-medium hover:underline mr-auto">Back</A>

<header>
	<Heading tag="h1">{$page.params.name}</Heading>
</header>

{#if $queryRepository.isLoading}
	<Spinner size="10" class="text-center mt-10" />
{:else if $queryRepository.error}
	<Alert color="red" class="mt-10">
		{$queryRepository.error}
	</Alert>
{:else}
	<div class="text-center">
		<P class="text-center text-md text-gray-500 dark:text-gray-400 mt-3">
			{formatDate($queryRepository.data.created_at)}
		</P>

		{#if $queryRepository.data.archived}
			<Badge color="dark" rounded class="px-2.5 py-0.5">
				<Indicator color="gray" size="xs" class="me-1" />Archived
			</Badge>
		{/if}

		<P class="text-center text-md text-gray-500 dark:text-gray-400 mt-3">
			{description}
		</P>

		{#if $queryRepository.data.topics.length > 0}
			<ul class="flex flex-wrap justify-center gap-1 mt-2">
				{#each $queryRepository.data.topics as topic}
					<li>
						<Badge border color="dark">{topic}</Badge>
					</li>
				{/each}
			</ul>
		{/if}

		<div class="flex flex-wrap justify-center gap-2 mt-4">
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

<Card class="max-w-full mt-10">
	<Heading tag="h6" class="mb-10">/readme.md</Heading>

	{#if $queryReadme.isLoading}
		<Spinner size="10" class="text-center" />
	{:else if $queryReadme.error}
		<Alert color="red">
			{$queryReadme.error}
		</Alert>
	{:else}
		<div class="markdown">
			{@html $queryReadme.data}
		</div>
	{/if}
</Card>

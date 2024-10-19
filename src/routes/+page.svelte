<script>
	import {
		Heading,
		P,
		Badge,
		Indicator,
		Timeline,
		TimelineItem,
		Button,
		GradientButton,
		ButtonGroup,
		Card
	} from 'flowbite-svelte';
	import { useQuery } from '@sveltestack/svelte-query';
	import { CACHE_TIME, API } from '../constants/query';

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
	<Heading tag="h1">Pet projects</Heading>
	<P class="text-center text-md text-gray-500 dark:text-gray-400 mt-3">(/◔ ◡ ◔)/ Frontend</P>
</header>

{#if $queryRepositories.isLoading}
	Loading...
{:else if $queryRepositories.error}
	An error has occurred:
	{$queryRepositories.error}
{:else}
	<Timeline class="mt-6">
		{#each $queryRepositories.data as repo}
			<TimelineItem title={repo.name} date={repo.created_at}>
				<Card class="max-w-screen-md p-4 sm:p-4">
					{#if repo.archived}
						<div>
							<Badge color="dark" rounded class="px-2.5 py-0.5">
								<Indicator color="gray" size="xs" class="me-1" />Archived
							</Badge>
						</div>
					{/if}

					<P class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
						{repo.description || 'No description'}
					</P>

					{#if repo.topics.length > 0}
						<ul class="flex flex-wrap gap-1 mt-2">
							{#each repo.topics as topic}
								<li>
									<Badge border color="dark">{topic}</Badge>
								</li>
							{/each}
						</ul>
					{/if}

					<div class="flex flex-wrap gap-2 mt-4">
						<ButtonGroup>
							<Button href={`/pet/${repo.name}`} outline color="dark">Details</Button>
							<Button href={repo.html_url} target="_blank" outline color="dark">Code</Button>
						</ButtonGroup>

						{#if repo.homepage}
							<GradientButton href={repo.homepage} target="_blank" outline color="greenToBlue">
								Demo
							</GradientButton>
						{/if}
					</div>
				</Card>
			</TimelineItem>
		{/each}
	</Timeline>
{/if}

<script lang="ts">
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
	import { formatDate } from '../stores/date';
	import Filters from '../components/Filters.svelte';

	let topics: Array<string> = [];
	let list: Array<any> = [];
	let filteredList: Array<any> = [];

	const handleFilter = ({ detail }: { detail: Array<string> }) => {
		if (!detail.length) {
			filteredList = list;

			return;
		}

		filteredList = list.filter((project) => {
			const topics = project.topics || [];
			const selected = detail || [];
			let has = false;

			selected.forEach((tag) => {
				if (topics.includes(tag)) {
					has = true;
				}
			});

			return has;
		});
	};

	const queryRepositories = useQuery({
		queryKey: ['repositories'],
		queryFn: () => fetch(API.REPOSITORIES).then((res) => res.json()),
		cacheTime: CACHE_TIME,
		staleTime: CACHE_TIME,
		select: (context) => {
			if (!context?.length) {
				return [];
			}

			const withoutSpecialRepository = context.filter(
				(repo) => repo.name !== import.meta.env.VITE_USER_NAME
			);

			withoutSpecialRepository.forEach((item) => {
				if (item) {
					item.topics.forEach((value) => {
						topics.push(value);
					});
				}
			});

			withoutSpecialRepository.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

			list = withoutSpecialRepository;
			filteredList = withoutSpecialRepository;

			return withoutSpecialRepository;
		}
	});
</script>

<svelte:head>
	<title>Pet projects by {import.meta.env.VITE_USER_NAME}</title>
	<meta name="description" content="Timeline of pet projects" />
</svelte:head>

<header>
	<Heading tag="h1">Pet projects</Heading>
	<P class="text-center text-md text-gray-500 dark:text-gray-400 mt-3">
		by {import.meta.env.VITE_USER_NAME}
	</P>
	<P class="text-center text-md text-gray-500 dark:text-gray-400 mt-3">(/◔ ◡ ◔)/ Frontend</P>
</header>

{#if $queryRepositories.isLoading}
	Loading...
{:else if $queryRepositories.error}
	An error has occurred:
	{$queryRepositories.error}
{:else}
	<div class="my-5">
		<Filters allFilters={Array.from(topics)} on:filter={handleFilter} />
	</div>

	<Timeline class="mt-6 w-full">
		{#each filteredList as repo}
			<TimelineItem title={repo.name} date={formatDate(repo.created_at)}>
				<Card class=" max-w-full p-4 sm:p-4 mt-2">
					{#if repo.archived}
						<div class="mb-2">
							<Badge color="dark" rounded class="px-2.5 py-0.5">
								<Indicator color="gray" size="xs" class="me-1" />Archived
							</Badge>
						</div>
					{/if}

					<P class="text-base font-normal text-gray-500 dark:text-gray-400">
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
							<Button href={`/pet/${repo.name}`} size="xs" outline color="dark">Details</Button>
							<Button href={repo.html_url} target="_blank" size="xs" outline color="dark">
								Code
							</Button>
						</ButtonGroup>

						{#if repo.homepage}
							<GradientButton
								href={repo.homepage}
								target="_blank"
								size="xs"
								outline
								color="greenToBlue"
							>
								Demo
							</GradientButton>
						{/if}
					</div>
				</Card>
			</TimelineItem>
		{/each}
	</Timeline>
{/if}

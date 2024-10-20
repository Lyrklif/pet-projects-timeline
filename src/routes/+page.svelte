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
		Card,
		Spinner,
		Alert
	} from 'flowbite-svelte';
	import { useQuery } from '@sveltestack/svelte-query';
	import { API } from '../constants/query';
	import { formatDate } from '../stores/date';
	import Filters from '../components/Filters.svelte';
	import { base } from '$app/paths';
	import type { TRepository } from '../types/repository';

	let topics: Array<string> = [];
	let list: Array<TRepository> = [];
	let filteredList: Array<TRepository> = [];

	const handleFilter = ({ detail }: { detail: Array<string> }) => {
		filteredList = detail.length
			? list.filter((project) => project.topics?.some((topic: string) => detail.includes(topic)))
			: list;
	};

	const queryRepositories = useQuery({
		queryKey: ['repositories'],
		queryFn: async (): Promise<TRepository[]> => {
			const response = await fetch(API.REPOSITORIES);
			const repositories = await response.json();
			return repositories.filter(
				(repo: TRepository) => repo.name !== import.meta.env.VITE_USER_NAME
			);
		},
		select: (repos) => {
			repos.forEach((repo) => repo.topics?.forEach((topic: string) => topics.push(topic)));
			list = repos.sort(
				(a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
			);
			filteredList = list;
			return repos;
		}
	});
</script>

<svelte:head>
	<title>Pet projects by {import.meta.env.VITE_USER_NAME}</title>
	<meta name="description" content="Timeline of pet projects" />
</svelte:head>

<header class="mb-10">
	<Heading tag="h1" class="text-center">Pet projects</Heading>
	<P class="text-center text-md text-gray-500 dark:text-gray-400 mt-3">
		by {import.meta.env.VITE_USER_NAME}
	</P>
	<P class="text-center text-md text-gray-500 dark:text-gray-400 mt-3">(/◔ ◡ ◔)/ Frontend</P>
</header>

{#if $queryRepositories.isLoading}
	<Spinner size="10" class="text-center" />
{:else if $queryRepositories.error}
	<Alert color="red">
		{$queryRepositories.error}
	</Alert>
{:else}
	<div class="mb-4">
		<Filters allFilters={topics} on:filter={handleFilter} />
	</div>

	<P class="text-gray-500 dark:text-gray-400 mr-auto text-sm">
		Found {filteredList.length} projects
	</P>

	<Timeline class="mt-6 w-full">
		{#each filteredList as repo}
			<TimelineItem title={repo.name} date={formatDate(repo.created_at)}>
				<Card class="max-w-full p-4 sm:p-4 mt-2">
					{#if repo.archived}
						<Badge color="dark" rounded class="px-2.5 py-0.5 mb-2 mr-auto">
							<Indicator color="gray" size="xs" class="me-1" /> Archived
						</Badge>
					{/if}

					<P class="text-base font-normal text-gray-500 dark:text-gray-400">
						{repo.description || 'No description'}
					</P>

					{#if repo.topics.length > 0}
						<ul class="flex flex-wrap gap-1 mt-2">
							{#each repo.topics as topic}
								<Badge border color="dark">{topic}</Badge>
							{/each}
						</ul>
					{/if}

					<div class="flex flex-wrap gap-2 mt-4">
						<ButtonGroup>
							<Button href={`${base}/pet/${repo.name}`} size="xs" outline color="dark"
								>Details</Button
							>
							<Button href={repo.html_url} target="_blank" size="xs" outline color="dark"
								>Code</Button
							>
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

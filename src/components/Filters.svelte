<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button, Indicator } from 'flowbite-svelte';

	const dispatch = createEventDispatcher();

	export let allFilters: string[] = [];
	let selectedFilters: string[] = [];

	$: filterCount = allFilters.reduce(
		(acc, filter) => {
			acc[filter] = (acc[filter] || 0) + 1;
			return acc;
		},
		{} as { [key: string]: number }
	);

	$: uniqueFilters = Object.keys(filterCount).filter((filter) => filterCount[filter] > 1);

	const selectFilter = (filter: string) => {
		if (selectedFilters.includes(filter)) {
			selectedFilters = selectedFilters.filter((f) => f !== filter);
		} else {
			selectedFilters = [...selectedFilters, filter];
		}
		dispatch('filter', selectedFilters);
	};
</script>

<div class="flex flex-wrap justify-center gap-3">
	{#each uniqueFilters as filter}
		<Button
			outline={!selectedFilters.includes(filter)}
			on:click={() => selectFilter(filter)}
			class="relative border-0"
			size="xs"
		>
			{filter}
			<Indicator border size="xl" color="dark" placement="top-right" class="text-xs font-bold">
				{filterCount[filter]}
			</Indicator>
		</Button>
	{/each}
</div>

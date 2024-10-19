<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button, Indicator } from 'flowbite-svelte';

	const dispatch = createEventDispatcher();

	export let allFilters: Array<string>;
	let uniqueFilters: Array<string> = Array.from(new Set(allFilters));
	let filterCount: { [key: string]: number } = {};
	let selectedFilters: Array<string> = [];

	const setCounts = () => {
		allFilters.forEach((filter) => {
			if (filterCount[filter]) {
				filterCount[filter] += 1;
			} else {
				filterCount[filter] = 1;
			}
		});
	};

	const setUniqueFilters = () => {
		uniqueFilters = Array.from(new Set(allFilters)).filter((item) => filterCount[item] > 1);
	};

	setCounts();
	setUniqueFilters();

	const selectFilter = (filter: string) => {
		const isSelected = selectedFilters.includes(filter);
		if (isSelected) {
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
			class="relative"
			size="xs"
			color="dark"
		>
			{filter}

			<Indicator border size="xl" color="dark" placement="top-right" class="text-xs font-bold">
				{filterCount[filter]}
			</Indicator>
		</Button>
	{/each}
</div>

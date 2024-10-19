<script>
	import { Navbar, Button } from 'flowbite-svelte';
</script>

<Navbar class="px-4 md:px-10 py-0 w-full border-0">
	<Button
		href={import.meta.env.VITE_GITHUB_LINK}
		target="_blank"
		color="alternative"
		class="ml-auto border-0"
	>
		GitHub
	</Button>
</Navbar>

<script>
	import { Navbar, Button } from 'flowbite-svelte';
</script>

<Navbar class="px-4 md:px-10 py-0 sticky w-full z-10 top-0 start-0 border-b">
	<Button
		href={import.meta.env.VITE_GITHUB_LINK}
		target="_blank"
		color="alternative"
		class="ml-auto border-0"
	>
		GitHub
	</Button>
</Navbar>

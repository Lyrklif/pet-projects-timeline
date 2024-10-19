<script>
	import { Footer, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<Footer>
	<FooterLinkGroup
		ulClass="flex justify-end py-10 px-4 md:px-10 mt-3 text-gray-500 dark:text-gray-400"
	>
		<FooterLink href={import.meta.env.VITE_GITHUB_LINK} target="_blank">GitHub</FooterLink>
	</FooterLinkGroup>
</Footer>

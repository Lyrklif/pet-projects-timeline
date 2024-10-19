<script>
	import { page } from '$app/stores';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="px-4 md:px-10 py-2.5 sticky w-full z-10 top-0 start-0 border-b">
	<NavBrand href="/">
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Home</span>
	</NavBrand>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/about">About</NavLi>
		<NavLi href={import.meta.env.VITE_GITHUB_LINK} target="_blank">GitHub</NavLi>
	</NavUl>
</Navbar>

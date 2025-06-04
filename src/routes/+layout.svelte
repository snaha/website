<script>
	import { page } from '$app/state'
	import LinkPreview from '$lib/components/link-preview.svelte'
	import '../app.css'
	import '../diete.css'

	const { children } = $props()

	function isProductionEnvironment() {
		return page.url.origin === 'https://snaha.net'
	}
</script>

<svelte:head>
	{#if isProductionEnvironment()}
		<script
			defer
			src="https://cloud.umami.is/script.js"
			data-website-id="0e254067-63e9-43d3-a94e-bff5dc2b6005"
		></script>
	{/if}
	<LinkPreview />
</svelte:head>

<main>
	{#if children}
		{@render children()}
	{/if}
</main>

<style>
	main {
		width: 100%;
		max-width: 1184px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: calc(2 * var(--double-padding));
	}
	@media (max-width: 919px) {
		main {
			max-width: 560px;
		}
	}
</style>

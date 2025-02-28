<script>
	import { base } from '$app/paths'
	import '../app.css'
	import '../diete.css'

	const { children } = $props()
</script>

<svelte:head>
	<meta property="og:title" content="Snaha Collective" />
	<meta
		property="og:description"
		content="An OG team geared towards making the web a bit better for hoomans."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:image" content={`${base}/og_image.png`} />
	<meta property="og:url" content="https://snaha.net" />
	<meta name="twitter:card" content={`${base}/og_image.png`} />
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

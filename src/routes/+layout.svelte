<script>
	import '../app.css'
	import '../diete.css'

	const { children } = $props()
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" sizes="32x32" />
	<link rel="icon" href="/icon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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

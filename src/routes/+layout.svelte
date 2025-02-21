<script>
	import '../app.css'
	import '../diete.css'

	const { children } = $props()
</script>

<main>
	{#if children}
		{@render children()}
	{/if}
</main>

<style>
	main {
		max-width: 1184px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: calc(2 * var(--double-padding));
	}
</style>

<script>
	import { base } from '$app/paths'
	import Divider from '$lib/components/diete/divider.svelte'
	import Typography from '$lib/components/diete/typography.svelte'

	let width = $state(0)
	const isMobile = $derived(width < 920)
</script>

<svelte:window bind:innerWidth={width} />
<section>
	<a href={`${base}/`}>
		<img src={`${base}/logo.svg`} alt="Logo" class="logo" />
	</a>
	<div class="container">
		<Typography variant={isMobile ? 'default' : 'large'} class="high"
			>Have a project in mind where we could help? Care to learn more about Snaha?
		</Typography>
	</div>
	<Typography variant={isMobile ? 'default' : 'h3'} class="normal block"
		>Drop us an email at <a href="mailto:hello@snaha.net">hello@snaha.net</a> or join our
		<a href="/">Discord server</a>.</Typography
	>
</section>
<Divider --double-padding="0" />
<footer>
	<span>hello@snaha.net</span>
	<a href={`${base}/contact`}>Contact us</a>
	<a href="https://github.com/snaha" target="_blank">Github</a>
	<a href="/">Discord</a>
	{#if !isMobile}
		<div class="grower"></div>
	{/if}
	<span>{new Date().getFullYear()}</span>
</footer>

<style>
	section {
		display: flex;
		flex-direction: column;
		gap: calc(2 * var(--double-padding));
	}
	section > a {
		display: flex;
		width: fit-content;
	}
	.container {
		max-width: 560px;
		width: 100%;
	}
	a {
		color: var(--colors-high-accent);
	}
	footer {
		display: flex;
		width: 100%;
		gap: var(--half-padding);
	}
	footer > a,
	footer > span {
		color: var(--colors-high);
		font-family: 'Space Grotesk';
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 24px;
	}
	.grower {
		flex: 1;
	}
	@media (max-width: 919px) {
		section {
			gap: var(--padding);
		}
		img {
			width: 150px;
		}
		footer {
			flex-direction: column;
		}
	}
</style>

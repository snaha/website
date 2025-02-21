<script>
	import Button from '$lib/components/diete/button.svelte'
	import Divider from '$lib/components/diete/divider.svelte'
	import Typography from '$lib/components/diete/typography.svelte'
</script>

<section class="header">
	<div class="left">
		<img src="/logo.png" alt="Logo" />
		<div>
			<Typography variant="h3" class="yellow normal">We turn worthy ideas into products.</Typography
			>
			<Typography variant="h3" class="normal">
				We’re an OG team geared towards making the web a bit better for hoomans.</Typography
			>
		</div>
		<Button --colors-ultra-high="var(--colors-high-accent)">CONTACT US</Button>
	</div>
	<img src="/header-img.png" alt="Header" />
</section>
<Divider --double-padding="0" />
<section>
	<p class="snaha-font">
		<span>HUMAN-</span>
		<span>FRIENDLY</span>
		<span>WEB</span>
	</p>
	<Typography variant="large"
		>We’re a small and independent team defending privacy, freedom and more generally, human
		interests in software products.<br /><br />We build for the web — websites, web applications,
		web3 dapps & other crypto-related projects.
	</Typography>
</section>

<style>
	:global(.yellow) {
		color: var(--colors-high-accent) !important;
	}
	:global(.normal) {
		font-weight: normal !important;
	}
	section {
		display: flex;
		align-items: center;
		align-self: stretch;
		gap: calc(2 * var(--double-padding));
	}
	.header .left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: calc(2 * var(--double-padding));
	}
	.snaha-font {
		display: inline-block;
		margin: 0;
		padding: 0;
		font-family: var(--font-family-snaha);
		font-style: normal;
		font-size: 96px;
		line-height: 96px;
		text-transform: uppercase;
		color: var(--colors-high-accent);
		transform: rotate(-11deg) skewX(-11deg);
	}
	.snaha-font span {
		display: block;
	}
</style>

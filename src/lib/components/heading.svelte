<script lang="ts">
	interface Props {
		text: string
		color?: 'accent' | 'top'
		large?: boolean
		top?: string
	}
	let { text, color = 'top', large = false, top = '32px' }: Props = $props()
</script>

<div class="root" style={`padding-top: ${top}`}>
	<div class="wrapper {color}" class:large>
		{#each text.split(' ') as word}
			<span>{word}</span>
		{/each}
	</div>
</div>

<style>
	.root {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-family: var(--font-family-snaha);
		font-style: normal;
		font-weight: 400;
		font-size: 48px;
		line-height: 48px;
		text-transform: uppercase;
		transform: rotate(-11deg) skewX(-11deg);
		transform-origin: bottom left;
		width: fit-content;
	}

	.accent {
		color: var(--colors-high-accent);
	}
	.top {
		color: var(--colors-top);
	}
	.large {
		font-size: 96px;
		line-height: 96px;
	}
</style>

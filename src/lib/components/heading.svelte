<script lang="ts">
	interface Props {
		text: string
		color?: 'accent' | 'top'
		large?: boolean
	}
	let { text, color = 'top', large = false }: Props = $props()
</script>

<div class="root {color}" class:large>
	{#each text.split(' ') as word}
		<span>{word}</span>
	{/each}
</div>

<style>
	.root {
		display: flex;
		flex-direction: column;
		font-family: var(--font-family-snaha);
		font-style: normal;
		font-weight: 400;
		font-size: 48px;
		line-height: 48px;
		text-transform: uppercase;
		transform: rotate(-11deg) skewX(-11deg);
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

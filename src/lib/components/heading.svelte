<script lang="ts">
	import { onMount } from 'svelte'

	interface Props {
		text: string
		color?: 'accent' | 'top'
		large?: boolean
	}
	let { text, color = 'top', large = false }: Props = $props()

	let root: HTMLDivElement
	let wrapper: HTMLDivElement

	function setRootHeight() {
		const rect = wrapper.getBoundingClientRect()
		root.style.height = `${rect.height}px`
	}
	onMount(() => {
		window.addEventListener('resize', setRootHeight)
		setRootHeight()
		return () => window.removeEventListener('resize', setRootHeight)
	})
</script>

<div class="root" bind:this={root}>
	<div class="wrapper {color}" class:large bind:this={wrapper}>
		{#each text.split(' ') as word}
			<span>{word}</span>
		{/each}
	</div>
</div>

<style>
	.root {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrapper {
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

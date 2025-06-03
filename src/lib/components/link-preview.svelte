<script lang="ts">
	import { page } from '$app/state'

	type Props = {
		title?: string
		description?: string
		image?: string
		imageType?: string
	}

	const linkPreviewImageURL = `${page.url.origin}/link-preview.png`

	let {
		title = 'Snaha Collective',
		description = 'The collective that turns worthy ideas into products. The idea is to make the web a tiny better for hoomans.',
		image = linkPreviewImageURL,
		imageType = 'image/png'
	}: Props = $props()
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta property="og:image:type" content={imageType} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image:type" content={imageType} />
<meta name="twitter:image" content={image} />
<meta name="twitter:image:width" content="1200" />
<meta name="twitter:image:height" content="630" />

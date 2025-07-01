<script lang="ts">
	import { DESCRIPTION, ORIGIN, TITLE } from '$lib/constants'

	const image = `${ORIGIN}/link-preview.png`
	const imageType = 'image/png'
</script>

<title>{TITLE}</title>
<meta name="description" content={DESCRIPTION} />
<meta property="og:title" content={TITLE} />
<meta property="og:description" content={DESCRIPTION} />
<meta property="og:image" content={image} />
<meta property="og:image:type" content={imageType} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content={ORIGIN} />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={TITLE} />
<meta name="twitter:description" content={DESCRIPTION} />
<meta name="twitter:image:type" content={imageType} />
<meta name="twitter:image" content={image} />
<meta name="twitter:image:width" content="1200" />
<meta name="twitter:image:height" content="630" />

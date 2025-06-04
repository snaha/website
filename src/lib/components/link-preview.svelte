<script lang="ts">
	const origin = 'https://snaha.net'
	const title = 'Snaha Collective'
	const description =
		'The collective that turns worthy ideas into products. The idea is to make the web a tiny better for hoomans.'
	const image = `${origin}/link-preview.png`
	const imageType = 'image/png'
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />
<meta property="og:image:type" content={imageType} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content={origin} />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image:type" content={imageType} />
<meta name="twitter:image" content={image} />
<meta name="twitter:image:width" content="1200" />
<meta name="twitter:image:height" content="630" />

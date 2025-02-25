<script>
	import Button from '$lib/components/diete/button.svelte'
	import Divider from '$lib/components/diete/divider.svelte'
	import Typography from '$lib/components/diete/typography.svelte'
	import Heading from '$lib/components/heading.svelte'
	import { base } from '$app/paths'

	let width = $state(0)
	const isMobile = $derived(width < 920)
	const notImplemented = '/'

	const companies = [
		{ name: 'Prezi', icon: `${base}/icons/prezi.svg`, link: notImplemented },
		{ name: 'Felfele', icon: `${base}/icons/felfele.svg`, link: notImplemented },
		{ name: 'Swarm', icon: `${base}/icons/swarm.svg`, link: notImplemented },
		{ name: 'Logos', icon: `${base}/icons/logos.svg`, link: notImplemented },
		{ name: 'Kalkul', icon: `${base}/icons/kalkul.svg`, link: 'https://kalkul.app/' },
		{ name: 'Diete', icon: `${base}/icons/diete.svg`, link: 'https://diete.design/' }
	]

	const coreTeam = [
		{
			name: 'Attila',
			img: `${base}/team/attila.png`,
			info: 'Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan austin.'
		},
		{
			name: 'David',
			img: `${base}/team/david.png`,
			info: "Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi gluten-free irony trust fund."
		},
		{
			name: 'Vojtech',
			img: `${base}/team/vojtech.png`,
			info: 'Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha kinfolk.'
		}
	]
</script>

<svelte:window bind:innerWidth={width} />
<section class="header">
	<div class="left">
		<img src={`${base}/logo.png`} alt="Logo" class="logo" />
		{#if isMobile}
			<img src={`${base}/header-img.png`} alt="Header" />
		{/if}
		<Typography variant={isMobile ? 'default' : 'h3'} class="normal block"
			><span class="yellow">We turn worthy ideas into products.</span><br />
			We’re an OG team geared towards making the web a bit better for hoomans.</Typography
		>
		<Button
			--colors-ultra-high="var(--colors-high-accent)"
			dimension={isMobile ? 'compact' : 'large'}>CONTACT US</Button
		>
	</div>
	{#if !isMobile}
		<img src={`${base}/header-img.png`} alt="Header" />
	{/if}
</section>
<Divider --double-padding="0" />
<section>
	<div class="container">
		<Heading text="human- friendly web" color="accent" large={!isMobile} />
	</div>
	<div class="container">
		<Typography variant={isMobile ? 'default' : 'large'}
			>We’re a small and independent team defending privacy, freedom and more generally, human
			interests in software products.<br /><br />We build for the web — websites, web applications,
			web3 dapps & other crypto-related projects.
		</Typography>
	</div>
</section>
<Divider --double-padding="0" />
<section class="reverse">
	<div class="about-team">
		<Typography variant={isMobile ? 'default' : 'large'} class="block">
			Attila and David met back in 2012, while working together at <a href={notImplemented}>Prezi</a
			>. In 2019, they co-founded the <a href={notImplemented}>Felfele Foundation</a>. Shortly after
			that, they met with Vojtech while working with the
			<a href={notImplemented}>Swarm Foundation</a>. Since them Attila, David and Vojtech have stuck
			together. They’ve worked with different teams at <a href={notImplemented}>Logos</a> and
			co-founded Snaha together. Besides helping selected clients, Snaha is bootstrapping
			<a href="https://kalkul.app/" target="_blank">Kalkul</a>
			and developing
			<a href="https://diete.design/" target="_blank">Diète</a>, its own open-source design system.
		</Typography>
		<div class="icons">
			{#each companies as company}
				<a href={company.link} target="_blank">
					<img src={company.icon} alt={company.name} />
				</a>
			{/each}
		</div>
	</div>
	<div class="container">
		<Heading text="our core team" color="accent" large={!isMobile} />
	</div>
</section>
<section>
	{#each coreTeam as member}
		<div class="card">
			<img src={member.img} alt={member.name} />
			<Heading text={member.name} />
			<Typography>{member.info}</Typography>
		</div>
	{/each}
</section>
<Divider --double-padding="0" />
<section>
	<div class="container">
		<Heading text="connect the dots" color="accent" large={!isMobile} />
	</div>
	<div class="container">
		<Typography variant={isMobile ? 'default' : 'large'}>
			Successful products result from a delicate assembly of widely different skillsets. Magic
			happens precisely within the in-betweens.<br /><br /> Our team covers the full spectrum and has
			refined a subtle alchemy in working together — efficiently binding our diverse competences to deliver
			high-quality, seamless products.
		</Typography>
	</div>
</section>
<section>
	<div class="card">
		<Heading text="Design" />
		<Typography>
			Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen
			sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan
			austin.
		</Typography>
	</div>
	<div class="card">
		<Heading text="Frontend" />
		<Typography>
			Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you
			probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi
			gluten-free irony trust fund.
		</Typography>
	</div>
	<div class="card">
		<Heading text="Backend" />
		<Typography>
			Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray
			hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha
			kinfolk.
		</Typography>
	</div>
</section>
<section>
	<div class="card">
		<Heading text="Branding" />
		<Typography>
			Tumblr freegan poke, poutine pug bespoke tacos pour-over cliche normcore selvage. XOXO cray
			hammock post-ironic, aesthetic typewriter umami. Shaman farm-to-table biodiesel kombucha
			kinfolk.
		</Typography>
	</div>
	<div class="card">
		<Heading text="Marketing" />
		<Typography>
			Shabby chic enamel pin raclette authentic letterpress, selfies cold-pressed. Ascot adaptogen
			sus, intelligentsia fingerstache offal food truck narwhal hashtag occupy big mood etsy seitan
			austin.
		</Typography>
	</div>
	<div class="card">
		<Heading text="Devops" />
		<Typography>
			Put a bird on it man bun freegan semiotics edison bulb unicorn celiac cloud bread grailed you
			probably haven't heard of them street art shoreditch iPhone. Kinfolk locavore banh mi
			gluten-free irony trust fund.
		</Typography>
	</div>
</section>
<Divider --double-padding="0" />
<section>
	<div class="contact">
		<Typography variant={isMobile ? 'default' : 'large'} class="high"
			>Something to discuss?</Typography
		>
		<Typography variant={isMobile ? 'default' : 'h3'} class="normal block"
			>Drop us an email at <a href="mailto:hello@snaha.net">hello@snaha.net</a> or join our
			<a href="/">Discord server</a>.</Typography
		>
	</div>
</section>
<Divider --double-padding="0" />
<footer>
	<span>hello@snaha.net</span>
	<a href="mailto:hello@snaha.net">Contact us</a>
	<a href="https://github.com/snaha" target="_blank">Github</a>
	<a href="/">Discord</a>
	{#if !isMobile}
		<div class="grower"></div>
	{/if}
	<Typography class="high end">{new Date().getFullYear()}</Typography>
</footer>

<style>
	:global(.high) {
		color: var(--colors-high) !important;
	}
	:global(.yellow) {
		color: var(--colors-high-accent) !important;
	}
	:global(.normal) {
		font-weight: normal !important;
	}
	:global(.block) {
		display: block !important;
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
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		max-width: 560px;
		min-width: 364px;
		width: 100%;
	}
	.about-team {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--double-padding);
		flex: 1 0 0;
	}
	.icons {
		display: flex;
		align-items: center;
		gap: var(--double-padding);
		a {
			display: flex;
		}
	}
	.icons img {
		width: 32px;
		height: 32px;
	}
	a {
		color: var(--colors-high-accent);
	}
	.card {
		display: flex;
		flex-direction: column;
		gap: var(--double-padding);
		max-width: 352px;
		min-width: 221.33px;
		width: 100%;
	}
	.card > img {
		width: 100%;
		height: auto;
	}
	.contact {
		display: flex;
		flex-direction: column;
		gap: var(--half-padding);
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
			flex-wrap: wrap;
			gap: var(--padding);
		}
		section:has(.card) {
			gap: calc(2 * var(--double-padding));
		}
		.header .left {
			align-items: center;
			text-align: center;
			gap: var(--padding);
			img {
				width: 250px;
			}
			.logo {
				width: 150px;
				align-self: flex-start;
			}
		}
		.reverse {
			flex-direction: column-reverse;
		}
		.container {
			align-items: flex-start;
			min-width: unset;
		}
		.icons {
			gap: var(--padding);
		}
		.icons img {
			width: 24px;
			height: 24px;
		}
		.card {
			max-width: 560px;
			gap: var(--padding);
			img {
				max-width: 100%;
			}
		}
		footer {
			flex-direction: column;
		}
	}
</style>

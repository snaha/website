<script lang="ts">
	import Button from '$lib/components/diete/button.svelte'
	import Divider from '$lib/components/diete/divider.svelte'
	import Typography from '$lib/components/diete/typography.svelte'
	import Heading from '$lib/components/heading.svelte'
	import { base } from '$app/paths'

	let width = $state(0)
	const isMobile = $derived(width < 920)

	const companies = {
		Prezi: { icon: `${base}/icons/prezi.svg`, link: 'https://prezi.com' },
		Felfele: { icon: `${base}/icons/felfele.svg`, link: 'https://felfele.org' },
		CERN: { icon: `${base}/icons/cern.svg`, link: 'https://home.cern' },
		Giveth: { icon: `${base}/icons/giveth.svg`, link: 'https://giveth.io' },
		Swarm: { icon: `${base}/icons/swarm.svg`, link: 'https://www.ethswarm.org' },
		Logos: { icon: `${base}/icons/logos.svg`, link: 'https://logos.co' },
		Kalkul: { icon: `${base}/icons/kalkul.svg`, link: 'https://kalkul.app/' },
		Diete: { icon: `${base}/icons/diete.svg`, link: 'https://diete.design/' }
	}

	const coreTeam = [
		{
			name: 'Attila',
			img: `${base}/team/attila.png`,
			info: 'Attila is a full-stack engineer and engineering manager who keeps the team well-grounded in reality. Passionate about decentralized systems, cryptography, he goes out of his way to use open-source technology for everything… sometimes to the point where his audio during team calls becomes a heroic struggle. With a people-first approach to management, he knows that great tech is built by great teams.'
		},
		{
			name: 'David',
			img: `${base}/team/david.png`,
			info: "David is leading all design efforts at Snaha. He’s an advocate for purpose-driven design, products that elegantly serve people without taking centre stage. He loves solutions that use just the right amount of technology/resources and make the most out of it — maximum joy, minimum waste. He's somewhere on the line between being detail-oriented and obsessive."
		},
		{
			name: 'Vojtech',
			img: `${base}/team/vojtech.png`,
			info: 'Vojtech is full-stack software engineer with a knack for turning ideas into reality—especially when blockchain is involved. An eternal optimist, he’s the kind of developer who says, “We can build that tomorrow”—and does his best to make it happen. A lifelong dreamer, he’s driven by a desire to contribute to humanity, whether through volunteering, philanthropy, working with organizations pushing scientific progress or finding ways to make a difference in his own city.'
		}
	]
	let height = $state(0)
	let scrollY = $state(0)
	let navShown = $derived(height + (isMobile ? 16 : 64) <= scrollY)
	const top = $derived(isMobile ? 'var(--double-padding)' : 'var(--quadruple-padding)')
</script>

<svelte:window bind:innerWidth={width} bind:scrollY />
<nav class:navShown>
	<img src={`${base}/brand.svg`} alt="Brand" />
	<Button
		--colors-ultra-high="var(--colors-high-accent)"
		dimension={isMobile ? 'small' : 'compact'}
		href={`${base}/contact`}>CONTACT US</Button
	>
</nav>
<section class="header" bind:clientHeight={height}>
	<div class="left">
		<img src={`${base}/logo.svg`} alt="Logo" class="logo" />
		{#if isMobile}
			<img src={`${base}/header-img.png`} alt="Header" />
		{/if}
		<Typography variant={isMobile ? 'default' : 'h3'} class="normal block">
			The collective that turns worthy ideas into products. The idea is to make the web a tiny
			better for hoomans.</Typography
		>
		<Button
			--colors-ultra-high="var(--colors-high-accent)"
			dimension={isMobile ? 'compact' : 'large'}
			href={`${base}/contact`}>CONTACT US</Button
		>
	</div>
	{#if !isMobile}
		<img src={`${base}/header-img.png`} alt="Header" class="header-img" />
	{/if}
</section>
<Divider --double-padding="0" />
<section>
	<div class="container">
		<Heading text="human- friendly web" color="accent" large={!isMobile} {top} />
	</div>
	<div class="container">
		<Typography variant={isMobile ? 'default' : 'large'}
			>We’re a small, independent team defending privacy, freedom, and human interests using
			software products.
			<br /><br />We build for the web — sites, apps, web3 dapps, and other crypto-related projects.
		</Typography>
	</div>
</section>
<Divider --double-padding="0" />
<section class="reverse">
	<div class="about-team">
		<Typography variant={isMobile ? 'default' : 'large'} class="block">
			Attila and David met back in 2012, while working together at <a
				href={companies.Prezi.link}
				target="_blank">Prezi</a
			>. In 2019, they co-founded the
			<a href={companies.Felfele.link} target="_blank">Felfele Foundation</a>. Shortly after that,
			they met with Vojtech, <a href={companies.CERN.link} target="_blank">CERN</a> alumni and
			co-founder of
			<a href={companies.Giveth.link} target="_blank">Giveth</a>, while working with the
			<a href={companies.Swarm.link} target="_blank">Swarm Foundation</a>. Since then Attila, David
			and Vojtech have stuck together. They’ve worked with different teams at
			<a href={companies.Logos.link} target="_blank">Logos</a>
			and co-founded Snaha collective together. Besides helping selected clients, Snaha is bootstrapping
			<a href={companies.Kalkul.link} target="_blank">Kalkul</a>
			and developing
			<a href={companies.Diete.link} target="_blank">Diète</a>, its own open-source design system.
		</Typography>
		<div class="icons">
			{#each Object.entries(companies) as [company, { icon, link }]}
				<a href={link} target="_blank">
					<img src={icon} alt={company} />
				</a>
			{/each}
		</div>
	</div>
	<div class="container">
		<Heading text="our core team" color="accent" large={!isMobile} {top} />
	</div>
</section>
<section>
	{#each coreTeam as member}
		<div class="card">
			<img src={member.img} alt={member.name} />
			<Heading text={member.name} {top} />
			<Typography>{member.info}</Typography>
		</div>
	{/each}
</section>
<Divider --double-padding="0" />
<section>
	<div class="container">
		<Heading text="connect the dots" {top} color="accent" large={!isMobile} />
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
		<Typography style="display: block">
			We can help from defining the product scope and features all the way to the finest execution
			details. We typically use <a href="https://diete.design">Diète</a>, our own open-source design
			system, which can be customised into a unique visual direction. This allows us to move faster
			while ensuring quality and the highest accessibility standards.
		</Typography>
	</div>
	<div class="card">
		<Heading text="Full-stack" />
		<Typography>
			We create fast, maintainable, and accessible user interfaces with Svelte, focusing on high
			performance and seamless experiences across devices. Our backend systems provide a solid
			foundation, featuring APIs for business logic, efficient database management, and secure
			authentication. We prioritize scalability and maintainability while keeping our solutions
			simple.
		</Typography>
	</div>
	<div class="card">
		<Heading text="AI" />
		<Typography>
			We have experience in creating products that utilize AI models to solve complex problems with
			a special focus on usability. Our expertise spans text, image and video generation allowing us
			to create versatile solutions for various needs. We also trained custom models to enhance
			performance, optimizing both generation speed and the effectiveness of AI processes.
		</Typography>
	</div>
</section>
<section>
	<div class="card">
		<Heading text="Branding" />
		<Typography>
			Meaningful branding will help make your product stand out and help build brand loyalty. There
			should be a strong connection between the product and the brand. Based on product design, we
			can help with defining a brand concept and strategy, designing your product logo and
			actionable branding guidelines to build websites, marketing material and more.
		</Typography>
	</div>
	<div class="card">
		<Heading text="Marketing" />
		<Typography>
			Great design, code and branding are rarely enough to make a product successful. We can help
			crafting tailored marketing strategies and creative campaigns to reach the strategic audience
			for your product. We can help with writing content in line with your brand’s tone of voice and
			create all the required visual material to support marketing campaigns.
		</Typography>
	</div>
	<div class="card">
		<Heading text="DevOps" />
		<Typography>
			Successful products stand and fall with availability. A great user experience means nothing if
			your product is unreliable. We ensure that deployments are automated, infrastructure is
			scalable, and monitoring is in place to catch issues before they become problems. As they say,
			"Good infrastructure is invisible"—our goal is to make sure everything runs smoothly without
			anyone noticing.
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
			<a href="https://discord.gg/rrJ3c5DmBr">Discord server</a>.</Typography
		>
	</div>
</section>
<Divider --double-padding="0" />
<footer>
	<a href="mailto:hello@snaha.net">hello@snaha.net</a>
	<a href={`${base}/contact`}>Contact us</a>
	<a href="https://github.com/snaha" target="_blank">Github</a>
	<a href="https://discord.gg/rrJ3c5DmBr">Discord</a>
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
		flex-direction: row;
		align-items: flex-start;
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
	.header .header-img {
		width: 400px;
		height: 400px;
		align-self: center;
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
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--padding);
		background-color: var(--colors-ultra-low);
		position: fixed;
		z-index: 1;
		width: 100%;
		top: 0;
		left: 0;
		transform: translateY(-100%);
		img {
			width: 39px;
		}
	}
	.navShown {
		transition: transform 0.2s ease-in;
		transform: translateY(0);
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
		justify-content: flex-start;
		gap: var(--double-padding);
		max-width: 352px;
		min-width: 221px;
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
	footer > a {
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
		nav img {
			width: 31px;
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

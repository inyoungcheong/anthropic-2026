<script>
	import { onMount } from 'svelte';

	const cards = [
		{
			num: '01',
			challenge: 'Challenge 1',
			title: 'Public AI Safety Explainers',
			body: 'Anthropic produces research that matters beyond technical AI safety communities. I want to build interactive explainers, annotated briefings, and short research guides that preserve complexity while making findings usable for policymakers, journalists, and civil society.',
			links: [
				{ label: 'FAccT \'26 Paper', href: 'https://arxiv.org/abs/2510.22933' },
				{ label: 'COLM \'25 Survey (n=816)', href: 'https://arxiv.org/html/2411.05025v1' },
				{ label: 'Schmidt Science Award', href: 'https://www.schmidtsciences.org/ai-at-work/' }
			]
		},
		{
			num: '02',
			challenge: 'Challenge 2',
			title: 'Human Agency and Dependency Observatory',
			body: 'My central concern is gradual erosion of agency through ordinary AI interaction. I want to build a public-facing research series on dependency, manipulation, persuasion, and autonomy loss by combining legal analysis, empirical findings, and interactive storytelling.',
			links: [
				{ label: 'Michigan Tech Law Review', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5435335' },
				{ label: 'NPR Interview', href: 'https://open.spotify.com/episode/5dVHC4Bjdbo8ACcoRuxV5V' },
				{ label: 'Paris Talk', href: 'https://youtu.be/G48hDgad-gE' }
			]
		},
		{
			num: '03',
			challenge: 'Challenge 3',
			title: 'Regulating AI via AI',
			body: 'My Loyal Agents project translates 400+ legal scenarios into testable evaluation criteria for AI agents, using language models to adjudicate ambiguous cases from 13 legal perspectives. I want to adapt this pipeline to Anthropic models and test loyalty, disclosure, manipulation, and accountability in realistic conflicts.',
			links: [
				{ label: 'Loyal Agents Workshop', href: 'https://loyalagents.org/' },
				{ label: 'Consumer Reports Blog', href: 'https://innovation.consumerreports.org/encoding-loyalty-principles-into-ai-agents-behavior/' }
			]
		}
	];

	let activeIndex = $state(0);
	let stepElements = [];

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					const idx = Number(entry.target.getAttribute('data-step'));
					if (!Number.isNaN(idx)) activeIndex = idx;
				}
			},
			{
				root: null,
				threshold: 0.55
			}
		);

		for (const el of stepElements) {
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	});
</script>

<div class="projects-swap">
	<div class="card-stage">
		{#key activeIndex}
			<div class="project-card">
				<div class="project-header">
					<span class="num">{cards[activeIndex].num}</span>
					<span class="challenge-tag">{cards[activeIndex].challenge}</span>
				</div>
				<h3>{cards[activeIndex].title}</h3>
				<p>{cards[activeIndex].body}</p>
				<p class="work-label">Previous Work</p>
				<div class="links">
					{#each cards[activeIndex].links as link}
						<a href={link.href} target="_blank" rel="noopener">{link.label} ↗</a>
					{/each}
				</div>
			</div>
		{/key}
		<div class="progress-dots" aria-hidden="true">
			{#each cards as _, i}
				<span class:active={i === activeIndex}></span>
			{/each}
		</div>
	</div>

	<div class="scroll-steps" aria-hidden="true">
		{#each cards as card, i}
			<div
				class="swap-step"
				data-step={i}
				bind:this={stepElements[i]}
			></div>
		{/each}
	</div>
</div>

<style>
	.projects-swap {
		position: relative;
		width: min(100%, 656px);
		margin-inline: auto;
		box-sizing: border-box;
		overflow-x: clip;
	}

	.card-stage {
		position: sticky;
		top: 14vh;
		left: 0;
		z-index: 1;
		width: 100%;
		background: rgba(247, 243, 238, 0.88);
		backdrop-filter: blur(3px);
		border: 1px solid rgba(81, 99, 99, 0.22);
		border-radius: 14px;
		padding: 2rem 1.5rem 1.5rem;
		box-shadow: 0 10px 30px rgba(22, 29, 29, 0.06);
	}

	.project-card {
		min-height: 300px;
	}

	.scroll-steps {
		margin-top: -20vh;
		width: 100%;
		padding-bottom: 24vh;
	}

	.swap-step {
		height: 54vh;
	}

	.project-header {
		display: flex;
		align-items: baseline;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.num {
		font-family: var(--font-serif);
		font-size: clamp(2rem, 8vw, 3.5rem);
		font-weight: 400;
		color: var(--c-dark-teal);
		line-height: 1;
		opacity: 0.25;
	}

	.challenge-tag {
		font-family: var(--font-sans);
		font-size: 0.68rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: var(--c-dark-teal);
	}

	h3 {
		font-family: var(--font-serif);
		font-size: clamp(1.3rem, 4vw, 1.75rem);
		font-weight: 400;
		color: #2a3535;
		margin: 0 0 1rem;
		line-height: 1.3;
	}

	p {
		font-family: var(--font-sans);
		font-size: clamp(0.9rem, 2.5vw, 1rem);
		color: rgba(42, 53, 53, 0.7);
		line-height: 1.8;
		margin: 0 0 1.25rem;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.25rem;
	}
	.work-label {
		font-family: var(--font-sans);
		font-size: 0.66rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(42, 53, 53, 0.52);
		margin: 0 0 0.55rem;
	}

	.progress-dots {
		display: flex;
		gap: 0.45rem;
		margin-top: 1.2rem;
	}

	.progress-dots span {
		width: 7px;
		height: 7px;
		border-radius: 999px;
		background: rgba(81, 99, 99, 0.25);
		transition: transform 0.2s ease, background-color 0.2s ease;
	}

	.progress-dots span.active {
		transform: scale(1.2);
		background: rgba(81, 99, 99, 0.72);
	}

	a {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		color: var(--c-dark-teal);
		text-decoration: none;
		border-bottom: 1px solid rgba(81, 99, 99, 0.3);
		padding-bottom: 1px;
		transition: border-color 0.15s, opacity 0.15s;
	}

	a:hover {
		border-color: var(--c-dark-teal);
		opacity: 0.7;
	}

	@media (max-width: 768px) {
		.card-stage {
			top: 10vh;
			padding: 1.4rem 1rem 1.1rem;
		}

		.project-card {
			min-height: 340px;
		}

		.swap-step {
			height: 48vh;
		}
	}
</style>

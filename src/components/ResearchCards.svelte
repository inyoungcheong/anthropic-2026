<script>
	const projects = [
		{
			num: "01",
			label: "Public AI Safety Explainers",
			title: "Turn safety research into public infrastructure.",
			body: "Anthropic produces research that matters beyond technical AI safety communities. I want to build interactive explainers, annotated briefings, and short research guides that preserve complexity while making findings usable for policymakers, journalists, and civil society.",
			links: [
				{ label: "FAccT '26 Paper", href: "https://arxiv.org/abs/2510.22933" },
				{ label: "COLM '25 Survey", href: "https://arxiv.org/html/2411.05025v1" },
				{ label: "Schmidt Science Award", href: "https://www.schmidtsciences.org/ai-at-work/" }
			]
		},
		{
			num: "02",
			label: "Human Agency and Dependency Observatory",
			title: "Study ordinary moments where agency becomes fragile.",
			body: "My central concern is gradual erosion of agency through ordinary AI interaction. I want to build a public-facing research series on dependency, manipulation, persuasion, and autonomy loss by combining legal analysis, empirical findings, and interactive storytelling.",
			links: [
				{ label: "Michigan Tech Law Review", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5435335" },
				{ label: "NPR Interview", href: "https://open.spotify.com/episode/5dVHC4Bjdbo8ACcoRuxV5V" },
				{ label: "Paris Talk", href: "https://youtu.be/G48hDgad-gE" }
			]
		},
		{
			num: "03",
			label: "Law-Following Agents",
			title: "Use models to test the law-facing behavior of agents.",
			body: "My Loyal Agents project translates 400+ legal scenarios into testable evaluation criteria for AI agents, using language models to adjudicate ambiguous cases from 13 legal perspectives. I want to adapt this pipeline to Anthropic models and test loyalty, disclosure, manipulation, and accountability in realistic conflicts.",
			links: [
				{ label: "Loyal Agents Workshop", href: "https://loyalagents.org/" },
				{ label: "Consumer Reports Blog", href: "https://innovation.consumerreports.org/encoding-loyalty-principles-into-ai-agents-behavior/" }
			]
		}
	];
</script>

<div class="projects">
	{#each projects as project}
		<article class="project">
			<div class="project-num">{project.num}</div>
			<div class="project-main">
				<p class="label">{project.label}</p>
				<h3>{project.title}</h3>
				<p class="body">{project.body}</p>
				<div class="links" aria-label="Previous work">
					{#each project.links as link}
						<a href={link.href} target="_blank" rel="noopener">{link.label}</a>
					{/each}
				</div>
			</div>
		</article>
	{/each}
</div>

<style>
	.projects {
		width: min(100%, 860px);
		margin-top: 6vh;
		border-top: 1px solid rgba(37, 48, 48, 0.16);
		overflow: hidden;
	}

	.project {
		display: block;
		padding: clamp(2.4rem, 7vw, 5.6rem) 0;
		border-bottom: 1px solid rgba(37, 48, 48, 0.16);
	}

	.project-num {
		font-family: var(--font-serif);
		font-size: clamp(3.6rem, 11vw, 8.5rem);
		line-height: 0.9;
		color: rgba(37, 48, 48, 0.18);
		margin-bottom: 1.2rem;
	}

	.project-main {
		max-width: 720px;
		min-width: 0;
	}

	.label {
		margin: 0 0 1rem;
		font-family: var(--font-sans);
		font-size: 0.7rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgba(37, 48, 48, 0.58);
		overflow-wrap: anywhere;
	}

	h3 {
		margin: 0;
		font-family: var(--font-serif);
		font-size: clamp(2rem, 4.8vw, 4.2rem);
		font-weight: 400;
		line-height: 1.04;
		color: #253030;
		overflow-wrap: break-word;
	}

	.body {
		margin: 1.4rem 0 0;
		font-family: var(--font-sans);
		font-size: clamp(0.98rem, 1.35vw, 1.12rem);
		line-height: 1.8;
		color: rgba(37, 48, 48, 0.76);
		overflow-wrap: break-word;
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem 1.35rem;
		margin-top: 1.5rem;
	}

	a {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		color: #253030;
		text-decoration: none;
		border-bottom: 1px solid rgba(37, 48, 48, 0.3);
		padding-bottom: 2px;
	}

	a:hover {
		border-color: #253030;
	}

	@media (max-width: 768px) {
		.project-num {
			font-size: 4rem;
		}
	}
</style>

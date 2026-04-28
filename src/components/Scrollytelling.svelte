<script>
	import Scene from "$components/Scene.svelte";
	import ResearchCards from "$components/ResearchCards.svelte";
	import { scenes } from "$data/scenes.js";
</script>

<div class="page">
	<section class="hero">
		<img src="images/back.png" alt="" />
		<div class="hero-shade"></div>
		<div class="hero-copy">
			<p class="eyebrow">Inyoung Cheong / Anthropic</p>
			<h1>Building Public-Interest AI Research at Anthropic</h1>
			<p class="dek">
				A visual essay about moving from government and law into AI safety, and learning to
				translate difficult systems into forms people can scrutinize, understand, and act on.
			</p>
		</div>
	</section>

	<section class="prologue">
		<p>
			This story begins with translation across institutions, disciplines, technical systems,
			and publics.
		</p>
		<p>
			At the Anthropic Institute, I want to make AI safety research more legible, usable, and
			publicly accountable.
		</p>
		<p>
			The path here has moved through government offices, law classrooms, computer science
			labs, public talks, and tools built with Claude. Each setting taught me a different way
			to make complex systems answerable to people.
		</p>
	</section>

	{#each scenes as scene, index}
		<div style={`--beat-count: ${scene.beats.length};`}>
			<Scene {scene} {index} />
		</div>
	{/each}

	<section class="chapter" id="anthropic">
		<p class="eyebrow">Why Anthropic</p>
		<div class="chapter-copy">
			<p>
				I am drawn to Anthropic because its safety work does not remain inside a narrow
				research community. Publications on alignment faking, discrimination in model
				decisions, subjective global opinions in language models, and the Claude System Card
				have influenced how I think about public accountability in AI safety.
			</p>
			<p>
				AI safety is a technical problem, and it is also a problem of institutional trust,
				democratic oversight, and public understanding.
			</p>
			<p>
				Anthropic's public benefit structure and its record of acting on stated principles are
				why this is the place where I most want to continue this work.
			</p>
		</div>
	</section>

	<section class="chapter research" id="research">
		<p class="eyebrow">What I Would Build</p>
		<h2>Three projects I would start at the Anthropic Institute.</h2>
		<p class="lead">Each one grows from work already underway.</p>
		<ResearchCards />
	</section>

	<section class="chapter closing" id="forward">
		<p class="eyebrow">Looking Forward</p>
		<div class="chapter-copy">
			<p>
				At the Anthropic Institute, I want to understand what researchers are actively
				grappling with and help build clear channels for sharing those insights with the
				broader external community.
			</p>
			<p>
				I want to turn technical and policy findings into public-facing analysis that
				policymakers, journalists, civil society organizations, and researchers can use in
				real decisions.
			</p>
			<p class="final-line">
				Across government, law, computer science, and public communication, one through line
				remains. I translate difficult problems into forms institutions and publics can
				understand, scrutinize, and act on.
			</p>
		</div>
		<div class="footer-cta">
			<a href="mailto:iycheong@princeton.edu">iycheong@princeton.edu</a>
			<a href="https://inyoungcheong.github.io" target="_blank" rel="noopener">inyoungcheong.github.io</a>
		</div>
	</section>
</div>

<style>
	.page {
		min-height: 100vh;
		background: #070908;
		color: #fff;
	}

	.hero {
		position: relative;
		min-height: 94vh;
		overflow: hidden;
		display: flex;
		align-items: flex-end;
		padding: 0 6vw 8vh;
		box-sizing: border-box;
	}

	.hero img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-shade {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.72)),
			radial-gradient(circle at 76% 22%, transparent 0, rgba(0, 0, 0, 0.5) 58%);
	}

	.hero-copy {
		position: relative;
		z-index: 2;
		max-width: 920px;
	}

	.eyebrow {
		margin: 0 0 1.1rem;
		font-family: var(--font-sans);
		font-size: 0.7rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.7);
	}

	h1 {
		margin: 0;
		max-width: 920px;
		font-family: "DM Serif Display", var(--font-serif);
		font-size: clamp(2.5rem, 7vw, 6.4rem);
		font-style: italic;
		font-weight: 700;
		line-height: 0.98;
		color: #fff;
		text-shadow: 0 2px 28px rgba(0, 0, 0, 0.46);
	}

	.dek {
		max-width: 760px;
		margin: 1.5rem 0 0;
		font-family: var(--font-serif);
		font-size: clamp(1.05rem, 1.5vw, 1.35rem);
		line-height: 1.65;
		color: rgba(255, 255, 255, 0.86);
	}

	.prologue,
	.chapter {
		display: grid;
		grid-template-columns:
			minmax(1.2rem, 1fr)
			min(720px, calc(100% - 2.4rem))
			minmax(1.2rem, 1fr);
		padding: 14vh 0;
		background: #070908;
	}

	.prologue > *,
	.chapter > * {
		grid-column: 2;
	}

	.prologue p,
	.chapter-copy p,
	.lead {
		margin: 0 0 1.5rem;
		font-family: var(--font-serif);
		font-size: clamp(1.16rem, 1.6vw, 1.46rem);
		line-height: 1.72;
		color: rgba(255, 255, 255, 0.86);
	}

	.chapter {
		background: #f4f0eb;
		color: #253030;
	}

	.chapter .eyebrow {
		color: rgba(37, 48, 48, 0.58);
	}

	.chapter-copy p,
	.chapter .lead {
		color: rgba(37, 48, 48, 0.82);
	}

	.research {
		grid-template-columns:
			minmax(1.2rem, 1fr)
			min(1120px, calc(100% - 2.4rem))
			minmax(1.2rem, 1fr);
		padding-top: 10vh;
		padding-bottom: 0;
		overflow-x: hidden;
	}

	.research :global(.projects) {
		grid-column: 2;
		justify-self: start;
	}

	h2 {
		margin: 0 0 1rem;
		font-family: var(--font-serif);
		font-size: clamp(2rem, 5vw, 3.8rem);
		font-weight: 400;
		line-height: 1.12;
		color: #253030;
	}

	.final-line {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(37, 48, 48, 0.18);
		font-style: italic;
	}

	.footer-cta {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 2rem;
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(37, 48, 48, 0.18);
	}

	a {
		font-family: var(--font-sans);
		font-size: 0.92rem;
		color: #253030;
		text-decoration: none;
		border-bottom: 1px solid rgba(37, 48, 48, 0.32);
	}

	a:hover {
		border-color: #253030;
	}

	@media (max-width: 768px) {
		.hero {
			min-height: 88vh;
			padding: 0 1.1rem 7vh;
		}

		h1 {
			font-size: clamp(2.35rem, 13vw, 4rem);
		}

		.prologue,
		.chapter {
			padding: 10vh 0;
		}
	}
</style>

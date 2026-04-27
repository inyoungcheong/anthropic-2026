<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import scrollama from 'scrollama';
	import ResearchCards from '$components/ResearchCards.svelte';

	const asset = (path) => `${base}${path}`;

	const STEPS = [
		// ── Government ──
		{
			section: 'hook',
			eyebrow: '2012–2018 · Government',
			paras: [
				"I passed South Korea's national civil service exam, one of about a hundred finalists selected from 5,500 applicants. Over the next eight years I rotated across agencies and policy domains, including media regulation, data protection, and creative industries. I drafted legislation, led negotiations with parliament, wrote speeches for Presidents and Ministers, and navigated bustling press rooms."
			],
			media: { type: 'photo', src: '/images/govt_meeting.jpg', caption: 'Policy meeting at the Korea Communications Commission, 2014' }
		},
		{
			section: 'hook',
			pullQuote: 'The project I am most proud of.',
			paras: [
				"The curators of the National Museum of Korea had dreamed of immersive exhibition technology for decades. Every proposal came back rejected, dismissed as too expensive with no economic case. I reframed it as a technology innovation project, then walked it through the National Assembly and the Ministry of Finance. We secured $10 million and built one of the most advanced exhibition spaces in the world. Grammy-winning artist BTS shot a music video there."
			],
			media: { type: 'video', src: '/video/museum.mp4', muted: false, fit: 'contain' }
		},
		// ── Seattle ──
		{
			section: 'move',
			eyebrow: '2019–2021 · UW Law',
			paras: [
				"In 2019 I left Seoul on a Fulbright scholarship to study law at the University of Washington. I expected to stay in my lane as a legal scholar."
			],
			media: { type: 'photo', src: '/images/uw_law_friends_2019.jpg', caption: 'University of Washington Law School, 2019' }
		},
		{
			section: 'move',
			eyebrow: '2021–2024 · UW Law + CS',
			paras: [
				"One course on explainable AI pulled me into a computer science building I had never entered. I was hired as a research assistant in the CS department and spent three years embedded in two labs: the Privacy & Security Lab and the Social Futures Lab. This cross-departmental appointment required adapting from the solitary, long-form conventions of legal scholarship to the collaborative, conference-driven pace of CS research."
			],
			media: { type: 'photo', src: '/images/uwcs_2022.jpeg', caption: 'UW CS — Privacy & Security Lab and Social Futures Lab, 2022' }
		},
		{
			section: 'move',
			paras: [
				"I was the only person in the room who had drafted legislation and also sat through a machine learning lecture. That turned out to matter."
			],
			media: { type: 'photo', src: '/images/scholar_stanford_present_2022.jpg', caption: 'Trust & Safety Research Conference, Stanford, 2022', link: { href: 'https://youtu.be/U1ShVhIDlI8', label: 'Watch talk ↗' } }
		},
		{
			section: 'move',
			paras: [
				"By 2023, this line of work had become concrete. I presented Case Repositories, a project on case-based reasoning for AI alignment, at a NeurIPS workshop."
			],
			media: { type: 'photo', src: '/images/uw_presentation_neurips_2023.png', caption: 'NeurIPS 2023 MP2 Workshop', link: { href: 'https://arxiv.org/abs/2310.07019', label: 'Read paper ↗' } }
		},
		// ── Princeton ──
		{
			section: 'princeton',
			eyebrow: '2024–2026 · Postdoctoral Scholar',
			paras: [
				"After completing my doctorate in 2024, I joined Princeton's Center for Information Technology Policy as a postdoctoral researcher. CITP has broadened my collaboration network to computer scientists working on AI safety, machine learning, and natural language processing. Alongside my legal and policy research, I am now building datasets and running reinforcement learning pipelines.",
				"From April 2026, I hold a concurrent fellowship at Harvard's Berkman Klein Center."
			],
			media: { type: 'photo', src: '/images/princeton_citp_present_2025.jpeg', caption: 'Princeton CITP Seminar, 2025' }
		},
		{
			section: 'princeton',
			paras: [
				"I presented AI Mental States and Accountability at the inaugural Law-Following AI Workshop at the University of Cambridge. It was an invitation-only workshop with law and computer science faculty from the US and Europe. We focused on whether AI systems can be evaluated through legal concepts such as intent, reasons, and accountability."
			],
			media: { type: 'photo', src: '/images/scholar_uk_present_2025.jpg', caption: 'Law-Following AI Workshop, University of Cambridge, 2025', link: { href: 'https://www.youtube.com/watch?v=0ukHp98RlcQ', label: 'Watch talk ↗' } }
		},
		// ── Why Safe AI ──
		{
			section: 'safe',
			eyebrow: 'Why AI Safety',
			paras: [
				"I care about AI safety because many serious harms do not arrive as visible catastrophe. They appear gradually through erosion of agency in ordinary interactions with sophisticated systems. These harms can be psychological, relational, and hard to trace.",
				"Existing law is often poorly equipped to address them because legal doctrine usually requires a clear injury, a culpable actor, and a causal chain. The gap between what AI can do to people and what institutions can recognize remains central to my research."
			],
			media: { type: 'video', src: '/video/iasesai-small.mp4', muted: false, fit: 'contain', link: { href: 'https://youtu.be/G48hDgad-gE', label: 'Watch talk ↗' } }
		},
		{
			section: 'safe',
			paras: [
				"A teenager who turns to a chatbot every night may experience comfort, however that comfort is mediated by a system designed and governed by someone else. AI agents can feel personal while remaining structurally loyal to companies. These risks are not hypothetical to me. I have studied them, written about them, and presented them in Paris, Cambridge, and Princeton."
			],
			media: { type: 'video', src: '/video/iasesai-small.mp4', muted: false, fit: 'contain', link: { href: 'https://youtu.be/G48hDgad-gE', label: 'Watch talk ↗' } }
		},
		// ── Building Things ──
		{
			section: 'code',
			eyebrow: 'Building Things with Claude Code',
			paras: [
				"For years, my research outputs were papers, talks, and policy memos. I still value those forms, however I also became aware of their limits.",
				"I needed a better way to manage prompts for research pipelines, so I built vavaprompter in JavaScript with Claude."
			],
			media: { type: 'video', src: '/video/vavaprompter.mp4', muted: true, fit: 'contain', caption: 'vavaprompter — prompt management tool', link: { href: 'https://github.com/inyoungcheong/vavaprompter', label: 'github.com/inyoungcheong/vavaprompter ↗' } }
		},
		{
			section: 'code',
			paras: [
				"Then I built Would You Marry Superintelligence?, an interactive essay on emotional dependency on AI. I wrote, designed, and coded the full piece. It is forthcoming in the Research Handbook on Law in an Age of Superintelligence (Edward Elgar). Building changed how I communicate research. Rapid prototyping made it possible to test ideas quickly and turn abstract concerns into experiences readers can move through. I now study how to make research more reader-friendly, interactive, and publicly useful."
			],
			media: { type: 'video', src: '/video/vavaprompter.mp4', muted: true, fit: 'contain', caption: 'vavaprompter — prompt management tool', link: { href: 'https://github.com/inyoungcheong/vavaprompter', label: 'github.com/inyoungcheong/vavaprompter ↗' } }
		}
	];

	const SECTION_LABELS = {
		hook: '2012–2018 · Government',
		move: '2021–2024 · Law+CS',
		princeton: '2024–2026 · Postdoctoral Scholar',
		safe: 'Why AI Safety',
		code: 'Building Things'
	};

	let activeStep = $state(0);
	const activeMedia = $derived(STEPS[activeStep]?.media ?? null);
	const activeStepLabel = $derived(
		STEPS[activeStep]?.eyebrow ?? SECTION_LABELS[STEPS[activeStep]?.section] ?? ''
	);
	let showStepFlash = $state(true);
	let flashTimer;
	let bgAudio;
	let hasStartedBgAudio = false;

	function flashStepLabel() {
		showStepFlash = true;
		clearTimeout(flashTimer);
		flashTimer = setTimeout(() => {
			showStepFlash = false;
		}, 1200);
	}

	onMount(() => {
		bgAudio = new Audio(asset('/audio/background.mp3'));
		bgAudio.loop = true;
		bgAudio.volume = 0.45;
		const anthropicSection = document.getElementById('anthropic');
		let sectionObserver;

		const scroller = scrollama();
		scroller
			.setup({ step: '.scroll-step', offset: 0.5 })
			.onStepEnter(({ index }) => {
				activeStep = index;
				flashStepLabel();
			});

		if (anthropicSection) {
			sectionObserver = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (!entry.isIntersecting || hasStartedBgAudio || !bgAudio) continue;
						bgAudio.play().then(() => {
							hasStartedBgAudio = true;
						}).catch(() => {});
					}
				},
				{ threshold: 0.35 }
			);
			sectionObserver.observe(anthropicSection);
		}

		flashStepLabel();
		return () => {
			scroller.destroy();
			if (sectionObserver) sectionObserver.disconnect();
			clearTimeout(flashTimer);
			if (bgAudio) {
				bgAudio.pause();
				bgAudio = undefined;
			}
		};
	});
</script>

<div class="page">
	<section class="nyt-hero">
		<img class="nyt-hero-bg" src={asset('/images/back.png')} alt="" />
		<div class="nyt-hero-overlay"></div>
		<div class="nyt-hero-content">
			<h1>
				Building Public-Interest AI Research at Anthropic
			</h1>
			<p class="nyt-dek">
				A journey from government and law to AI safety research, and why I now focus on human
				agency, public accountability, and Anthropic's mission.
			</p>
		</div>
	</section>
	<div class="article-meta">
		<span>April 27, 2026</span>
		<span class="meta-sep">|</span>
		<span>Inyoung Cheong</span>
	</div>

	<div class="hero-line">
		<p>
			Hi, welcome 👋
		</p>
		<p>
			More than a biography, this is a story about translation. I have spent my career
			helping institutions understand difficult problems, from technology policy inside
			government to AI accountability in legal and technical research. At Anthropic, I hope
			to continue that work by making AI safety research more legible, usable, and publicly
			accountable.
		</p>
	</div>

	<!-- Interactive scroll section: text left, sticky media right -->
	<div class="story-layout">
		<!-- Left: scrolling text steps -->
		<div class="story-text">
			{#each STEPS as step, i}
				<div class="scroll-step" class:active={i === activeStep} data-step={i}>
					{#if step.eyebrow}
						<div class="ch-rule"></div>
						<span class="ch-eyebrow">{step.eyebrow}</span>
					{/if}
					{#if step.pullQuote}
						<blockquote class="pull-quote">{step.pullQuote}</blockquote>
					{/if}
					{#each step.paras as para, j}
						{#if para}
							<p class="ch-body" class:lead={j === 0}>{para}</p>
						{/if}
					{/each}
				</div>
			{/each}
		</div>

		<!-- Right: sticky media panel -->
		<div class="story-media">
			{#key activeMedia?.src}
				<div class="media-content" transition:fade={{ duration: 350 }}>
					{#if activeMedia?.type === 'photo'}
						<img class="media-fill" src={asset(activeMedia.src)} alt="" />
					{:else if activeMedia?.type === 'video'}
						<video
							class="media-fill"
							class:contain={activeMedia.fit === 'contain'}
							muted={activeMedia.muted ?? true}
							autoplay
							loop
							playsinline
						>
							<source src={asset(activeMedia.src)} type="video/mp4" />
						</video>
					{/if}
					{#if activeMedia?.caption}
						<div class="media-caption-bar">
							<span class="caption-text">{activeMedia.caption}</span>
							{#if activeMedia.link}
								<a href={activeMedia.link.href} target="_blank" rel="noopener" class="caption-link">
									{activeMedia.link.label}
								</a>
							{/if}
						</div>
					{/if}
				</div>
			{/key}
			<div class="media-step-flash" class:visible={showStepFlash} aria-live="polite">
				<span>{activeStepLabel}</span>
			</div>
		</div>

	</div>

	<!-- Full-width: Why Anthropic -->
	<section class="chapter-full" id="anthropic">
		<div class="ch-rule"></div>
		<span class="ch-eyebrow">Why Anthropic</span>

		<p class="ch-body">
			I am drawn to Anthropic because its safety work does not remain inside a narrow research
			community. Anthropic publications on alignment faking, discrimination in model
			decisions, subjective global opinions in language models, and the Claude System Card
			have influenced how I think about public accountability in AI safety.
		</p>
		<p class="ch-body">
			That matters to me because AI safety is not only a technical problem. It is also a
			problem of institutional trust, democratic oversight, and public understanding.
		</p>
		<p class="ch-body">
			I also value Anthropic's policy posture. The company supported SB-1047, endorsed
			transparency-focused regulation, and maintained safety guardrails under political
			pressure. I see those decisions as part of a commitment to public scrutiny through
			legislation and transparent process.
		</p>
		<p class="ch-body">
			Anthropic's public benefit structure and its record of acting on stated principles are
			why this is the place where I most want to do this work.
		</p>
	</section>

	<!-- Full-width: Research -->
	<section class="chapter-full chapter-research" id="research">
		<div class="ch-rule"></div>
		<span class="ch-eyebrow">What I Would Build</span>
		<h2 class="ch-title">Three projects.<br />Ready on day one.</h2>
		<p class="ch-lead">These are not aspirational goals. They are extensions of work already underway.</p>
		<div class="research-cards-wrap">
			<ResearchCards />
		</div>
	</section>

	<!-- Full-width: Looking Forward -->
	<section class="chapter-full chapter-forward" id="forward">
		<div class="ch-rule"></div>
		<span class="ch-eyebrow">Looking Forward</span>

		<p class="ch-body">
			At the Anthropic Institute, I want to do three things that I cannot do anywhere else.
		</p>
		<p class="ch-body">
			First, understand what Anthropic researchers are actively grappling with and help build
			clear channels for sharing those insights with the broader external community.
		</p>
		<p class="ch-body">
			Second, turn technical and policy findings into public-facing analysis that
			policymakers, journalists, civil society organizations, and researchers can use in real
			decisions.
		</p>
		<p class="ch-body">
			Third, strengthen cross-disciplinary collaboration across computer science, law, ethics,
			and political theory, where many of the highest-stakes AI questions now sit.
		</p>

		<div class="closing-line">
			<p>Across government, law, computer science, and public communication, one through line remains.<br />I translate difficult problems into forms institutions and publics can understand, scrutinize, and act on.</p>
		</div>

		<div class="footer-cta">
			<a href="mailto:iycheong@princeton.edu" class="cta-link">iycheong@princeton.edu</a>
			<a href="https://inyoungcheong.github.io" target="_blank" rel="noopener" class="cta-link">inyoungcheong.github.io ↗</a>
		</div>
	</section>

</div>

<style>
	/* ── Page wrapper ── */
	.page {
		min-height: 100vh;
		background:
			linear-gradient(
				to bottom,
				#050607 0%,
				#0b1114 46%,
				#1a2429 54%,
				#f0ece6 64%,
				#ffffff 100%
			);
	}
	.nyt-hero {
		position: relative;
		height: 92vh;
		min-height: 620px;
		max-height: 980px;
		overflow: hidden;
	}
	.nyt-hero-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.nyt-hero-overlay {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.36), transparent 52%),
			linear-gradient(to bottom, rgba(0, 0, 0, 0.46) 0%, rgba(0, 0, 0, 0.62) 100%);
	}
	.nyt-hero-content {
		position: absolute;
		left: 2rem;
		top: 2.2rem;
		max-width: 900px;
		padding: 0;
		box-sizing: border-box;
		color: #fff;
		z-index: 2;
	}
	.nyt-hero-content h1 {
		margin: 0;
		font-family: "Times New Roman", var(--font-serif);
		font-size: clamp(2.2rem, 5.8vw, 4.8rem);
		font-style: italic;
		font-weight: 700;
		line-height: 1.02;
		max-width: 900px;
		letter-spacing: -0.01em;
		text-shadow: 0 2px 18px rgba(0, 0, 0, 0.48);
	}
	.nyt-dek {
		margin: 1.6rem 0 0;
		font-family: var(--font-serif);
		font-size: clamp(1.05rem, 1.25vw, 1.24rem);
		font-weight: 400;
		line-height: 1.62;
		color: rgba(255, 255, 255, 0.92);
		max-width: 780px;
		text-shadow: 0 1px 10px rgba(0, 0, 0, 0.44);
	}
	.article-meta {
		max-width: 720px;
		margin: 0 auto;
		padding: 1.6rem 2rem 0.4rem;
		box-sizing: border-box;
		font-family: var(--font-sans);
		font-size: 0.7rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.78);
		display: flex;
		align-items: center;
		gap: 0.55rem;
	}
	.meta-sep {
		opacity: 0.55;
	}

	/* ── Hero ── */
	.hero-line {
		max-width: 720px;
		margin: 0 auto;
		padding: 6vh 2rem 6vh;
		box-sizing: border-box;
		background: #050607;
	}
	.hero-line p {
		font-family: var(--font-serif);
		font-size: clamp(1.05rem, 1.25vw, 1.24rem);
		font-weight: 400;
		color: rgba(255, 255, 255, 0.92);
		line-height: 1.85;
		margin: 0 0 1.9rem;
	}
	.hero-line p:last-child {
		margin-bottom: 0;
	}
	.hero-line p:first-child {
		font-size: clamp(1.3rem, 1.6vw, 1.55rem);
		line-height: 1.45;
		margin-bottom: 2.1rem;
	}
	.story-layout {
		margin-top: 4.5vh;
	}

	/* ── Story layout: text left | sticky media right ── */
	.story-layout {
		display: grid;
		grid-template-columns: 1fr;
		align-items: start;
	}

	/* Text column */
	.story-text {
		padding: 0 1.5rem 10vh;
		max-width: 100%;
		order: 2;
	}
	.story-layout .ch-rule {
		background: rgba(255, 255, 255, 0.22);
	}
	.story-layout .ch-eyebrow {
		color: rgba(255, 255, 255, 0.8);
	}
	.story-layout .ch-body {
		color: rgba(255, 255, 255, 0.88);
	}
	.story-layout .ch-body.lead {
		color: #ffffff;
	}
	.story-layout .pull-quote {
		color: rgba(255, 255, 255, 0.94);
	}
	.story-layout .scroll-step:not(.active) .ch-body {
		color: rgba(255, 255, 255, 0.56);
	}

	/* Each scroll step: tall enough for scroll rhythm */
	.scroll-step {
		min-height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 6vh 0;
		opacity: 1;
		transition: opacity 0.25s ease;
		border-left: none;
		padding-left: 0;
	}
	.scroll-step.active {
		opacity: 1;
		border-left-color: transparent;
	}

	/* Sticky media panel */
	.story-media {
		position: sticky;
		top: 0;
		height: 45vh;
		overflow: hidden;
		background: #0a0f12;
		order: 1;
		z-index: 0;
	}
	.media-step-flash {
		position: absolute;
		top: 1.1rem;
		left: 1.1rem;
		z-index: 4;
		opacity: 0;
		transition: opacity 0.35s ease;
		pointer-events: none;
	}
	.media-step-flash.visible {
		opacity: 1;
	}
	.media-step-flash span {
		display: inline-block;
		font-family: var(--font-sans);
		font-size: 0.68rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.92);
		background: rgba(12, 18, 18, 0.52);
		border: 1px solid rgba(255, 255, 255, 0.28);
		border-radius: 999px;
		padding: 0.4rem 0.7rem 0.38rem;
		backdrop-filter: blur(2px);
	}

	.media-content {
		position: absolute;
		inset: 0;
	}
	.media-fill {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.media-fill.contain {
		object-fit: contain;
		background: #000;
	}

	/* Caption gradient bar */
	.media-caption-bar {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 3rem 1.5rem 1.5rem;
		background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%);
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}
	.caption-text {
		font-family: var(--font-sans);
		font-size: 0.82rem;
		color: rgba(255,255,255,0.82);
		line-height: 1.5;
	}
	.caption-link {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		color: rgba(255,255,255,0.62);
		text-decoration: none;
		border-bottom: 1px solid rgba(255,255,255,0.2);
		width: fit-content;
		transition: color 0.15s, border-color 0.15s;
	}
	.caption-link:hover {
		color: #fff;
		border-color: #fff;
	}

	/* ── Text elements ── */
	.ch-rule {
		height: 1px;
		background: rgba(81, 99, 99, 0.2);
		margin-bottom: 1.5rem;
	}
	.ch-eyebrow {
		display: block;
		font-family: var(--font-sans);
		font-size: 0.68rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--c-dark-teal);
		margin-bottom: 1.25rem;
	}
	.ch-body {
		font-family: var(--font-serif);
		font-size: clamp(1.05rem, 1.25vw, 1.24rem);
		color: #2a3535;
		line-height: 1.85;
		margin: 0 0 1.25rem;
		transition: color 0.2s ease;
	}
	.ch-body.lead {
		font-size: clamp(1.18rem, 1.35vw, 1.42rem);
		line-height: 1.62;
		color: #1e2a2a;
		margin-bottom: 1.35rem;
	}
	.scroll-step:not(.active) .ch-body {
		color: rgba(42, 53, 53, 0.62);
	}
	.pull-quote {
		font-family: var(--font-serif);
		font-size: clamp(1.3rem, 3.5vw, 2rem);
		font-weight: 400;
		font-style: italic;
		color: var(--c-dark-teal);
		line-height: 1.3;
		margin: 0 0 1.5rem;
		border: none;
		padding: 0;
	}

	/* ── Full-width chapters ── */
	.chapter-full {
		display: grid;
		grid-template-columns:
			minmax(2rem, 1fr)
			min(calc(100% - 4rem), 656px)
			minmax(2rem, 1fr);
		padding: 8vh 0 6vh;
	}
	.chapter-full > * {
		grid-column: 2;
	}

	.chapter-research { padding-top: 10vh; }
	.chapter-forward  { padding-top: 6vh;  }
	#anthropic,
	.chapter-research,
	.chapter-forward {
		background: rgba(255, 255, 255, 0.9);
	}
	#anthropic {
		margin-top: 7vh;
		padding-top: 10vh;
	}
	.research-cards-wrap {
		width: 100%;
		max-width: 656px;
	}

	.ch-title {
		font-family: var(--font-serif);
		font-size: clamp(1.8rem, 6vw, 3rem);
		font-weight: 400;
		color: #2a3535;
		line-height: 1.2;
		margin: 0 0 1rem;
	}
	.ch-lead {
		font-family: var(--font-serif);
		font-size: clamp(1rem, 2.5vw, 1.1rem);
		color: rgba(42, 53, 53, 0.65);
		line-height: 1.8;
		margin: 0 0 3rem;
	}

	.closing-line {
		margin: 3.5rem 0 2.5rem;
		padding: 2.5rem 0;
		border-top: 1px solid rgba(81, 99, 99, 0.15);
		border-bottom: 1px solid rgba(81, 99, 99, 0.15);
	}
	.closing-line p {
		font-family: var(--font-serif);
		font-size: clamp(1.15rem, 3vw, 1.5rem);
		font-style: italic;
		color: var(--c-dark-teal);
		line-height: 1.6;
		margin: 0;
	}

	.footer-cta {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		padding-top: 3rem;
		border-top: 1px solid rgba(42, 53, 53, 0.12);
	}
	.cta-link {
		font-family: var(--font-sans);
		font-size: 0.95rem;
		color: var(--c-dark-teal);
		text-decoration: none;
		border-bottom: 1px solid rgba(81, 99, 99, 0.3);
		padding-bottom: 1px;
		width: fit-content;
		transition: border-color 0.15s;
	}
	.cta-link:hover { border-color: var(--c-dark-teal); }

	/* ── Mobile ── */
	@media (max-width: 768px) {
		.nyt-hero {
			height: 78vh;
			min-height: 520px;
		}
		.nyt-hero-content {
			left: 1rem;
			top: 1.2rem;
		}
		.nyt-hero-content h1 {
			font-size: clamp(1.85rem, 8.5vw, 2.8rem);
			line-height: 1.05;
		}
		.nyt-dek {
			margin-top: 1rem;
			font-size: clamp(0.95rem, 3.8vw, 1.06rem);
			line-height: 1.55;
			max-width: 95%;
		}
		.article-meta {
			padding: 1rem 1rem 0;
			font-size: 0.62rem;
			letter-spacing: 0.12em;
		}
		.hero-line {
			padding: 6.5vh 1rem 6vh;
		}
		.hero-line p {
			margin-bottom: 1.5rem;
		}
		.hero-line p:first-child {
			font-size: 1.35rem;
			margin-bottom: 1.7rem;
		}
		.story-layout {
			margin-top: 3.2vh;
		}
		.story-text {
			padding: 0 1rem 10vh;
		}
		.story-layout .ch-rule {
			background: rgba(255, 255, 255, 0.18);
		}
		.story-layout .ch-body {
			color: rgba(255, 255, 255, 0.9);
		}
		.story-media {
			height: 45vh;
		}
		.media-step-flash {
			top: 0.6rem;
			left: 0.6rem;
		}
		.media-step-flash span {
			font-size: 0.62rem;
			letter-spacing: 0.12em;
		}
		.scroll-step {
			min-height: 58vh;
		}
		.footer-cta {
			flex-direction: column;
		}
	}

	@media (min-width: 769px) {
		.footer-cta { flex-direction: row; gap: 2rem; }
	}
</style>

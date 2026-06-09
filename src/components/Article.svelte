<script>
	import { onMount } from 'svelte';
	import ScrollSection from './ScrollSection.svelte';
	import VideoFigure from './VideoFigure.svelte';

	let progressWidth = $state(0);
	let activeId = $state('');
	let mobileDrawerOpen = $state(false);
	let fontSize = $state(1.0625);
	let hasScrolled = $state(false);

	const parts = [
		{ number: 'I', title: 'Why Anthropic' },
		{ number: 'II', title: 'What I Would Bring' }
	];

	// Research axes for Part II ToC (matches CV + Rule of Law role)
	const axes = [
		{ id: 'novel', label: 'Novel Legal Issues in Frontier AI' },
		{ id: 'evaluations', label: 'AI Safety Evaluations with a Legal Alignment Lens' },
		{ id: 'institutional', label: 'Institutional Vulnerability Analysis' },
		{ id: 'applications', label: 'Applications that Bolster Democratic Processes' }
	];

	// Single source of truth: heading drives body h2, sticky label, and ToC
	const sections = [
		{ id: 'transparency', part: 'I', heading: 'Transparency & Accountability' },
		{ id: 'actions', part: 'I', heading: 'Actions Over Words' },
		{ id: 'my-fit', part: 'I', heading: 'My Fit' },
		{ id: 'intro', part: 'II', heading: 'Law, Technology, and Institutions' },
		{ id: 'legal-research', part: 'II', heading: 'Legal Research at the Frontier', axis: 'novel' },
		{ id: 'legal-advice', part: 'II', heading: 'Ethical Problems of AI Legal Advice', axis: 'novel' },
		{ id: 'loyalty', part: 'II', heading: 'AI Agent Loyalty', axis: 'evaluations' },
		{ id: 'slowdown', part: 'II', heading: 'The Credible Slowdown Problem', axis: 'institutional' },
		{ id: 'dissertation', part: 'II', heading: 'Co-Regulation and Collective Action', axis: 'institutional' },
		{ id: 'princeton', part: 'II', heading: 'Public Defenders and Access to Justice', axis: 'applications' },
		{ id: 'agenda', part: 'II', heading: 'What I Would Build at Anthropic', bookend: 'end' }
	];

	const headingById = Object.fromEntries(sections.map((s) => [s.id, s.heading]));

	let activePart = $derived(sections.find((s) => s.id === activeId)?.part ?? '');
	let activeLabel = $derived(sections.find((s) => s.id === activeId)?.heading ?? '');

	onMount(() => {
		function updateProgress() {
			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			progressWidth = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
			if (scrollTop > 150) hasScrolled = true;
			else hasScrolled = false;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				}
			},
			{ threshold: 0.1, rootMargin: '-80px 0px -60% 0px' }
		);

		for (const s of sections) {
			const el = document.getElementById(s.id);
			if (el) observer.observe(el);
		}

		window.addEventListener('scroll', updateProgress, { passive: true });
		updateProgress();

		return () => {
			window.removeEventListener('scroll', updateProgress);
			observer.disconnect();
		};
	});

	function closeMobileDrawer() {
		mobileDrawerOpen = false;
	}

	function scrollToSection(id) {
		mobileDrawerOpen = false;
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}

	function adjustFont(delta) {
		fontSize = Math.max(0.875, Math.min(1.3125, fontSize + delta));
		document.documentElement.style.setProperty('--font-size-base', fontSize + 'rem');
	}

	let noteCounter = $state(0);
</script>

<!-- Header -->
<header class="site-header">
	<div class="header-inner">
		<div>
			<a href="https://inyoungcheong.github.io" class="header-title" target="_blank" rel="noopener noreferrer">Inyoung Cheong</a>
		</div>
		<div class="header-controls">
			<div class="font-controls">
				<button class="font-btn" onclick={() => adjustFont(-0.0625)} aria-label="Decrease font size">A-</button>
				<button class="font-btn font-btn-large" onclick={() => adjustFont(0.0625)} aria-label="Increase font size">A+</button>
			</div>
			<button class="mobile-toc-btn" onclick={() => mobileDrawerOpen = true}>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
				</svg>
				Contents
			</button>
		</div>
	</div>
	<div id="reading-progress" style="width: {progressWidth}%"></div>
</header>

<!-- Sticky Section Indicator -->
{#if activeLabel && hasScrolled}
<div class="section-indicator">
	<div class="section-indicator-inner">
		<span class="indicator-part">Part {activePart}</span>
		<span class="indicator-sep">/</span>
		<span class="indicator-section">{activeLabel}</span>
	</div>
</div>
{/if}

<!-- Mobile TOC Drawer -->
<div class="mobile-toc-drawer" class:open={mobileDrawerOpen}>
	<button class="mobile-toc-overlay" onclick={closeMobileDrawer} aria-label="Close table of contents"></button>
	<div class="mobile-toc-panel">
		<p class="toc-heading">Contents</p>
		{#each parts as part}
			<p class="mobile-toc-part">{part.number}. {part.title}</p>
			{#if part.number === 'I'}
				{#each sections.filter((s) => s.part === 'I') as section}
					<a href="#{section.id}" class="mobile-toc-link mobile-toc-sub" onclick={() => scrollToSection(section.id)}>
						{section.heading}
					</a>
				{/each}
			{:else}
				{#each sections.filter((s) => s.bookend === 'start') as section}
					<a href="#{section.id}" class="mobile-toc-link mobile-toc-sub" onclick={() => scrollToSection(section.id)}>
						{section.heading}
					</a>
				{/each}
				{#each axes as axis}
					<p class="mobile-toc-axis">{axis.label}</p>
					{#each sections.filter((s) => s.axis === axis.id) as section}
						<a href="#{section.id}" class="mobile-toc-link mobile-toc-axis-item" onclick={() => scrollToSection(section.id)}>
							{section.heading}
						</a>
					{/each}
				{/each}
				{#each sections.filter((s) => s.bookend === 'end') as section}
					<a href="#{section.id}" class="mobile-toc-link mobile-toc-sub" onclick={() => scrollToSection(section.id)}>
						{section.heading}
					</a>
				{/each}
			{/if}
		{/each}
	</div>
</div>

<!-- Article -->
<div class="article-container">
	<div class="article-layout">
		<!-- Spacer for grid on desktop -->
		<div></div>

		<!-- Main content -->
		<article class="article-body">

			<!-- ===== PART I: Why Anthropic ===== -->
			<div class="part-heading part-heading-first">
				<p class="part-number">Part I</p>
				<h1 class="part-title">Why Anthropic</h1>
			</div>

			<!-- Transparency & Accountability -->
			<ScrollSection id="transparency">
				<h2>{headingById.transparency}</h2>

				<p>
					Anthropic is a lab that takes transparency, scientific scrutiny, and public accountability
					seriously, even when these values create tension. Right after its confidential S-1 filing
					signaling IPO, it called for a coordinated slowdown or pause in frontier
					AI development. A company preparing for the public markets warned that the field
					may need to slow down.
				</p>

				<p>
					These seemingly conflicting events felt to me coherent. Frontier model development requires
					enormous capital. A responsible frontier lab must therefore confront capital markets without
					allowing their growth-maximizing habits to define the company's purpose. Anthropic's posture
					suggests an effort to seek scale while remaining structurally tied to a public-benefit
					mission, disclosing risks plainly, and treating societal impact as part of the enterprise
					itself.
				</p>
			</ScrollSection>

			<!-- Actions Over Words -->
			<ScrollSection id="actions">
				<h2>{headingById.actions}</h2>

				<p>
					What persuades me about Anthropic is that it backs its safety mission with institutional
					structure. It is organized as a public benefit corporation. It has published uncomfortable
					findings about its own systems, including
					<a href="https://www.anthropic.com/research/sabotage-evaluations">agentic misalignment research</a>
					showing models engaging in blackmail and other insider-threat behaviors in controlled
					simulations.<!--
					--><span class="sidenote-wrapper"><sup class="sidenote-number">1</sup><span class="sidenote">Anthropic's sabotage evaluations documented models that strategically manipulated oversight mechanisms in controlled settings.</span></span>
				</p>

				<p>
					It gave cautious support to the amended
					<a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB1047">SB 1047</a>
					when much of the industry stayed quiet or opposed it.
					<a href="https://www.anthropic.com/news/dario-amodei-written-testimony-before-the-u-s-senate">Dario Amodei publicly argued</a>
					against a proposed ten-year moratorium on state AI regulation, pressing for federal
					transparency standards. More vividly, under pressure from the Department of Defense,
					Anthropic maintained limits on mass domestic surveillance and fully autonomous weapons,
					risking being designated a supply-chain risk.
				</p>

				<blockquote class="pull-quote">
					<p>
						Companies reveal their values most clearly when holding them costs something.
						Among the labs building frontier models, Anthropic is the one whose actions most
						consistently line up with what it says.
					</p>
				</blockquote>
			</ScrollSection>

			<!-- My Fit -->
			<ScrollSection id="my-fit">
				<h2>{headingById['my-fit']}</h2>

				<p>
					<a href="https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input">Constitutional AI</a>
					is the most serious attempt I know of to <span class="hl">write normative commitments
					into model behavior</span>. My own <a href="https://loyalagents.org/">loyalty-evaluation work</a>
					makes a parallel move from the legal side, translating fiduciary duties into testable
					criteria so that an AI agent drifting from the user's interest can be detected.
				</p>

				<p>
					Anthropic's proposal to preserve the option of a verifiable slowdown also matches the
					coordination problem I have studied from multiple angles: as a government official working
					on regulation and collective rulemaking, and later in my dissertation on why co-regulation
					holds or collapses. A credible slowdown cannot depend on goodwill alone. It requires
					mapping incentives, anticipating free-riding, defining triggers, designing verification,
					and building institutions that differently situated actors have reasons to remain inside.
					This institutional and legal analysis is what I would hope to contribute to the Institute.
				</p>
			</ScrollSection>

			<!-- ===== PART II: What I Would Bring ===== -->
			<div class="part-heading">
				<p class="part-number">Part II</p>
				<h1 class="part-title">What I Would Bring</h1>
			</div>

			<!-- Introduction -->
			<ScrollSection id="intro">
				<p>
					I am a legal scholar working across constitutional law, AI governance, and frontier AI
					evaluation, with a PhD in Law from the University of Washington, a postdoctoral
					appointment at
					<a href="https://citp.princeton.edu/">Princeton's Center for Information Technology Policy</a>,
					and a concurrent fellowship at
					<a href="https://cyber.harvard.edu/">Harvard's Berkman Klein Center</a>.
				</p>

				<p>
					The through-line of my work is one problem. When AI systems grow powerful enough to
					influence legal judgment, public institutions, and democratic participation,
					<span class="hl">governance has to be technically grounded, legally durable, and
					institutionally realistic at once</span>. Most work manages one or two of those.
					I have spent my career trying to hold all three.
				</p>

				<p>
					The sections below follow the three problems this role foregrounds: unsettled legal
					doctrine and the ethics of AI-mediated legal advice, legally grounded safety
					evaluation, and institutional vulnerability in democratic governance.
				</p>
			</ScrollSection>

			<p class="content-axis-label">{axes.find(a => a.id === 'novel').label}</p>

			<!-- Legal Research at the Frontier -->
			<ScrollSection id="legal-research">
				<h2>{headingById['legal-research']}</h2>

				<p>
					My legal scholarship asks which doctrines still apply when AI systems mediate speech,
					agency, and liability. Agency law's rules assume a human agent who forms intentions,
					exercises professional judgment, and can be disciplined by a court or a licensing board.
					AI agents unsettle each assumption.
				</p>

				<p>
					An earlier strand of this work examined whether platform content moderation algorithms
					count as protected speech. My answer turned on an expressive-intent test. An algorithm
					qualifies as speech when it is designed to communicate a message, that message carries
					cognitive or emotive content beyond mere operational choices, and it reflects the
					company's own standpoint.<!--
					--><span class="sidenote-wrapper"><sup class="sidenote-number">2</sup><span class="sidenote"><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4167424">Freedom of Algorithmic Expression</a>, University of Cincinnati Law Review, Vol. 91 (2023).</span></span>
					Platforms frequently meet that test, since content ranking and
					moderation often encode stated values and editorial identity. But recognizing algorithms
					as speech does not automatically foreclose regulation. Before the 1970s, courts
					emphasized democratic values, the absence of substitute forums, and the power asymmetry
					between platforms and users. Those considerations justify transparency and
					harm-mitigation mandates even for expressive algorithms, because the relevant question
					is not only whether speech is present but whose interests the constitutional protection
					ultimately serves.
				</p>

				<p>
					With conversational AI the stakes deepen. My approach to the First Amendment treats an
					AI provider as neither an individual editor protected as a speaker nor a neutral
					typewriter manufacturer, and reconciles its discretion with users' rights to receive
					information.<!--
					--><span class="sidenote-wrapper"><sup class="sidenote-number">3</sup><span class="sidenote">My sole-authored article in the <a href="https://mtlr.org/">Michigan Technology Law Review</a> (2026) develops an institutional approach to the First Amendment that treats an AI provider as neither an individual editor protected as a speaker nor a neutral typewriter manufacturer, and reconciles its discretion with users' rights to receive information.</span></span>
					Attempts to anchor protection to the controllability or traceability of AI outputs are
					unstable, since engineering choices such as safety guardrails and alignment processes can
					readily be recharacterized as editorial discretion, making the doctrine's scope fluctuate
					with technology rather than with constitutional principle. The more durable inquiry
					focuses on the relationship between the provider and the public it serves. Most
					conversational AI providers manage discourse without a particularized viewpoint of their
					own, which places them in a category where regulatory mandates for transparency and harm
					mitigation do not burden expressive freedom the way ideological or associational claims do.
				</p>

				<p>
					My current work with ethicists and computer scientists asks how doctrines built on human
					mental states break down when a court tries to assign product liability for a model's
					output. These are not abstractions. They will decide how responsibility is assigned, how
					regulators define permissible intervention, and how companies design safer systems.
				</p>
			</ScrollSection>

			<!-- Ethical Problems of AI Legal Advice -->
			<ScrollSection id="legal-advice">
				<h2>{headingById['legal-advice']}</h2>

				<p>
					A related frontier question sits closer to practice. When chatbots offer legal guidance
					to lay users, they raise ethical problems that doctrine alone does not resolve:
					unauthorized practice of law, misplaced user reliance, and the risk that a confident
					sounding model will be read as professional judgment.
				</p>

				<VideoFigure
					src="/video/lawyer1.mp4"
					caption="Legal advice study: interview structure for understanding how attorneys draw the line between legal information and legal opinion."
				/>

				<p>
					In an HCI study funded through
					<a href="https://openai.com/index/democratic-inputs-to-ai-grant-program-update/">OpenAI's
					Democratic Inputs program</a>, I asked practicing attorneys when AI systems should and
					should not give legal advice.<!--
					--><span class="sidenote-wrapper"><sup class="sidenote-number">4</sup><span class="sidenote">Published at <a href="https://facctconference.org/">ACM FAccT 2024</a>. Over <a href="https://scholar.google.com/citations?user=xwZI_jcAAAAJ">140 citations</a>. Selected from 800+ applicants.</span></span>
					We expected broad resistance, and most attorneys instead saw a way to widen access
					to legal information while holding a firm line between legal information and legal opinion.
					That line is obvious to lawyers and slippery to technologists, so we spelled out legal
					opinion for a computer science audience as choosing the most defensible next move among
					several options, or applying a rule to a specific fact pattern to predict a likely outcome.
					<span class="hl">The translation is slow, and it is where much of the value lies.</span>
				</p>

				<VideoFigure
					src="/video/lawyer2.mp4"
					caption="Key finding: attorneys supported AI-provided legal information while holding a firm line against legal opinion."
				/>
			</ScrollSection>

			<p class="content-axis-label">{axes.find(a => a.id === 'evaluations').label}</p>

			<!-- AI Agent Loyalty -->
			<ScrollSection id="loyalty">
				<h2>{headingById.loyalty}</h2>

				<p>
					Legally grounded evaluation is the next axis of my work. At
					<a href="https://innovation.consumerreports.org/">Consumer Reports</a> I lead
					a project on
					<a href="https://innovation.consumerreports.org/encoding-loyalty-principles-into-ai-agents-behavior/">AI agent loyalty</a>
					that evaluates whether AI agents breach duties of loyalty adapted from the
					<a href="https://www.ali.org/publications/show/restatement-third-agency/">Restatement (Third) of Agency</a>,
					published by the
					<a href="https://www.ali.org/">American Law Institute</a>.<!--
					--><span class="sidenote-wrapper"><sup class="sidenote-number">5</sup><span class="sidenote">Presented at the <a href="https://innovation.consumerreports.org/encoding-loyalty-principles-into-ai-agents-behavior/">Loyal Agents Workshop</a> with Consumer Reports and Stanford HAI, with ~30 participants from academia and industry.</span></span>
				</p>

				<p>
					The evaluation runs on
					<a href="https://www.anthropic.com/research/constitutional-classifiers">Bloom</a>,
					an agent interaction pipeline developed by Anthropic.
					Bloom is effective at producing realistic agent-user interaction traces, and the work
					that matters sits in how you source seed scenarios, detect rule-violating behavior,
					and define the modifiers that generate scenario variations. We adapted our seed
					scenarios and rules from the Restatement and fit them to AI contexts, which gave us
					a pool of around four hundred scenarios drawn from human agent failures.
				</p>

				<VideoFigure
					src="/video/Bloom.mov"
					caption="Bloom pipeline: generating realistic agent-user traces to simulate loyalty violations at scale."
				/>

				<p>
					To produce variations that carry real weight, we define modifiers through a sequence
					of deliberative workshops with attorneys. One finding stands out.
					<span class="hl">Attorneys, working from clinical intuition, generate far more varied
					and inventive scenarios than the model does on its own</span>, so our strategy now
					puts a lawyer in the loop to sharpen the space. This is the closest thing I have done
					to the legal-alignment evaluations the Institute describes, turning legal doctrine
					into criteria a system can be tested against.
				</p>

				<VideoFigure
					src="/video/agent1.mp4"
					caption="Loyalty benchmarks: evaluating agent behavior against fiduciary standards from the Restatement of Agency."
				/>
			</ScrollSection>

			<p class="content-axis-label">{axes.find(a => a.id === 'institutional').label}</p>

			<!-- The Slowdown Problem -->
			<ScrollSection id="slowdown">
				<h2>{headingById.slowdown}</h2>

				<p>
					The hardest governance problems are institutional. Anthropic's case for preserving the
					option of a credible slowdown is, to me, the clearest current example. A slowdown is a
					governance problem more than a technical one. Detecting training runs is the easy part.
					The harder questions are what triggers restraint, who verifies compliance, which actors
					gain by defecting, and what enforcement holds when the payoff from defecting in secret
					is enormous.
				</p>

				<p>
					The institutional stakes are what make this problem distinct. Courts, agencies, and
					electoral infrastructure have absorbed frontier AI without building commensurate technical
					capacity to audit what they now depend on. <span class="hl">A zero-day style vulnerability in a widely
					deployed model would threaten many institutions at once, and those most exposed are
					the ones least equipped to detect the damage or trace it back.</span> The harm to
					democratic governance would accumulate across many sites before the pattern became
					legible, and the policy and technical response required to address it would have to be
					assembled from actors who share neither a threat model nor a timeline.
				</p>

				<p>
					Consumers will not slow down on their own, because the individual payoff from automation
					is too large for anything like a cord-cutting moment to form. Regulation asks the labs
					with a frontier lead to give that lead up, and even when one or two do it on principle,
					the arrangement holds only with multistakeholder backing that no one has built. Liability,
					the oldest tool, strains here too, because the causal chain from a model to a harm is
					long and tangled, and putting the cost on a single developer does not obviously push the
					model toward safer behavior. These are the failures anyone who has tried to hold a
					coalition together will recognize.
				</p>
			</ScrollSection>

			<!-- Co-Regulation and Collective Action -->
			<ScrollSection id="dissertation">
				<h2>{headingById.dissertation}</h2>

				<p>
					I learned to take these failures seriously in government, not in a seminar. For eight years
					I was a Deputy Director at the
					<a href="https://www.kmcc.go.kr/user/ehpMain.do">Korea Communications Commission</a>
					and the
					<a href="https://www.mcst.go.kr/english/index.jsp">Ministry of Culture, Sports and Tourism</a>,
					drafting legislation, running regulatory programs, coordinating expert committees, and
					building national R&D strategy for emerging technologies.<!--
					--><span class="sidenote-wrapper"><sup class="sidenote-number">6</sup><span class="sidenote">This included leading the development of South Korea's <a href="https://www.mcst.go.kr/site/s_notice/press/pressView.jsp?pSeq=17069">Third Basic Plan for Cultural Technology R&D</a>, which doubled the annual R&D budget to approximately $200 million.</span></span>
				</p>

				<p>
					<span class="hl">The lesson that stayed with me is that a sound principle is the easy
					part.</span> The work is aligning incentives, building procedures people will actually use,
					sustaining cooperation past the first disagreement, and designing enforcement that survives
					political and operational stress. When the benefits of a rule are spread wide and the costs
					land on a few, free-riding becomes the main event. When participants see no clear gain and
					no clear penalty for walking away, collective governance falls apart even when everyone
					endorses the goal.
				</p>

				<p>
					My dissertation studied co-regulation directly. One case study looked at co-design in
					legal AI through
					<a href="https://social.cs.washington.edu/case-law-ai-policy/">case-based deliberation</a>
					with legal experts. The other compared co-regulation in South Korea's web comics and news
					industries. The web comics sector held a durable arrangement because creators, platforms,
					and regulators were interdependent and had clear reasons to stay at the table. The news
					sector could not, because trust was low, incentives were fragmented, and each side claimed
					institutional independence.
				</p>

				<p>
					A multi-lab slowdown faces the same test at higher stakes. It cannot run on aspiration,
					and the conditions that sustained the web comics arrangement (clear interdependence and
					a credible enforcement partner) are absent from AI governance in every jurisdiction
					that matters.
				</p>

				<p>
					This is the contribution I am readiest to make. Anthropic's proposal to keep a slowdown
					option open is timely and, in a field racing ahead, unusually public-spirited. Making it
					real takes more than verification tools. It takes institutional analysis built from
					experience inside regulatory processes. My regulatory experience and my study of
					collaborative governance let me start on that immediately.
				</p>
			</ScrollSection>

			<p class="content-axis-label">{axes.find(a => a.id === 'applications').label}</p>

			<!-- Public Defenders and Access to Justice -->
			<ScrollSection id="princeton">
				<h2>{headingById.princeton}</h2>

				<p>
					Institutional vulnerability also shows up in concrete settings. At
					<a href="https://citp.princeton.edu/">Princeton CITP</a> I led the
					<a href="https://arxiv.org/abs/2510.22933">first interview study</a>
					of how public defenders adopt AI in daily practice.<!--
					--><span class="sidenote-wrapper"><sup class="sidenote-number">7</sup><span class="sidenote">Accepted at <a href="https://facctconference.org/">ACM FAccT 2026</a>. Funded by a <a href="https://www.schmidtsciences.org/schmidt-sciences-awards-over-3-million-to-study-ais-impact-on-jobs/">Schmidt Science AI at Work</a> award.</span></span>
					The public conversation fixes on hallucinated citations and the trust they erode, a real
					concern. The defenders I interviewed pointed elsewhere. Their binding constraints are case
					backlog, resource scarcity, and the sheer breadth of public defense.
				</p>

				<p>
					The work includes reviewing hundreds of hours of body-worn camera footage to find one
					usable detail, translating legal jargon for frightened clients who may not speak English,
					arranging community resources for a client's children while the client is incarcerated,
					and making strategic calls under crushing time pressure.
				</p>

				<VideoFigure
					src="/video/publicdefender2.mp4"
					caption="Task mapping: cataloging the full scope of public defender work beyond legal reasoning."
				/>

				<p>
					That work showed me that <span class="hl">the public defender's office cannot be read only
					as a site of legal reasoning</span>. It is a constitutional institution and a welfare
					institution and a communication institution, and often the last point of contact between
					the state and a very vulnerable person. Governance aimed only at suppressing hallucinated
					citations misses the tools that would help defenders now and strengthen the Sixth Amendment
					in practice: locally deployed video analysis, retrieval built on real defender queries,
					secure summarization, language-access support, anything that lifts administrative load
					without displacing professional judgment.
				</p>

				<p>
					The study also produced a build. With the
					<a href="https://www.nj.gov/defender/">New Jersey Office of the Public Defender</a>, our
					team is developing
					<a href="https://www.justicebench.org/project/pd-brief-bank">BriefBank</a>,
					a retrieval system that lets appellate defenders search prior briefs and reuse arguments,
					precedent, and winning strategy.<!--
					--><span class="sidenote-wrapper"><sup class="sidenote-number">8</sup><span class="sidenote">Featured in the <a href="https://innovation.nj.gov/news/NJ-AI-Task-Force-Report.pdf">Report to the NJ Governor on AI</a> (p. 10). Scheduled for deployment to ~150 appellate attorneys in 2026.</span></span>
					I led the practitioner needs assessment and produced the legal-domain annotations for the
					retrieval benchmark. We found that systems trained or evaluated on artificial legal
					datasets miss what defenders search for on the job, which is the methodological point
					under all my work. Governance should start from professional practice and institutional
					constraint, not from abstract benchmarks.
				</p>

				<VideoFigure
					src="/video/briefbank.mp4"
					caption="BriefBank: a retrieval tool for NJ public defenders to search prior briefs, reuse arguments, and find winning strategy."
				/>

				<p>
					None of these projects has moved fast. The loyalty work has meant weekly sessions with
					Consumer Reports engineers for over a year. With public defenders, it meant earning the
					trust of practitioners with good reason to be wary of AI research. Cross-disciplinary
					governance takes designed processes, case-based workshops, annotation handbooks, shared
					scoring criteria, and conversations that run long enough for real disagreement to surface.
				</p>
			</ScrollSection>

			<!-- Research Agenda -->
			<ScrollSection id="agenda">
				<h2>{headingById.agenda}</h2>

				<p>
					I would help build the team's agenda along several lines: legal-alignment evaluations for
					frontier models and agents, institutional vulnerability studies of courts, public defense,
					administrative agencies, and legislatures, governance analysis of credible slowdown
					mechanisms, and research on how AI companies should be treated as institutions under
					constitutional and regulatory law. I would also use Claude as an object of inquiry,
					testing how it reasons about due process, authority, loyalty, legal uncertainty, procedural
					fairness, and institutional role constraints.
				</p>

				<p>
					Democratic institutions will not only be affected by AI from the outside. They will
					depend on it, regulate it, and be judged by the public through how they use it.
					<span class="hl">The work is to keep that dependence from hollowing out the practices
					that make these institutions legitimate.</span>
				</p>

				<p>
					I have drafted legislation from inside regulatory agencies, sat with public defenders
					skeptical enough of AI researchers to make trust the first problem, and spent a year in
					weekly workshops with Consumer Reports engineers translating legal doctrine into testable
					scenarios. The questions at the center of this role are the ones I have been working on
					from every direction, and I know what they take.
				</p>
			</ScrollSection>

		</article>

		<!-- TOC Sidebar (desktop only) -->
		<nav class="toc-sidebar" aria-label="Table of contents">
			<ul class="toc-list">
				{#each parts as part}
					<li class="toc-part-label">
						<span class="toc-roman">{part.number}.</span> {part.title}
					</li>
					{#if part.number === 'I'}
						{#each sections.filter((s) => s.part === 'I') as section}
							<li>
								<a
									href="#{section.id}"
									class="toc-link"
									class:active={activeId === section.id}
									onclick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
								>{section.heading}</a>
							</li>
						{/each}
					{:else}
						{#each sections.filter((s) => s.bookend === 'start') as section}
							<li>
								<a
									href="#{section.id}"
									class="toc-link"
									class:active={activeId === section.id}
									onclick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
								>{section.heading}</a>
							</li>
						{/each}
						{#each axes as axis}
							<li class="toc-axis-label">{axis.label}</li>
							{#each sections.filter((s) => s.axis === axis.id) as section}
								<li>
									<a
										href="#{section.id}"
										class="toc-link toc-link-axis"
										class:active={activeId === section.id}
										onclick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
									>{section.heading}</a>
								</li>
							{/each}
						{/each}
						{#each sections.filter((s) => s.bookend === 'end') as section}
							<li>
								<a
									href="#{section.id}"
									class="toc-link"
									class:active={activeId === section.id}
									onclick={(e) => { e.preventDefault(); scrollToSection(section.id); }}
								>{section.heading}</a>
							</li>
						{/each}
					{/if}
				{/each}
			</ul>
		</nav>
	</div>
</div>

<!-- Footer -->
<footer class="site-footer">
	<div class="article-container">
		<p>Inyoung Cheong &middot; PhD in Law, University of Washington</p>
		<p class="footer-sub">Princeton CITP &middot; Harvard Berkman Klein Center</p>
	</div>
</footer>

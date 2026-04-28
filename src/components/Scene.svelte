<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { base } from "$app/paths";

	let { scene, index } = $props();

	const asset = (path) => `${base}${path}`;

	let activeBeat = $state(0);
	let beatEls = [];
	let userEnabledSound = $state(false);
	const activeMedia = $derived(
		scene.beats[activeBeat]?.media ??
			scene.media.items?.[Math.min(activeBeat, scene.media.items.length - 1)] ??
			scene.media
	);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					const next = Number(entry.target.dataset.beat);
					if (!Number.isNaN(next)) activeBeat = next;
				}
			},
			{ threshold: 0.55 }
		);

		for (const el of beatEls) {
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	});
</script>

<section class={`scene scene-${index} ${scene.variant ?? ""}`}>
	<div class={`scene-media align-${activeMedia.align ?? scene.media.align ?? "center"}`}>
		{#key activeMedia.src}
			<div
				class={`media-frame fit-${activeMedia.fit ?? scene.media.fit ?? "cover"} frame-${activeMedia.frame ?? "standard"}`}
				style={`--media-width: ${activeMedia.width ?? scene.media.width ?? "86vw"};`}
				transition:fade={{ duration: 520 }}
			>
				{#if activeMedia.type === "photo"}
					<img src={asset(activeMedia.src)} alt="" />
				{:else if activeMedia.type === "video"}
					<video
						muted={!userEnabledSound || !activeMedia.allowSound}
						autoplay
						loop
						playsinline
					>
						<source src={asset(activeMedia.src)} type="video/mp4" />
					</video>
					{#if activeMedia.allowSound && !userEnabledSound}
						<button class="sound-button" onclick={() => (userEnabledSound = true)}>
							Sound
						</button>
					{/if}
				{:else if activeMedia.type === "black"}
					<div class="black-frame"></div>
				{/if}
			</div>
		{/key}
	</div>

	<div class="scene-copy" aria-label={scene.kicker}>
		{#each scene.beats as beat, beatIndex}
			<div
				class={`beat ${beat.placement ?? "bottom-left"}`}
				class:active={beatIndex === activeBeat}
				data-beat={beatIndex}
				bind:this={beatEls[beatIndex]}
			>
				<div class="beat-inner" transition:fade={{ duration: 450 }}>
					{#if beatIndex === 0}
						<span class="kicker">{scene.kicker}</span>
					{/if}
					<p>{beat.text}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.scene {
		position: relative;
		min-height: calc((var(--beat-count, 3) + 1) * 82vh);
		background: #070908;
		color: #fff;
	}

	.scene-media {
		position: sticky;
		top: 0;
		height: 100vh;
		display: flex;
		align-items: center;
		padding: 6vh 5vw;
		box-sizing: border-box;
		overflow: hidden;
	}

	.align-left {
		justify-content: flex-start;
	}

	.align-center {
		justify-content: center;
	}

	.align-right {
		justify-content: flex-end;
	}

	.media-frame {
		position: relative;
		width: min(var(--media-width), 1320px);
		height: min(82vh, 780px);
		background: #101312;
		box-shadow: 0 28px 90px rgba(0, 0, 0, 0.36);
		overflow: hidden;
	}

	.frame-full {
		width: 100vw;
		height: 100vh;
		box-shadow: none;
		background: #050606;
	}

	.media-frame::after {
		content: "";
		position: absolute;
		inset: 0;
		pointer-events: none;
		background:
			linear-gradient(to bottom, rgba(0, 0, 0, 0.34), transparent 30%, rgba(0, 0, 0, 0.34)),
			linear-gradient(to right, rgba(0, 0, 0, 0.28), transparent 34%, rgba(0, 0, 0, 0.28));
	}

	img,
	video,
	.black-frame {
		width: 100%;
		height: 100%;
		display: block;
	}

	.black-frame {
		background:
			radial-gradient(circle at 50% 48%, rgba(255, 255, 255, 0.045), transparent 34%),
			#050606;
	}

	.fit-cover img,
	.fit-cover video {
		object-fit: cover;
	}

	.fit-contain img,
	.fit-contain video {
		object-fit: contain;
		background: #050505;
	}

	.sound-button {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		z-index: 3;
		border: 1px solid rgba(255, 255, 255, 0.58);
		background: rgba(8, 10, 10, 0.55);
		color: #fff;
		padding: 0.45rem 0.7rem;
		font-family: var(--font-sans);
		font-size: 0.68rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		cursor: pointer;
	}

	.scene-copy {
		position: relative;
		z-index: 3;
		margin-top: -100vh;
		pointer-events: none;
	}

	.beat {
		min-height: 82vh;
		display: flex;
		box-sizing: border-box;
		padding: 10vh 7vw;
		opacity: 0.12;
		filter: blur(1px);
		transition:
			opacity 650ms ease,
			filter 650ms ease;
	}

	.beat.active {
		opacity: 1;
		filter: blur(0);
	}

	.beat-inner {
		position: relative;
		max-width: min(560px, 82vw);
		padding: 1.1rem 1.2rem 1.15rem;
	}

	.beat-inner::before {
		content: "";
		position: absolute;
		inset: -0.35rem -0.55rem;
		z-index: -1;
		background:
			radial-gradient(ellipse at center, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.38) 42%, transparent 72%);
		filter: blur(10px);
	}

	.kicker {
		display: block;
		margin-bottom: 0.85rem;
		font-family: var(--font-sans);
		font-size: 0.68rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: rgba(255, 255, 255, 0.86);
		text-shadow:
			0 1px 4px rgba(0, 0, 0, 0.9),
			0 0 18px rgba(0, 0, 0, 0.82);
	}

	p {
		margin: 0;
		font-family: var(--font-serif);
		font-size: clamp(1.32rem, 2.4vw, 2.45rem);
		line-height: 1.38;
		color: #fff;
		text-shadow:
			0 1px 2px rgba(0, 0, 0, 0.95),
			0 2px 12px rgba(0, 0, 0, 0.86),
			0 0 34px rgba(0, 0, 0, 0.72);
	}

	.opening .beat-inner {
		max-width: min(820px, 84vw);
	}

	.opening p {
		font-size: clamp(1.7rem, 4vw, 4.6rem);
		line-height: 1.08;
	}

	.top-left,
	.center-left,
	.bottom-left {
		justify-content: flex-start;
		text-align: left;
	}

	.top-right,
	.center-right,
	.bottom-right {
		justify-content: flex-end;
		text-align: right;
	}

	.top-left,
	.top-right {
		align-items: flex-start;
	}

	.center-left,
	.center-right {
		align-items: center;
	}

	.bottom-left,
	.bottom-right {
		align-items: flex-end;
	}

	@media (max-width: 768px) {
		.scene {
			min-height: calc((var(--beat-count, 3) + 1) * 74vh);
		}

		.scene-media {
			padding: 4vh 0;
			align-items: center;
			justify-content: center;
		}

		.media-frame {
			width: 100vw;
			height: 68vh;
		}

		.scene-copy {
			margin-top: -86vh;
		}

		.beat {
			min-height: 74vh;
			padding: 8vh 0.85rem;
			align-items: flex-end;
			justify-content: flex-start;
			text-align: left;
		}

		.beat-inner {
			max-width: 92vw;
			padding: 1rem;
		}

		p {
			font-size: clamp(1.28rem, 7vw, 2rem);
			line-height: 1.32;
		}

	}

	@media (prefers-reduced-motion: reduce) {
		.beat {
			opacity: 1;
			filter: none;
			transition: none;
		}
	}
</style>

<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let { src, caption = '', poster = '' } = $props();

	function assetPath(path) {
		if (!path) return '';
		return `${base}${path.startsWith('/') ? path : `/${path}`}`;
	}

	let videoSrc = $derived(assetPath(src));
	let posterSrc = $derived(assetPath(poster));
	let videoEl = $state(null);
	let ended = $state(false);
	let hasBeenVisible = $state(false);

	onMount(() => {
		if (!videoEl) return;

		function onEnded() {
			ended = true;
		}

		videoEl.addEventListener('ended', onEnded);

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting && !ended) {
						hasBeenVisible = true;
						videoEl.play().catch(() => {});
					} else if (hasBeenVisible && !ended) {
						videoEl.pause();
					}
				}
			},
			{ threshold: 0.35 }
		);

		observer.observe(videoEl);

		return () => {
			observer.disconnect();
			videoEl.removeEventListener('ended', onEnded);
		};
	});

	function replay() {
		if (!videoEl) return;
		ended = false;
		videoEl.currentTime = 0;
		videoEl.play().catch(() => {});
	}
</script>

<figure class="video-figure">
	<div class="video-wrapper">
		<video
			bind:this={videoEl}
			src={videoSrc}
			muted
			playsinline
			preload="none"
			poster={posterSrc || undefined}
		></video>
		{#if ended}
			<button class="replay-btn" onclick={replay} aria-label="Replay video">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<polyline points="1 4 1 10 7 10"></polyline>
					<path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
				</svg>
				<span>Replay</span>
			</button>
		{/if}
	</div>
	{#if caption}
		<figcaption class="video-caption">{caption}</figcaption>
	{/if}
</figure>

<style>
	.video-figure {
		margin: 2em 0;
		padding: 0;
	}

	.video-wrapper {
		position: relative;
	}

	video {
		width: 100%;
		max-width: 100%;
		border-radius: 6px;
		background: #f5f5f3;
		display: block;
	}

	.replay-btn {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 6px;
		background: rgba(0, 0, 0, 0.35);
		border: none;
		border-radius: 6px;
		cursor: pointer;
		color: #fff;
		font-family: 'Inter', sans-serif;
		font-size: 0.8125rem;
		font-weight: 500;
		letter-spacing: 0.02em;
		transition: background 0.2s;
	}

	.replay-btn:hover {
		background: rgba(0, 0, 0, 0.5);
	}

	.video-caption {
		font-family: 'Inter', sans-serif;
		font-size: 0.8125rem;
		color: var(--text-muted, #6b7280);
		line-height: 1.5;
		margin-top: 0.5em;
		padding: 0 2px;
	}
</style>

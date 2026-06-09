<script>
	let { children } = $props();
</script>

<blockquote class="pull-quote">
	{@render children()}
</blockquote>

<style>
	.pull-quote {
		margin: 48px 0;
		padding: 32px 0 32px 24px;
		border-left: 3px solid var(--color-accent);
		font-family: var(--font-heading);
		font-size: clamp(1.25rem, 2.5vw, 1.6rem);
		line-height: 1.45;
		color: var(--color-text);
		background: var(--color-quote-bg);
		padding: 32px;
		border-radius: 0 8px 8px 0;
	}

	@media (max-width: 768px) {
		.pull-quote {
			margin: 32px 0;
			padding: 24px;
		}
	}
</style>

<script>
	let { children, id = undefined, class: className = '' } = $props();

	let el = $state(null);
	let visible = $state(false);

	$effect(() => {
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						visible = true;
						observer.unobserve(el);
					}
				}
			},
			{ threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
		);

		observer.observe(el);

		return () => observer.disconnect();
	});
</script>

<section
	bind:this={el}
	{id}
	class="scroll-section {className}"
	class:is-visible={visible}
>
	{@render children()}
</section>

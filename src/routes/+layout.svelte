<script>
	import '$styles/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;0,8..60,700;1,8..60,400;1,8..60,500&display=swap"
		rel="stylesheet"
	/>
	<title>Why Anthropic — Inyoung Cheong</title>
	<meta name="description" content="On transparency, institutional structure, and the work I want to do at Anthropic." />
</svelte:head>

<main id="content">
	{@render children()}
</main>

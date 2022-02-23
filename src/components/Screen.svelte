<script>
	export let total = -1;
	export let mainString;
</script>

<div data-total={total} class="main-screen">
	{#each mainString as word, i}
		<span data-posi={i} class="single-word {i === 0 ? 'highlighted' : ''}">{word}</span>
	{/each}
</div>

<style>
	span.single-word {
		font-size: 2rem;
		font-weight: 700;
		transition: all 0.05s ease;
    }
</style>

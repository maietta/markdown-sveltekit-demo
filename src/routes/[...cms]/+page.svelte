<script>
	export let data;
	let { content } = data;
</script>

{#if content}
	{@html content}
{:else}
	<p>No markdown content available.</p>
{/if}

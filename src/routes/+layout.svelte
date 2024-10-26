<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<a href="/">Home</a>
<a href="/blog">Blog</a>
<a href="/contact">Contact</a>

{@render children?.()}
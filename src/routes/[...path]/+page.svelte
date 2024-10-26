<script lang="ts">
   interface Props {
      data: {
         markdownContent: string;
      };
   }

   let { data }: Props = $props();
   let { markdownContent } = data;
</script>

{#if markdownContent}
    {@html markdownContent}
{:else}
    <p>Content not found</p>
{/if}
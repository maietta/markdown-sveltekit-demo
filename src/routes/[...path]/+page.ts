import type { PageLoad } from './$types';
import { page } from "$app/stores";
import { trpc } from "$lib/trpc/client";

export const load = (async (event) => {
    // Get the markdown content from filesystem using tRPC route.
    let markdownContent = await trpc(event).getMarkdown.query({
        urlPath: event.params.path
    });
    return {
        markdownContent
    }
}) satisfies PageLoad;




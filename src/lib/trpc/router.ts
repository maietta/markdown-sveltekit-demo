import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
// import delay from 'delay';
import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { marked } from 'marked';  // Make sure marked is installed: `npm install marked`
import { json } from '@sveltejs/kit';
import { page } from '$app/stores';
export const t = initTRPC.context<Context>().create();

export const router = t.router({
  getMarkdown: t.procedure.query(async (event) => {
    // await delay(500); // 👈 simulate an expensive operation

    const markdownFilePath = path.resolve(`./src/routes/${event.rawInput.urlPath}/content.md`);

    let markdownContent = null;

    if (existsSync(markdownFilePath)) {
        const fileContent = readFileSync(markdownFilePath, 'utf-8');
        markdownContent = marked(fileContent);

    } else {
        return json({ error: 'File not found' }, { status: 404 });
    }

    // return event.rawInput.urlPath;
    return markdownContent;

  })
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;





  

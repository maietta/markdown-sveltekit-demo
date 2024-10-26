import { page } from "$app/stores";
import { marked } from 'marked';
import path from 'path';
import { readFileSync, existsSync } from 'fs';
import { json } from '@sveltejs/kit';

export const load = async (event) => {

    const markdownFilePath = path.resolve(`./src/routes/${event.params.path}/content.md`);

    let markdownContent = null;

    if (existsSync(markdownFilePath)) {
        const fileContent = await readFileSync(markdownFilePath, 'utf-8');
        markdownContent = marked(fileContent);
    }

    return {
        markdownContent
    };
    
}

import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';

import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

export const content: Handle = async ({ event, resolve }) => {
    // Get the pathname from the request (e.g., "/about")
    const { pathname } = new URL(event.request.url);

    // Define the path to the markdown file, ensuring the period before '/src/routes/'
    const markdownFilePath = path.resolve(`./src/routes${pathname}/content.md`);

    // Initialize the markdown content as null
    let markdownContent = null;

    // Check if the markdown file exists
    if (fs.existsSync(markdownFilePath)) {
        // Read the file content and convert it to HTML using 'marked'
        const fileContent = fs.readFileSync(markdownFilePath, 'utf-8');
        markdownContent = marked(fileContent);
		
		event.locals = {
			...event.locals, // retain any existing properties on locals
			markdownContent // assign markdownContent (could be null if file doesn't exist)
		};

		return resolve(event);
    }

    // Continue with resolving the request
    return resolve(event);
};

const healthcheck: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/healthcheck') {
		return new Response('OK', {
			headers: {
				'Content-Type': 'text/plain'
			}
		});
	}

	return resolve(event);
};

export const handle: Handle = sequence(healthcheck, content);

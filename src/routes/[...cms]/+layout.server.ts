export async function load({ locals }) {
    let content = null;
    if ( locals.markdownContent ) {
        content = locals.markdownContent;
    }
    return {
        content
    };
};

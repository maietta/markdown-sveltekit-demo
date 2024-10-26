<script>
    export let data;
    let { markdownContent } = data;
</script>

{#if markdownContent}
    {@html markdownContent}
{:else}
    <p>No markdown content available.</p>
{/if}

<form method="POST" action="/api/contact">
    <label for="name">Name</label>
    <input id="name" name="name" type="text" required />

    <label for="email">Email</label>
    <input id="email" name="email" type="email" required />

    <label for="message">Message</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit">Send Message</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
    }
    label {
        margin-top: 1em;
    }
    input,
    textarea {
        margin-bottom: 1em;
        padding: 0.5em;
    }
    button {
        padding: 0.5em;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
    .success {
        color: green;
    }
    .error {
        color: red;
    }
</style>
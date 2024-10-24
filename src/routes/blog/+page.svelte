<script>
    let posts = [
        {
            title: 'The Joy of Gardening: Cultivating More Than Just Plants',
            date: '2023-01-01',
            description: 'The Joy of Gardening is a gardening blog where you can learn more about gardening and how to grow plants.',
            path: '/blog/2024/joy-of-gardening'
        }
    ]
</script>

<h2>Blog Posts</h2>
<ul>
    {#each posts as post}
        <li>
            <a href="{post.path}">
                {post.title}
            </a>
        </li>
    {/each}
</ul>
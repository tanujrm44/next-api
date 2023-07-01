export default async function UserPosts({ promise }: { promise: Promise<Post[]> }) {
    const posts = await promise
    return (
        <>
            {posts.map((post: Post) => { // Specify the type of 'post' as 'Post'
                return (<>
                    <article key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </article>
                    <br />
                </>
                )
            })}
        </>
    )
}

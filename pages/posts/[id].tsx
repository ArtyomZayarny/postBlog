import {useRouter} from "next/router";
import Link from "next/link";

export default function Post({post}) {
    const router = useRouter();
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href={`/`}><a>Back</a></Link>
        </>
    )
}
Post.getInitialProps = async (ctx) => {
    const res = await fetch(`https://simple-blog-api.crew.red/posts/${ctx.query.id}`)
    const post = await res.json()
    return { post }
}
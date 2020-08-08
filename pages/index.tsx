import {useEffect, useState} from "react";
import axios from 'axios'
import Link from "next/link";
function HomePage({posts}) {

    return <div>
      <h2>LAtest Posts</h2>

      <ul>
          {posts.map( (post) => (
              <li>
                  <Link href={`/posts/[id]`} as={`/posts/${post.id}`}>
                      <a>{post.title}</a>
                  </Link>
              </li>
          ))}
      </ul>
        </div>
}
export async function getStaticProps() {
    const res = await fetch('https://simple-blog-api.crew.red/posts')
    const posts = await res.json()
    return { props: {posts}}
}

export default HomePage


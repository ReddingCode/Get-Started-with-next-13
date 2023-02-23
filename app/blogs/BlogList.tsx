"use client"

import Link from "next/link"
import useSWR from "swr"

const fetcher = (path) => fetch(`https://product-app-101-server.vercel.app/${path}`).then(res => res.json())

export default function BlogList() {
    const blogs = useSWR("api/products", fetcher)

    return (
        <div>
           
            {blogs.data?.map(blog => 
            <div key={blog.name}>
                  <Link href={`/blogs/${blog.name.replace(/\s+/g, "-").tolowerCase}`}>
                    name: {blog.name}
                </Link>
            </div>
              
            )}
        </div>
    )
}
import Link from "next/link"
import Likes from "@/components/Likes"
import Views from "@/components/Views"
import Comments from "@/components/Comments"
import Loading from "@/components/Loading"
import Button from "@/components/Button";
import { Suspense } from "react"

export default function BlogPage() {
  return (
    <div>Blog Page
        <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href='/blogs/1'>Blog 1</Link>
        <Link href='/blogs/2'>Blog 2</Link>
        <Link href='/blogs/3'>Blog 3</Link>
        <Link href='/blogs/4'>Blog 4</Link>
      </div>
       <div>
          <br />
          <Suspense fallback={<Loading>Views</Loading>}>
            <Views />
          </Suspense>
          {/* <Suspense fallback={<Loading>Likes</Loading>}>
            <Likes />
          </Suspense> */}
           <Button />
          <Suspense fallback={<Loading>Comments</Loading>}>
            <Comments />
          </Suspense>
        </div>
    </div>
  )
}

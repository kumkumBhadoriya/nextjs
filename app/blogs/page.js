import Link from "next/link";
import Likes from "@/components/Likes";
import Views from "@/components/Views";
import Comments from "@/components/Comments";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import { Suspense } from "react";

export default function BlogPage() {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center">
      <h1 className="text-center mt-10 font-bold text-3xl">Blog Page</h1>
      <nav className="bg-zinc-700 mt-10 rounded-2xl">
        <ul className="flex items-center justify-center gap-25 px-5 py-3">
          <li className="hover:underline underline-offset-2">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline underline-offset-2">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:underline underline-offset-2">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:underline underline-offset-2">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
      <div className="mt-10 flex gap-10">
        <Link href="/blogs/1">Blog 1</Link>
        <Link href="/blogs/2">Blog 2</Link>
        <Link href="/blogs/3">Blog 3</Link>
        <Link href="/blogs/4">Blog 4</Link>
      </div>
      <div className="flex mt-10 gap-10 items-center justify-center">
        <br />
        <Button />
        <Suspense fallback={<Loading>Views</Loading>}>
          <Views />
        </Suspense>
        {/* <Suspense fallback={<Loading>Likes</Loading>}>
            <Likes />
          </Suspense> */}
        <Suspense fallback={<Loading>Comments</Loading>}>
          <Comments />
        </Suspense>
      </div>
    </div>
  );
}

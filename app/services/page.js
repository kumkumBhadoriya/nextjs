import { cookies } from "next/headers";
import Link from "next/link";

// export const dynamic = "auto";
// export const dynamic = "force-dynamic";
// export const dynamic = "error";
// export const dynamic = "force-static";

export default async function ServicePage({ searchParams }) {
  // const search = await searchParams;
  // console.log(search);
  const myCookies = await cookies();
  console.log(myCookies);
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center">
      <h1 className="text-center mt-10 font-bold text-3xl">Service Page</h1>
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
    </div>
  );
}

import Link from "next/link";

export default function page() {
  return (
    <div className="bg-black text-white h-screen flex flex-col items-center">
      <h1 className="text-center mt-10 font-bold text-3xl">
        Welcome to Next.js App
      </h1>
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

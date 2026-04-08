import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href="/about">About</Link>
      <Link href="/blogs">Blogs</Link>
      Next js App
    </div>
  );
}

import PrivateRoute from "./_privateRoute/page";
import Link from "next/link";

export default async function Home() {
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <PrivateRoute/>
      <Link href="/about">About</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/file">Files</Link>
      <Link href="/services">Services</Link>
      Next js App
    </div>
  );
}

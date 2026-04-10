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
    <div>
      Service Page
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
    </div>
  );
}

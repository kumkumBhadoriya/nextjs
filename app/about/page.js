import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return <div>About Page
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
  </div>;
}

import Link from "next/link";

export const dynamicParams = false;

// ISR
// export const revalidate = 5;

// SSG
// export async function generateStaticParams() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await response.json();
//   console.log(data);
//   return data.map(({ id }) => ({ blogID: `${id}` }));
// }

export default async function BlogPage({ params }) {
  const { id } = await params;
  console.log("blogID: ", id);
  return (
    <div>
      BlogPage
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
        <h1>Welcome to Our Blog {blogID}</h1>
        <h2>Date: {new Date().toLocaleString()}</h2>
        <p>This is blog {blogID} page.</p>
      </div>
    </div>
  );
}

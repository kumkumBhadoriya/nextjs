import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const { blogID } = await params;
  return {
    title: `Blog ${blogID}`,
  };
}

export default async function SingleBlog({ params }) {
  const { blogID } = await params;
  if(isNaN(blogID)){
   notFound()
  }
  return <div>Single Blog Page: {blogID}</div>;
}

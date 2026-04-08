import React from "react";

export default async function SingleBlog({ params }) {
  const { blogID } = await params;
  return <div>Single Blog Page: {blogID}</div>;
}

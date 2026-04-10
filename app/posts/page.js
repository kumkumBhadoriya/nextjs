"use client";

import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6",
      );
      const data = await response.json();
      //   console.log(data);
      setPosts(data);
    }
    fetchPosts();
  }, []);
  return (
    <div className="h-full p-5 bg-black text-white flex flex-col pt-10 items-center">
      <h1 className="text-3xl">Posts</h1>
      <div className="mt-10 flex gap-5 flex-wrap items-center">
        {posts.map(({ id, title, body }) => (
          <div key={id} className="w-100 h-100 p-5 border flex flex-wrap items-center">
            <h2 >{title}</h2>
            <p className="text-zinc-500">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

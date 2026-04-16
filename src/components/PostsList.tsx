import {
  useCreatePostMutation,
  useGetPostsQuery,
} from "../state/posts/postsApiSlice";

export default function PostsList() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPostsQuery({
    limit: 5,
    offset: 0,
  });

  const [createPostMutation, { isLoading: isCreatingPost }] =
    useCreatePostMutation();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred while fetching posts.</div>;

  return (
    <div>
      <button
        onClick={() => {
          const post = { title: "new post" };
          createPostMutation(post);
        }}
      >
        {isCreatingPost ? "creating.." : "create"}
      </button>
      <ul>
        {posts?.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

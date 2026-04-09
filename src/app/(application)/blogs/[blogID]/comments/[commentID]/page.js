export async function generateMetadata({ params }) {
  const { commentID } = await params;
  return {
    title: `Comment ${commentID}`,
  };
}

export default async function SingleComment({params}) {
   const {commentID,blogID}=await params
    return (
    <div>Comment no. {commentID} on blog no. {blogID} </div>
  )
}

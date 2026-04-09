export const metadata={
  title:"Comments"
}

export default async function CommentPage({params}) {
    const {blogID}=await params
    return (
    <div>Comments on {blogID} Blog</div>
  )
}

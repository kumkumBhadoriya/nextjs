import React from 'react'

export default async function SingleComment({params}) {
   const {commentID,blogID}=await params
    return (
    <div>Comment no. {commentID} on blog no. {blogID} </div>
  )
}

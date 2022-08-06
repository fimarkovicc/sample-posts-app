import React from 'react'
import { useParams, Link } from 'react-router-dom'
import withName from '../withName'
import useFetch from '../../hooks/useFetch'
import global  from '../../constants/global.constants'

type Post = {
  title: string
  id: number
  userId: number
  body: string
}

type Comment = {
  name: string
  id: number
  postId: number
  body: string
}

function renderComments(comments: Comment[]){
  return comments && comments.map(comment => {
    return (
      <div key={comment.id}>
        <h4>{comment.name}</h4>
      </div>
    )
  })
}

function Post(props: any) {
    console.log(global.componentGreetingMessage + props.name)    
    const { id } = useParams()
    
    const post: Post = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`).data!
    const comments: Comment[] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).data!

  return ( 
    (post && comments) &&
    <>
      <div>
        <Link to="/posts/">Back</Link>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <div>
          <h4>Comments</h4>
          {renderComments(comments)}
        </div>
      </div>
    </>
  )
}

export default withName(Post)
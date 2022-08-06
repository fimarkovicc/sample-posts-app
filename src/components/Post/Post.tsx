import React from 'react'
import { useParams, Link } from 'react-router-dom'
import withName, { WithNameType } from '../withName'
import useFetch from '../../hooks/useFetch'
import global  from '../../constants/global.constants'
import { PostType, CommentType } from './Post.types'

function renderComments(comments: CommentType[]){
  return comments && comments.map(comment => {
    return (
      <div key={comment.id}>
        <h4>{comment.name}</h4>
      </div>
    )
  })
}

function Post(props: WithNameType) {
    console.log(global.componentGreetingMessage + props.name)    
    const { id } = useParams()
    
    const post: PostType = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`).data!
    const comments: CommentType[] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).data!

  return ( 
    (post && comments) &&
    <>
      <div>
        <Link to="/posts/">Back to Post List</Link>
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
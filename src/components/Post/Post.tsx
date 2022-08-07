import React from 'react'
import { useParams, Link } from 'react-router-dom'
import withName, { WithNameType } from '../withName'
import useFetch from '../../hooks/useFetch'
import global  from '../../constants/global.constants'
import { PostType, CommentType } from './Post.types'
import styles from './Post.module.css'

function renderComments(comments: CommentType[]){
  return comments && comments.map(comment => {
    return (
      <li key={comment.id}>
        <h4>{comment.name}</h4>
      </li>
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
      <div>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postBody}>{post.body}</p>
        <div className={styles.postComments}>
          <h3>Comments</h3>
          <ul>{renderComments(comments)}</ul>
        </div>
        <button><Link to="/posts/">Back to Post List</Link></button>
      </div>
  )
}

export default withName(Post)
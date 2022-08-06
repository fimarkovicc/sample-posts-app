import React from 'react'
import { Link } from 'react-router-dom'
import withName from '../withName'
import global  from '../../constants/global.constants'
import useFetch from '../../hooks/useFetch'

type Post = {
  title: string
  id: number
  userId: number
}

type User = {
  name: string
  id: number
}

function PostList(props:any) {
  console.log(global.componentGreetingMessage + props.name)

  const posts: Post[] = useFetch('https://jsonplaceholder.typicode.com/posts/').data!
  const users: User[] = useFetch('https://jsonplaceholder.typicode.com/users/').data!

  return (
    <>
      <h1>Post List</h1>
      <ul>
        {posts && posts.map((post) => {
          const user: User = users.find(user => user.id == post.userId)!

          return (
            <li key={post.id}>
              <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
              <h3>By {user.name}</h3>
            </li>
            )
        })}
      </ul>
    </>
  )
}

export default withName(PostList)
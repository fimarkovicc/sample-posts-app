import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import withName, { WithNameType } from '../withName'
import global  from '../../constants/global.constants'
import useFetch from '../../hooks/useFetch'
import { PostType, UserType } from './PostList.types'
import styles from './PostList.module.css'

function PostList(props: WithNameType) {
  console.log(global.componentGreetingMessage + props.name)

  const posts: PostType[] = useFetch('https://jsonplaceholder.typicode.com/posts/').data!
  const users: UserType[] = useFetch('https://jsonplaceholder.typicode.com/users/').data!

  const [authorName, setAuthorName] = useState('')
  const [filterTerm, setFilterTerm] = useState('')

  function handleChange(e: React.FormEvent<HTMLInputElement>){
    setAuthorName(e.currentTarget.value)
  }

  function handleClick(e: React.MouseEvent<HTMLElement>){
    e.preventDefault()
    setFilterTerm(authorName)
  }

  return (    
    <>
      <h1>Post List</h1>
      <form>
        <label>Filter by Author Name
          <input type="text" value={authorName} onChange={handleChange} />  
        </label>
        <button onClick={handleClick}>Filter</button>      
      </form>
      <ul className={styles.post_list}>
      {(posts && users) &&
        posts
        .filter(post => {
          const user: UserType = users.find(user => user.name == filterTerm)!
          
          if(user){
            return post.userId == user.id
          }else if(filterTerm == ''){
            return post
          }else{
            return null
          }
          
        })
        .map((post) => {
          const user: UserType = users.find(user => user.id == post.userId)!

          return (
            <li key={post.id}>
              <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
              <h3>By {user.name}</h3>
            </li>
            )
        })
        }
      </ul>
    </>
  )
}

export default withName(PostList)
import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div>
        <h1>Error 404 - Not Found</h1>
        <Link to="/">Back to Comment List</Link>
    </div>
  )
}

export default Error404
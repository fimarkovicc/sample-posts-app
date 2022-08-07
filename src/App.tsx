import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PostList from './components/PostList/PostList'
import Post from './components/Post/Post'
import Error404 from './components/Error404/Error404'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/posts" replace />} />
        <Route path="/posts" element={<PostList />} />    
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default App;
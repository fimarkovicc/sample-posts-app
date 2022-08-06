import React from 'react'
import withName from '../withName'
import global  from '../../constants/global.constants'


function CommentList(props:any) {
  console.log(global.componentGreetingMessage + props.name)

  return (
    <>
      <h1>CommentList</h1>
    </>
  )
}

export default withName(CommentList)
import React from 'react'
import withName from '../withName'
import global  from '../../constants/global.constants'

function Comment(props: any) {
    console.log(global.componentGreetingMessage + props.name)

  return (
    <>
        <h1>Single Comment</h1>
    </>
  )
}

export default withName(Comment)
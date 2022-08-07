import React from 'react'
import withName, { WithNameType } from '../withName'
import global from './../../constants/global.constants'
import { Link } from 'react-router-dom'
import styles from './Error404.module.css'

function Error404(props: WithNameType) {
  console.log(global.componentGreetingMessage + props.name)

  return (
    <div className={styles.errorPage}>
        <h1>Error 404 - Not Found</h1>
        <button><Link to="/">Back to Comment List</Link></button>
    </div>
  )
}

export default withName(Error404)
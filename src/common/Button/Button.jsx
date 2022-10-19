import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'
function Button(props) {
  return (
    <>
      {props.isLink ? (
        <Link className={styles.linkContent} to={props.path}>{props.linkContent}</Link>
      ) : (
        <button className={styles.text}>{props.content}</button>
      )}
    </>
  )
}
export default Button

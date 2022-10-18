import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './MenuItem.module.scss'
function MenuItem(props) {
  const [isActive, setIsActive] = useState(true)
  return (
    <li className={`${styles.menuItem} ${isActive && styles.active}`} >
        <Link className={styles.menuLink} to={props.path}>
          {props.icon}
          <span className={styles.text}>{props.text}</span>
        </Link>
    </li>
  )
}
MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}
export default MenuItem

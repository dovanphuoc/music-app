import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './MenuItem.module.scss'
function MenuItem(props) {
  return (
    <li className={styles.menuItem} >
        <Link to={props.path}>
            {props.icon}
            <span>{props.text}</span>
        </Link>
    </li>
  )
}
MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}
export default MenuItem

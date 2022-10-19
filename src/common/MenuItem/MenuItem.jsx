import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styles from './MenuItem.module.scss'
function MenuItem(props) {
  return (
    <NavLink className={props.className} to={props.path}>
      {props.icon}
      <span className={styles.text}>{props.text}</span>
    </NavLink>
  )
}
MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}
export default MenuItem

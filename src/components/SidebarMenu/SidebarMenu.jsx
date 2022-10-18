import React from 'react'
import MenuItem from '../../common/MenuItem/MenuItem'
import { FaBeer } from 'react-icons/fa'
import styles from './SidebarMenu.module.scss'
import logo from '../../images/logo-dark.svg'
function SidebarMenu() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.navbarTop}>
        <img src={logo} alt="logo" />
      </div>      
      <div className={styles.navbarMain}>
        <ul>
          <MenuItem 
            path="/my-music" 
            icon={<FaBeer />} 
            text="Cá Nhân" 
          />
        </ul>
      </div>
    </div>
  )
}

export default SidebarMenu

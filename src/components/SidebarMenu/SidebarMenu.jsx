import React from 'react'
import MenuItem from '../../common/MenuItem/MenuItem'
import { FiMusic } from 'react-icons/fi'
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
            icon={<FiMusic />} 
            text="Cá Nhân" 
          />
          <MenuItem 
            path="/my-music" 
            icon={<FiMusic />} 
            text="Khám Phá" 
          />
          <MenuItem 
            path="/my-music" 
            icon={<FiMusic />} 
            text="#zingchart" 
          />
          <MenuItem 
            path="/my-music" 
            icon={<FiMusic />} 
            text="Radio" 
          />
          <MenuItem 
            path="/my-music" 
            icon={<FiMusic />} 
            text="Theo Dõi" 
          />
        </ul>
      </div>
      <div className={styles.sidebarDivide}></div>
      <div className={styles.sidebarType}>
        <div className={styles.sidebarScrollBar}></div>
        <div className={styles.trackHorizontal}></div>
        <div className={styles.trackVertical}></div>
      </div>
    </div>
  )
}

export default SidebarMenu

import React from 'react'
import MenuItem from '../../common/MenuItem/MenuItem'
import { FiMusic } from 'react-icons/fi'
import styles from './SidebarMenu.module.scss'
import Button from '../../common/Button/Button'
import routes from '../../constants/routes/routes'
import { Link } from 'react-router-dom'

function SidebarMenu() {
  return (
    <div className={styles.sidebar}>
      <div  className={styles.navbarTop}>
        <Link to={routes.homePage}>
          <div className={styles.bgLogo}></div>
        </Link>
      </div>      
      <div className={styles.navbarMain}>
        <div>
          <MenuItem 
            path={routes.profile} 
            icon={<FiMusic />} 
            text="Cá Nhân" 
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          />
          <MenuItem 
            path={routes.homePage}
            icon={<FiMusic />} 
            text="Khám Phá" 
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          />
          <MenuItem 
            path={routes.zingChart}
            icon={<FiMusic />} 
            text="#zingchart" 
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          />
          <MenuItem 
            path={routes.radio}
            icon={<FiMusic />} 
            text="Radio" 
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          />
          <MenuItem 
            path={routes.singer}
            icon={<FiMusic />} 
            text="Theo Dõi" 
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          />
        </div>
      </div>
      <div className={styles.sidebarDivide}></div>
      <div className={styles.navbarMain}>
        <div className={styles.sidebarSecond}>
          <MenuItem 
            path={routes.newSong}
            icon={<FiMusic />} 
            text="Nhạc Mới" 
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)}
          />
          <MenuItem 
            path={routes.typeSong} 
            icon={<FiMusic />} 
            text="Thể Loại"
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)} 
          />
          <MenuItem 
            path={routes.top}
            icon={<FiMusic />} 
            text="Top100"
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)} 
          />
          <MenuItem 
            path={routes.mv} 
            icon={<FiMusic />} 
            text="MV"
            className={({ isActive }) => (isActive ? styles.linkActive : styles.link)} 
          />
        </div>
      </div>
      <div className={styles.vipBanner}>
          <p className={styles.text}>Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
          <Button isLink linkContent="Nâng cấp vip" />
      </div>
    </div>
  )
}

export default SidebarMenu

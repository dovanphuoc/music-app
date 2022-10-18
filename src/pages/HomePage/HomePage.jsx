import React from 'react'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import HeaderMenu from '../../components/Header/Header'
import PlayerQueue from '../../components/PlayerQueue/PlayerQueue'
import PlayControl from '../../components/PlayControl/PlayControl'
import styles from './HomePage.module.scss'
function HomePage() {
  return (
    <div className={styles.mainLayout}>
        <SidebarMenu />
        <HeaderMenu />
        <PlayerQueue />
        <PlayControl />
    </div>
  )
}

export default HomePage

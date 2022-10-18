import React from 'react'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import HeaderMenu from '../../components/Header/Header'
import PlayerQueue from '../../components/PlayerQueue/PlayerQueue'
import PlayControl from '../../components/PlayControl/PlayControl'
function HomePage() {
  return (
    <>
        <SidebarMenu />
        <HeaderMenu />
        <PlayerQueue />
        <PlayControl />
    </>
  )
}

export default HomePage

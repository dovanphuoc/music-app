import React from 'react'
import PlayerQueue from '../PlayerQueue/PlayerQueue'
import styles from './NowPlaying.module.scss'
function NowPlaying() {
  return (
    <div className={styles.nowPlayingBar}>
        <PlayerQueue />
        <div className={`${styles.playerControl} ${styles.clickable}`}>
            <div className={`${styles.playerControlContainer} ${styles.level}`}>
                <div className={`${styles.playerControlLeft} ${styles.levelLeft}`}>

                </div>
                <div className={`${styles.playControlBar} ${styles.levelCenter}`}>

                </div>
                <div className={`${styles.playControlRight} ${styles.levelRight}`}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default NowPlaying

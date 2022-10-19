import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import RadioSong from './pages/RadioSong/RadioSong';
import ZingChart from './pages/ZingChart/ZingChart';
import NewSong from './pages/NewSong/NewSong'
import GenreSong from './pages/GenreSong/GenreSong'
import TopSong from './pages/TopSong/TopSong'
import MvSong from './pages/MvSong/MvSong'
import HomePage from './pages/HomePage/HomePage';
import SidebarMenu from './components/SidebarMenu/SidebarMenu'
import HeaderMenu from './components/Header/Header'
import PlayerQueue from './components/PlayerQueue/PlayerQueue'
import PlayControl from './components/PlayControl/PlayControl'
import routes from './constants/routes/routes';
import styles from './App.module.scss'
import NowPlaying from './components/NowPlaying/NowPlaying';
function App() {
  return (
    <div className={styles.layout}>
      <SidebarMenu />
      <HeaderMenu />
      <PlayerQueue />
      <PlayControl />
      <NowPlaying />
      <Routes>
        <Route element={<HomePage />} path={routes.homePage} />
        <Route element={<ZingChart />} path={routes.zingChart} />
        <Route element={<Profile />} path={routes.profile} />
        <Route element={<RadioSong />} path={routes.radio} />
        <Route element={<NewSong />} path={routes.newSong} />
        <Route element={<GenreSong />} path={routes.typeSong} />
        <Route element={<TopSong />} path={routes.top} />
        <Route element={<MvSong />} path={routes.mv} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import RadioSong from './pages/RadioSong/RadioSong';
import ZingChart from './pages/ZingChart/ZingChart';
import NewSong from './pages/NewSong/NewSong'
import GenreSong from './pages/GenreSong/GenreSong'
import TopSong from './pages/TopSong/TopSong'
import MvSong from './pages/MvSong/MvSong'
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<ZingChart />} path="/zing-chart" />
      <Route element={<Profile />} path="/my-music" />
      <Route element={<RadioSong />} path="/radio" />
      <Route element={<NewSong />} path="/moi-phat-hanh" />
      <Route element={<GenreSong />} path="/hub" />
      <Route element={<TopSong />} path="/top100" />
      <Route element={<MvSong />} path="the-loai-video/Viet-Nam" />
    </Routes>
  );
}

export default App;

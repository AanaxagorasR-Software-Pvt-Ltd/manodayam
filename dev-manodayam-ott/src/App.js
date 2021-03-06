import "./App.css";
import Header from "./component/Header";
import Updates from "./pages/Updates";
import Sleep from "./pages/Sleep";
import Music from "./pages/Music";
import Masterclass from "./pages/Masterclass";
import Body from "./pages/Body";
import Profile from "./pages/Profile";
import Scene from "./pages/Scene";
import Meditate from "./pages/Meditate";
import Musicplayer from "./pages/Musicplayer";
import Videoplayer from "./pages/Videoplayer";
import Vdolist from "./pages/Vdolist";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter basename="/shakthi-ott">
        <Header />
        <Routes>
          <Route path="/" exact element={<Updates />} exact />
          <Route path="/updates" element={<Updates />} exact />
          <Route path="/sleep" element={<Sleep />} exact />
          <Route path="/music" element={<Music />} exact />
          <Route path="/masterclass" element={<Masterclass />} exact />
          <Route path="/body" element={<Body />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/scene" element={<Scene />} exact />
          <Route path="/meditate" element={<Meditate />} exact />
          <Route path="/musicplayer" element={<Musicplayer />} exact />
          <Route path="/videoplayer" element={<Videoplayer />} exact />
          <Route path="/vdolist" element={<Vdolist />} exact />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

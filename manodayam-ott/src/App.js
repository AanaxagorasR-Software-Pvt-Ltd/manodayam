import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Sleep from './pages/Sleep';
import Music from './pages/Music';
import Masterclass from './pages/Masterclass';
import Body from './pages/Body';
import Profile from './pages/Profile';
import Scene from './pages/Scene';
import Meditate from './pages/Meditate';
import Musicplayer from './pages/Musicplayer';
import Videoplayer from './pages/Videoplayer';


import{BrowserRouter,Routes,Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
 <Header/> 

<Routes>
<Route path="/" exact element={<Home/>}exact />
<Route path="/home" element={<Home/>}exact />
<Route path="/sleep" element={<Sleep/>}exact />
<Route path="/music" element={<Music/>}exact />
<Route path="/masterclass" element={<Masterclass/>}exact />
<Route path="/body" element={<Body/>}exact />
<Route path="/profile" element={<Profile/>}exact />
<Route path="/scene" element={<Scene/>}exact />
<Route path="/meditate" element={<Meditate/>}exact />
<Route path="/musicplayer" element={<Musicplayer/>}exact />
<Route path="/videoplayer" element={<Videoplayer/>}exact />
</Routes>


    




       </BrowserRouter>
    </>
  );
}

export default App;

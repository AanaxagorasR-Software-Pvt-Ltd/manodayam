import React from 'react'
// import './App.css'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Errorpage from './pages/Errorpage';

function App() {
  return (
  <>
  <Routes>
    {/* <Route exact path='/' element={<Home/>}/> */}
  <Route path="/" element={<Errorpage/>}/>
  </Routes>
  </>
  );
}

export default App;

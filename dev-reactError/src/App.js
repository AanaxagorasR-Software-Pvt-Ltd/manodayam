import React from "react";
// import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Errorpage from "./pages/Errorpage";

function App() {
  return (
    <>
      {/* <BrowserRouter basename="/"> */}
        <Routes >
          {/* <Route exact path='/' element={<Home/>}/> */}
          <Route path="/" element={<Errorpage />} />
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

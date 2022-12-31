import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DraftMainPage from './draftLottery/DraftMainPage';
import AboutPage from './about/AboutPage';
import NavBar from './NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/funtools/About" element={<AboutPage/>} />
        <Route exact path="/funtools/Draft" element={<DraftMainPage/>} />
        <Route exact path="/funtools" element={<AboutPage/>} />
        <Route exact path="/" element={<AboutPage/>} />
      </Routes>
    </div>
  );
}

export default App;
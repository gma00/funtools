import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DraftMainScreen from './draftLottery/DraftMainScreen';
import './App.css';
import NavBar from './NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/About" component={<DraftMainScreen/>} />
        <Route exact path="/Draft" element={<DraftMainScreen/>} />
        <Route exact path="/" element={<DraftMainScreen/>} />
      </Routes>
    </div>
  );
}

export default App;

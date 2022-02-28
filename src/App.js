import React from 'react';
import './App.css';
import Home from './Home';
import Skills from './Skills';
import { Routes, Route, Link } from "react-router-dom";

const App = () =>{
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
    </Routes>
  );
}

export default App;

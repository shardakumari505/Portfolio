import React from 'react';
import './App.css';
import Home from './Home';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import { Routes, Route } from "react-router-dom";

const App = () =>{
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="Projects" element={<Projects />} />
    </Routes>
  );
}

export default App;

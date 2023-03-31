import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar'
import {Routes,Route} from 'react-router-dom';
import AboutMe from './Pages/AboutMe';
import Qualification from './Pages/Qualification';
import Skills from './Pages/Skills';
import Experience from './Pages/Experience';
import Hobbies from './Pages/Hobbies';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/Qualification" element={<Qualification/>}/>
        <Route path="/Skills" element={<Skills/>}/>
        <Route path="/Experience" element={<Experience/>}/>
        <Route path="/Hobbies" element={<Hobbies/>}/>
</Routes>
    </div>
  );
}

export default App;

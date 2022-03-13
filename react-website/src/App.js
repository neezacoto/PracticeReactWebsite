import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="*" element = {<ErrorPage/>}/>
      </Routes>
    </Router>
    </>
    
  );
}

export default App;

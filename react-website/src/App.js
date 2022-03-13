import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import ErrorPage from './components/pages/ErrorPage';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/sign-up' element = {<SignUp/>}/>
        <Route path="*" element = {<ErrorPage/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
    
  );
}

export default App;

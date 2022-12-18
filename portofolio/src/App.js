import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderComponent } from './components/Header.js';
import { FooterComponent } from './components/Footer.js';
import Home from './pages/Home.js';
import Lookbook from './pages/Lookbook.js';
import AboutMe from './pages/AboutMe.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import NoPage from './pages/NoPage.js';

function App() {
    return ( 
          <Router>
            <HeaderComponent/>
            <Routes>
              <Route path="/" element={Home } />
              <Route path="/Lookbook" element={Lookbook } />
              <Route path="/Projects" element={AboutMe } />
              <Route path="/AboutMe" element={Projects } />
              <Route path="/Contact" element={Contact } />
              <Route path="*" element={NoPage } />
            </Routes>
            <FooterComponent/>
          </Router>
        
    );
}

export default App;
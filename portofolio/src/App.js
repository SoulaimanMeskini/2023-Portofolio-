import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderComponent } from './components/Header.js';
import { FooterComponent } from './components/Footer.js';


import { HomeComponent } from './pages/Home.js';
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
              <Route path="/lookbook" component={Lookbook} />
              <Route path="/projects" component={AboutMe} />
              <Route path="/aboutme" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="*" component={NoPage} />
            </Routes>
            <FooterComponent/>
            <HomeComponent/>
          </Router>
    );
}


export default App;
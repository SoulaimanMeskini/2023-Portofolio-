import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu.js';
import Home from './pages/Home.js';
import Lookbook from './pages/Lookbook.js';
import AboutMe from './pages/AboutMe.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import NoPage from './pages/NoPage.js';

function App() {
    return ( 
     
        <Menu>
          <Routes>
            <Route path='/' element={<Menu/>}>
              <Route index element={<Home/>}/>
              <Route path='lookbook' element={<Lookbook/>}/>
              <Route path='aboutme' element={<AboutMe/>}/>
              <Route path='projects' element={<Projects/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path="*" element={<NoPage/>}/>
            </Route>
          </Routes>
        </Menu>
    );
}

export default App;
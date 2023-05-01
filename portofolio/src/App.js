import React from 'react';
<<<<<<< Updated upstream
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
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

export default App;
=======

import { HeaderComponent } from './components/Header.js';

import { RootRouter } from './Router/Router.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<>
			<BrowserRouter>
				<RootRouter />
				<HeaderComponent />
			</BrowserRouter>
		</>
	);
}

export default App;
>>>>>>> Stashed changes

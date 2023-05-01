import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomeComponent from '../pages/Home';
import Lookbook from '../pages/Lookbook';
import Contact from '../pages/Contact';
import AboutMe from '../pages/AboutMe';
import Nopage from '../pages/NoPage';

export const RootRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeComponent />}></Route>
			<Route path='/contact' element={<Contact />}></Route>
			<Route path='/lookbook' element={<Lookbook />}></Route>
			<Route path='/aboutme' element={<AboutMe />}></Route>
			<Route path='*' element={<Nopage />} />
		</Routes>
	);
};

import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Menu() {
    return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/lookbook">Lookbook</Link>
                </li>
                <li>
                    <Link to="/Aboutme">Aboutme</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>
    );
}

export default Menu;
import React from "react";
import { Link } from "react-router-dom";
import './header.css'
const Header =  () => (
    <header className="header">
        <h1>Manage Images Gallery   </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/gallery/">Gallery</Link>
                </li>
                <li>
                    <Link to="/upload/">Upload New Image</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;

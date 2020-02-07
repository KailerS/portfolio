import React from "react";
// Imports my css file
import "./style.css";
// Imports the ability to link properly on a single page app
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav>
            <div className="navHolder">
                <h1>Kailer Smith</h1>
                <ul>
                    <li>
                        {/* Links to about me page */}
                        <Link to="/about">About</Link> 
                    </li>
                    <li>
                        {/* Links to my projects */}
                        <Link  to="/projects">Projects</Link>
                    </li>
                    <li>
                        {/* Link to my contact */}
                        <Link to ="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
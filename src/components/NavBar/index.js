import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function NavBar () {
    return (
        <nav>
            <div className="navHolder">
                <h1>Kailer Smith</h1>
                <ul>
                    <li>
                        <Link to="/about">About</Link> 
                    </li>
                    ||
                    <li>
                        <Link  to="/projects">Projects</Link>
                    </li>
                    ||
                    <li>
                        <Link to ="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
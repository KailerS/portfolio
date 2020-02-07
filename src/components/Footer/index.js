import React from "react";
// Importing my css file
import "./style.css";
// Makes sure the Links work properly
import { Link } from "react-router-dom";

// Footer component
const Footer = () => {
    return (
        <footer>
                <div id="footerDiv">
                    {/* Link to github with a github icon */}
                    <a href="https://github.com/KailerS" target="blank">
                        <i className="fab fa-github-square fa-3x"></i>
                    </a>
                    {/* Link to the home page with a house icon */}
                    <Link to="/">
                        <i className="fas fa-home fa-3x"></i>
                    </Link>
                    {/* Link to LinkedIn with a LinkedIn icon */}
                    <a href="https://www.linkedin.com/in/kailer-smith-4a5a9711b/" target="blank">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                </div>
                      
            </footer>
    )
}


export default Footer;
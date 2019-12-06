import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <footer>
                <div id="footerDiv">
                    <a href="https://github.com/KailerS" target="blank">
                        <i className="fab fa-github-square fa-3x"></i>
                    </a>
                    <Link to="/">
                        <i className="fas fa-home fa-3x"></i>
                    </Link>
                    <a href="https://www.linkedin.com/in/kailer-smith-4a5a9711b/" target="blank">
                        <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                </div>
                      
            </footer>
    )
}


export default Footer;
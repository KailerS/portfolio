import React from "react";
// Takes the style sheet for the homepage
import "./styles.css";
// Makes it so links work properly inside a single page application
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div id="homepageDiv">
                <h1>Kailer Smith</h1>
                <h2>Web Developer</h2>
                {/* Link to get to the about page */}
                <h2><Link to="/about">Get to Know More!</Link></h2>
                <h3>Click the icons in the footer to find my github profile and my LinkedIn page!</h3>  
            </div>
            <div id="homeIconHolder">
                {/* Images of languages */}
                <img src="./assets/images/react.png" alt="react"/>
                <img src="./assets/images/HTML.png" alt="html"/>
                <img src="./assets/images/CSS.png" alt="css"/>
                <img src="./assets/images/node.png" alt="node"/>
            </div>               
        </>
    )
}


export default Home;
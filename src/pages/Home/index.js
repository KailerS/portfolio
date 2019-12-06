import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

function Home () {
    return (
        <>
            <div id="homepageDiv">
                <h1>Kailer Smith</h1>
                <h2>Web Developer</h2>
                <h2><Link to="/about">Get to Know More!</Link></h2>
                <h3>Click the icons in the footer to find my github profile and my LinkedIn page!</h3>  
            </div>
            <div id="homeIconHolder">
                <img src="./assets/images/react.png" alt="react"/>
                <img src="./assets/images/html.webp" alt="html"/>
                <img src="./assets/images/css.webp" alt="css"/>
                <img src="./assets/images/node.png" alt="node"/>
            </div>               
        </>
    )
}


export default Home;
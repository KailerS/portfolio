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
                <img src="https://cdn.auth0.com/blog/react-js/react.png" alt="react"/>
                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" alt="html"/>
                <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" alt="css"/>
                <img src="https://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png" alt="node"/>
            </div>               
        </>
    )
}


export default Home;
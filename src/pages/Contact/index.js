import React from "react";
import NavBar from "../../components/NavBar";
import "./style.css";

function Contact () {
    return (
        <>
            <NavBar />
            <div id="contactContainer">
                <h1>Contact Information</h1>
                <p><i className="far fa-envelope"/> Email: Kailersmith55@gmail.com</p>
            </div>
        
        </>
    )
}


export default Contact;
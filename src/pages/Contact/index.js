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
                <p><i className="fas fa-mobile-alt"/> Phone: (360) 471-4132</p>
                <p><i className="fas fa-map-marker-alt"/> Location: Denver, CO</p>
            </div>
        
        </>
    )
}


export default Contact;
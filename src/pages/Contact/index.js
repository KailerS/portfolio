import React from "react";
// Imports the NavBar component to add to the page
import NavBar from "../../components/NavBar";
// Imports my style sheet
import "./style.css";

// Contact page
const Contact = () => {
    return (
        <>
            {/* NavBar on top followed by my information */}
            <NavBar />
            <div id="contactContainer">
                <h1>Contact Information</h1>
                <p><i className="far fa-envelope"/> Email: Kailersmith55@gmail.com</p>
            </div>
        
        </>
    )
}


export default Contact;
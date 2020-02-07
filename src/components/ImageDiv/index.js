import React from "react";
// Import my styles from the css file
import "./style.css";

// This component recieves props from the page it gets imported into
const ImageDiv = props => {
    
    return (
        <>
            {/* A div for each project to go into */}
            <div className="projectHolder">
                <div
                key={props.id}
                className="click-item"
                id={props.id}
                style={{backgroundImage: `url(${props.image})`}}          
                >
                {/* If the data being passed through contains a title include the proper links */}
                {props.title ?
                    <div className="linkHolder">
                        <a href={props.link} target="blank">{props.title} (Live)</a>
                        <br />
                        <a href={props.repo} target="blank">Repository link</a>
                    </div>
                    :""               
                }
                </div>
                {/* Hold the description of the project */}
                <div className="descriptionHolder">
                    <p>{props.description}</p>
                </div>
            </div>
            
        </>
    )
}


    


export default ImageDiv;
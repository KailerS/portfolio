import React from "react";
import "./style.css";

function ImageDiv (props) {
    
    return (
        <>
            <div className="projectHolder">
                <div
                key={props.id}
                className="click-item"
                id={props.id}
                style={{backgroundImage: `url(${props.image})`}}          
                >
                    <div className="linkHolder">
                        <a href={props.link} target="blank">{props.title} (Live)</a>
                        <br />
                        <a href={props.repo} target="blank">Repository link</a>
                    </div>
                </div>
                <div className="descriptionHolder">
                    <p>{props.description}</p>
                </div>
            </div>
            
        </>
    )
}


    


export default ImageDiv;
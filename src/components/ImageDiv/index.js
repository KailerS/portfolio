import React from "react";
import "./style.css";

function ImageDiv (props) {
    
    return (
        <>
            <div
            key={props.id}
            className="click-item"
            id={props.id}
            style={{backgroundImage: `url(${props.image})`}}          
            >
                <div className="linkHolder">
                    <a href={props.link} target="blank">{props.title}</a>
                </div>
            </div>
            
        </>
    )
}


    


export default ImageDiv;
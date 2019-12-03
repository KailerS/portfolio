import React from "react";
import ImageDiv from "../components/ImageDiv/index";
import data from "../data.json";
import NavBar from "../components/NavBar";

function Project () {
    return (
        <>
            <NavBar />
            <div className="container">
                <div style={{width:"100%", textAlign:"center"}}>
                    <h1>Some Examples of My Work!</h1>
                </div>
                {data.map(project => (
                    <ImageDiv 
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        link={project.link}
                        title={project.title}
                    />
                ))}
            </div>
        </>
    )
}


export default Project;
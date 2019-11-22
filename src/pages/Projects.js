import React from "react";
import ImageDiv from "../components/ImageDiv/index";
import data from "../data.json";

function Project () {
    return (
        <>
            <div></div>
            <h1>Projects!</h1>
            <div className="container">
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
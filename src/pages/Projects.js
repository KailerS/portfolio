import React from "react";
// Importing the images component into the projects page
import ImageDiv from "../components/ImageDiv/index";
// Importing the JSON data featuring my projects into the page
import data from "../data.json";
// A nav bar component
import NavBar from "../components/NavBar";

const Project =  () => {
    return (
        <>
            <NavBar />
            <div className="container">
                {/* In-line styling for the div */}
                <div style={{width:"100%", textAlign:"center"}}>
                    <h1 id="projectHeader">Some Examples of My Work!</h1>
                </div>
                {/* Since the projects are in an array it can be mapped through and a div made for each one */}
                {data.map(project => (
                    // Creates a div for each project and passes on the following info to the ImageDiv component
                    <ImageDiv 
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        link={project.link}
                        title={project.title}
                        description={project.description}
                        repo={project.repo}
                    />
                ))}
            </div>
        </>
    )
}


export default Project;
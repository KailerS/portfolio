import React from "react";
import NavBar from "../../components/NavBar";
import ImageDiv from "../../components/ImageDiv"
import "./style.css"

function About () {
    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <div id="imageHolder">
                <ImageDiv
                        id="photo"
                        image="./public/assets/images/Me.JPG" 
                    />  
                    <ImageDiv
                        id="resume"
                        image="./public/assets/images/resume.jpg"
                        link="./assets/pdf/Resume.pdf"
                        title="Check out My Resume!" 
                    />                    
                </div>
                <h2 id="aboutHeader">About Me!</h2>
                <div id="aboutContent">
                    <h3>Background</h3>
                    <p>Originally from Gig Harbor, Washington I moved to Denver in March of 2019. I have lived in 5 states including Texas, Illinois, Tennessee, Washington, and now Colorado. Living in different states has exposed me to new experiences and made me grow as an individual. </p>
                    <p>I played four years of college baseball including two at the NCAA D-1 level. I have a lot of experience in the team-environment and working with others towards a common goal. This experience has taught me a lot including responsibility, accountability, and putting in the hard work needed to be successful.</p>
                    <h3>Education</h3>
                    <p>I completed undergraduate with a bachelor's degree in business administration from SIUE <a href="http://www.siue.edu/business/" target="blank">(Southern Illinois Univerity Edwardsville)</a>. I recently chose to switch career paths into web development shortly before moving to Colorado. This change prompted me to complete a full-stack web dev course from University of Denver. I officialy graduated on December 14th 2019. I enjoyed the course and all the new material I learned, and I look forward to continue to learn while increasing my abilities.</p>
                    <h3>Hobbies</h3>
                    <p>I am very passionate about sports. I really enjoy watching as well as competing in my favorite sports. I play in a men's baseball league on Sundays and play small team rec soccer in local social leagues. I also enjoy outdoor activities like hiking, kayaking, biking, and snowboarding. As much as I like being outdoors and active I am also passionate about videogames. The E-sports scene is growing and plenty of games are entertaining and fun to watch even if I'm not great at the game myself.</p>
                </div>
            </div>
        </>

    )
}


export default About;
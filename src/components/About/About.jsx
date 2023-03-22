// General Imports
import React from 'react';

// Asset Imports
import person from "../../assets/person.png";


const AboutSection = () => {
    return ( 
        <div className="container__about">
            <div className="about__title">
                <img src={person} alt="person__icon" />
                <h2>About</h2>
            </div>
            <div className="about__qa">
                <h4>Work best when...</h4>
                    <p>Presented with a challenging task and treated with respect, trust, and transparency</p>
                <h4>Want a company that...</h4>
                    <p>Cultivates growth, teamwork, and flexibility</p>
                <h4>My last boss would describe me as...</h4>
                    <p>Reliable, creative, hard working, positive, and set the bar high for all that follow</p>
            </div>
            <div className="about__description">
                <p>
                    Actively searching for an entry-level position as a Junior Software Developer.
                    <br></br> 
                    Having found success in both independent atmospheres and team-focused professional environments. 
                    <br></br><br></br>
                    This industry suits my many interests, compliments my creative talents, and ignites my personal passions. 
                    <br></br>
                    The facet that excites me most is the changing challenges and endless opportunities for finding creative ways to solve common problems.
                </p>
            </div>
        </div>  
     );
}
 
export default AboutSection;
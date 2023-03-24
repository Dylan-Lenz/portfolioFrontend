// General Imports
import React from 'react';
import "./About.css";


const AboutSection = () => {
    return ( 
        <div className="about__wrapper">
            <div className="about__description">
                <h2 className="about__title">About</h2>
                <p>
                    Full Stack Software Developer with a keen eye for design, having found success in both independent and team-focused professional projects. 
                    Web Design & Development suit my many interests, compliment my creative talents, and ignite my personal passions. 
                    The facet that excites; is the changing challenges and the endless opportunities for finding creative ways to solve common problems.
                    The facet that satisfies; is breathing the soul of style into an idea and watching it come alive right before my eyes. 
                </p>
            </div>
            <div className="about__qa">
                <h4 className="about__header">Work best when...</h4>
                    <p className="about__text">Presented with a challenging task and treated with respect, trust, and transparency</p>
                <h4 className="about__header">Want a company that...</h4>
                    <p className="about__text">Cultivates growth, teamwork, and flexibility</p>
                <h4 className="about__header">My last client would describe me as...</h4>
                    <p className="about__text">Reliable, creative, hard working, positive, and set the bar high for all that follow</p>
            </div>
        </div>
     );
}
 
export default AboutSection;
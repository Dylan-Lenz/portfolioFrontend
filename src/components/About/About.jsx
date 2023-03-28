// General Imports
import React from 'react';
import "./About.css";


const AboutSection = () => {
    return ( 
        <div className="about__wrapper">
            <div className="about__description">
                <h2 className="about__title">About</h2>
                <p>
                    Full Stack Software Developer with a keen eye for Front-End Design, having found success with both independent and team-focused professional projects. 
                    Web Design & Development suit my many interests, compliment my creative talents, and ignite my personal passions.
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
            <div className="about__focus">
                <div className="set1__focus">
                    <span className="title__focus"><h4>Excites...</h4></span>
                    <span className="description__focus"><p>Conquering challenges by learning new creative ways to solve common problems.</p></span>
                </div>
                <div className="set2__focus">
                    <span className="title__focus"><h4>Satisfies...</h4></span>
                    <span className="description__focus"><p>Breathing the soul of style into an idea and watching it come alive.</p></span>
                </div>
            </div>
        </div>
     );
}
 
export default AboutSection;
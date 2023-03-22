// General Imports
import React from 'react';

// Asset Imports
import folder from "../../assets/folder.png";
import golee from "../../assets/golee.png";
import mocktube from "../../assets/mocktube.png";

const PortfolioSection = () => {
    return ( 
        <div className="container__portfolio">
            <div className="title__portfolio">
                <img src={folder} alt="folder__icon" />
                <h2>Projects</h2>
            </div>
            <div className="golee__portfolio">
                <h4>Goal Tracking Application</h4>
                <p>
                    A goal tracking application where you can create custom goals, add influences on those
                    goals, and easily visualize those results over time.
                </p>
                <img src={golee} alt="golee__snap" />
            </div>
            <div className="mocktube__portfolio">
                <h4>YouTube Clone Application</h4>
                    <p>
                        Used Python, Django, React, JavaScript, HTML/CSS to build a responsive
                        YouTube Clone application to search for YouTube videos via wrapper around Google
                        YouTube API.
                    </p>
                <img src={mocktube} alt="mocktube__snap" />
            </div>
        </div>
     );
}
 
export default PortfolioSection;
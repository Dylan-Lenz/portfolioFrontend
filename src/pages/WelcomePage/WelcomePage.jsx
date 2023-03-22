// General Imports
import React from 'react';

// Asset Imports
import BlackV from "../../assets/BlackV.jpg";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import person from "../../assets/person.png";
import folder from "../../assets/folder.png";
import golee from "../../assets/golee.png";
import mocktube from "../../assets/mocktube.png";
import checkbox from "../../assets/checkbox.png";


const WelcomePage = () => {
    return ( 
        <div className="container">
            <div className="info__container">
                <div className="headshot">
                    <img src={BlackV} alt="headshot" />
                </div>
                <div className="info">
                    <h2 className="header">Dylan Lenz</h2>
                        <ul >
                            <li>
                                <a href="https://www.google.com/maps/place/Madison,+WI/@43.0846517,-89.6867705,10z/data=!3m1!4b1!4m6!3m5!1s0x8806536d3a2019ff:0x4e0cfcb5ba484198!8m2!3d43.0721661!4d-89.4007501!16zL20vMGZ3Mnk">
                                    <img src={location} alt="location__icon" />
                                </a>
                                <p>Madison, Wi, US</p>
                                <p>Willing to Relocate</p>
                                <p>Office Preference: Hybrid - 100% Remote - 100% Office</p>
                            </li>
                            <li>
                                <img src={phone} alt="phone__icon" />
                                <p>(602) 402-3836</p>
                            </li>
                            <li>
                                <img src={email} alt="email__icon" />
                                <p>dylanjlenz@gmail.com</p>
                            </li>
                        </ul>
                    <hr></hr>
                </div>
            </div>
            <div className="about__container">
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
            <hr></hr>
            <div className="container__projects">
                <div className="projects__title">
                    <img src={folder} alt="folder__icon" />
                    <h2>Projects</h2>
                </div>
                <div className="golee__projects">
                    <h4>Goal Tracking Application</h4>
                    <p>
                        A goal tracking application where you can create custom goals, add influences on those
                        goals, and easily visualize those results over time.
                    </p>
                    <img src={golee} alt="golee__icon" />
                </div>
                <div className="mocktube__projects">
                    <h4>YouTube Clone Application</h4>
                        <p>
                            Used Python, Django, React, JavaScript, HTML/CSS to build a responsive
                            YouTube Clone application to search for YouTube videos via wrapper around Google
                            YouTube API.
                        </p>
                    <img src={mocktube} alt="mocktube__icon" />
                </div>
            </div>
            <hr></hr>
            <div className="skills__container">
                <div className="title__skills">
                    <img src={checkbox} alt="checkbox__icon" />
                    <h2>Skills</h2>
                </div>
                <div className="hard__skills">
                    <h3>Hard Skills</h3>
                    <div className="languages__skills">
                        <h4>Languages</h4>
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML/CSS</li>
                            <li>C#</li>
                            <li>JSON</li>
                            <li>SQL</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="technologies__skills">
                        <h4>Technologies</h4>
                        <ul>
                            <li>MySQL</li>
                            <li>GitHub</li>
                            <li>PostMan</li>
                            <li>Visual Studio Code</li>
                            <li>Visual Studio</li>
                            <li>Adobe XD</li>
                            <li>AWS</li>
                            <li>Web Services & REST API's</li>
                            <li>JWT</li>
                            <li>AGILE</li>
                        </ul>
                    </div>
                    <div className="frameworks__skills">
                        <h4>Frameworks</h4>
                        <ul>
                            <li>Django REST Framework</li>
                            <li>.Net</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                </div>
                <div className="soft__skills">
                    <h3>Soft Skills</h3>
                    <ul>
                        <li>Leadership</li>
                        <li>Project Management</li>
                        <li>Drive</li>
                        <li>Product Features & Benefits</li>
                        <li>Creativity</li>
                        <li>Problem Solving</li>
                        <li>Planning</li>
                        <li>Active Learning</li>
                        <li>Adaptability</li>
                        <li>Analysis</li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default WelcomePage;
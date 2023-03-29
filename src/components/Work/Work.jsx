// General Imports
import React from 'react';
import "./Work.css";

// Asset Imports
import golee from "../../assets/golee.png";
import mocktube from "../../assets/mocktube.png";
import musiclibrary from "../../assets/musiclibrary.png";
import mostwanted from "../../assets/mostwanted.png";
import ecommerce from "../../assets/ecommerce.png";
import heroesvillains from "../../assets/heroesvillains.png";
import rpsls from "../../assets/rpsls.png";
import robotsvdinosaurs from "../../assets/robotsvdinosaurs.png";
import tripgenerator from "../../assets/tripgenerator.png";

const WorkSection = () => {
    return ( 
        <div className="container__work">
            <div className="title_section__work">
                <h2 className="title__work">The Work</h2>
                <a href="https://github.com/Dylan-Lenz">
                    <div className="title_text__work">
                        <p>Check The Code @GitHub</p>
                    </div>
                </a>
            </div>
            <div className="wrapper__work">
                <a href="https://github.com/Dylan-Lenz/golee">
                    <div className="card__work">
                        <img className="image__work" src={golee} alt="golee__snip" />
                        <h4 className="header__work">Goal Tracking Application</h4>
                            <p className="text__work">
                                A Goal Tracking Application Creating Custom Goals, Adding Influences On Those
                                Goals, & Easily Visualize Results Over Time.
                            </p>
                    </div>
                </a>
                <a href="https://github.com/Dylan-Lenz/youtubeClone_frontend">
                    <div className="card__work">
                        <img className="image__work" src={mocktube} alt="mocktube__snip" />
                        <h4 className="header__work">YouTube Clone Application</h4>
                            <p className="text__work">
                                Responsive YouTube Clone Application To Search YouTube Videos via Google API.
                            </p>
                    </div>
                </a>
                <a href="https://github.com/Dylan-Lenz/Music_Lib_Frontend">
                    <div className="card__work">
                        <img className="image__work" src={musiclibrary} alt="musiclibrary__snip" />
                        <h4 className="header__work">Music Library 3rd Party API</h4>
                            <p className="text__work">
                                Utilizing FullStack Applications To Save Data From Frontend To The Back, While Calling 3rd Party API's. 
                            </p>
                    </div>
                </a>
                <a href="https://github.com/Dylan-Lenz/MostWanted_JavaScript">
                    <div className="card__work">
                        <img className="image__work" src={mostwanted} alt="mostwanted__snip" />
                        <h4 className="header__work">Most Wanted JavaScript</h4>
                            <p className="text__work">
                                Person Searching Application Using JS Callbacks, Array Methods, & Objects.  
                            </p>
                    </div>
                </a>
                <a href="https://github.com/Dylan-Lenz/eCommerce">
                    <div className="card__work">
                        <img className="image__work" src={ecommerce} alt="ecommerce__snip" />
                        <h4 className="header__work">eCommerce Prototype</h4>
                            <p className="text__work">
                                Frontend HTML/CSS Application Focusing On Styling w/ Flex & Grid.  
                            </p>
                    </div>
                </a>
                <a href="https://github.com/Dylan-Lenz/eCommerce">
                    <div className="card__work">
                        <img className="image__work" src={heroesvillains} alt="heroesvillains__snip" />
                        <h4 className="header__work">Heroes & Villains</h4>
                            <p className="text__work">
                            Using Django Rest FrameWork w/ Rest API & Postman for Testing Endpoints.
                            </p>
                    </div>
                </a>
                <a href="https://github.com/Dylan-Lenz/RPSLS">
                    <div className="card__work">
                        <img className="image__work" src={rpsls} alt="rpsls__snip" />
                        <h4 className="header__work">Rock, Paper, Scissors, Lizard, Spock</h4>
                            <p className="text__work">
                            Created A Game Using Python Object-Orientated Programming Concepts of Classes/Objects, Properties, Methods, & Inheritance.
                            </p>
                    </div>
                </a>
                <a href="https://github.com/Dylan-Lenz/robots_vs_dinosaurs">
                    <div className="card__work">
                        <img className="image__work" src={robotsvdinosaurs} alt="robotsvdinosaurs__snip" />
                        <h4 className="header__work">Robots VS Dinosaurs UML</h4>
                            <p className="text__work">
                            Created A Game Using Python Object-Orientated Programming Concepts of Classes/Objects, Focusing On UML (Unified Modeling Langauge).
                            </p>
                    </div>
                </a>
                <a href="https://github.com/Dylan-Lenz/trip_gen_repo">
                    <div className="card__work">
                        <img className="image__work" src={tripgenerator} alt="tripgenerator__snip" />
                        <h4 className="header__work">Day Trip Generator</h4>
                            <p className="text__work">
                            Exploring Python Variables, Data Types, Operators, Conditionals, Loops, Functions, & Debugging.
                            </p>
                    </div>
                </a>
            </div>
        </div>
     );
}
 
export default WorkSection;
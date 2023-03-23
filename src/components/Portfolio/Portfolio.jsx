// General Imports
import React from 'react';
import "./Portfolio.css";

// Asset Imports
import golee from "../../assets/golee.png";
import mocktube from "../../assets/mocktube.png";
import adobe from "../../assets/adobe.png";
import musiclibrary from "../../assets/musiclibrary.png";
import mostwanted from "../../assets/mostwanted.png";
import ecommerce from "../../assets/ecommerce.png";
import heroesvillains from "../../assets/heroesvillains.png";
import rpsls from "../../assets/rpsls.png";
import robotsvdinosaurs from "../../assets/robotsvdinosaurs.png";
import tripgenerator from "../../assets/tripgenerator.png";

const PortfolioSection = () => {
    return ( 
        <div className="wrapper__portfolio">
            <div className="title_section__portfolio">
                <h2 className="title__portfolio">Projects</h2>
                    <p className="title_text__portfolio">For a more in depth look at these projects and their code; please visit my GitHub Repository linked near the bottom.</p>
            </div>
                    <img className="image__portfolio" src={golee} alt="golee__snip" />
            <div className="golee__portfolio">
                <h4 className="header__portfolio">Goal Tracking Application</h4>
                <p className="text__portfolio">
                    A Goal Tracking Application Creating Custom Goals, Adding Influences On Those
                    Goals, & Easily Visualize Results Over Time.
                </p>
            </div>
            <div className="mocktube__portfolio">
                <img className="image__portfolio" src={mocktube} alt="mocktube__snip" />
                <h4 className="header__portfolio">YouTube Clone Application</h4>
                    <p className="text__portfolio">
                        Responsive YouTube Clone Application To Search YouTube Videos via Google API.
                    </p>
            </div>
            <div className="musiclibrary__portfolio">
                <img className="image__portfolio" src={musiclibrary} alt="musiclibrary__snip" />
                <h4 className="header__portfolio">Music Library 3rd Party API</h4>
                    <p className="text__portfolio">
                        Utilizing FullStack Applications To Save Data From Frontend To The Back, While Calling 3rd Party API's. 
                    </p>
            </div>
            <div className="mostwanted__portfolio">
                <img className="image__portfolio" src={mostwanted} alt="mostwanted__snip" />
                <h4 className="header__portfolio">Most Wanted JavaScript</h4>
                    <p className="text__portfolio">
                        Person Searching Application Using JS Callbacks, Array Methods, & Objects.  
                    </p>
            </div>
            <div className="ecommerce__portfolio">
                <img className="image__portfolio" src={ecommerce} alt="ecommerce__snip" />
                <h4 className="header__portfolio">eCommerce Prototype</h4>
                    <p className="text__portfolio">
                        Frontend HTML/CSS Application Focusing On Styling w/ Flex & Grid.  
                    </p>
            </div>
            <div className="adobe__portfolio">
                <img className="image__portfolio" src={adobe} alt="adobe__snip" />
                <h4 className="header__portfolio">Adobe XD WireFrame UI/UX</h4>
                    <p className="text__portfolio">
                        Creating A Proper WireFrame Along w/ All Necassary Color Schemes, Layouts, & Connections.
                    </p>
            </div>
            <div className="heroesvillains__portfolio">
                <img className="image__portfolio" src={heroesvillains} alt="heroesvillains__snip" />
                <h4 className="header__portfolio">Heroes & Villains</h4>
                    <p className="text__portfolio">
                       Using Django Rest FrameWork w/ Rest API & Postman for Testing Endpoints.
                    </p>
            </div>
            <div className="rpsls__portfolio">
                <img className="image__portfolio" src={rpsls} alt="rpsls__snip" />
                <h4 className="header__portfolio">Rock, Paper, Scissors, Lizard, Spock</h4>
                    <p className="text__portfolio">
                       Created A Game Using Python Object-Orientated Programming Concepts of Classes/Objects, Properties, Methods, & Inheritance.
                    </p>
            </div>
            <div className="robotsvdinosaurs__portfolio">
                <img className="image__portfolio" src={robotsvdinosaurs} alt="robotsvdinosaurs__snip" />
                <h4 className="header__portfolio">Robots Vs Dinosaurs UML</h4>
                    <p className="text__portfolio">
                       Created A Game Using Python Object-Orientated Programming Concepts of Classes/Objects, Focusing On UML (Unified Modeling Langauge).
                    </p>
            </div>
            <div className="tripgenerator__portfolio">
                <img className="image__portfolio" src={tripgenerator} alt="tripgenerator__snip" />
                <h4 className="header__portfolio">Day Trip Generator</h4>
                    <p className="text__portfolio">
                       Exploring Python Variables, Data Types, Operators, Conditionals, Loops, Functions, & Debugging.
                    </p>
            </div>
        </div>
     );
}
 
export default PortfolioSection;
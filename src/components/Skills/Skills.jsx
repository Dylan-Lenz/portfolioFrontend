// General Imports
import React from 'react';
import "./Skills.css"

const SkillsSection = () => {
    return ( 
        <div className="wrapper__skills">
            <div className="languages__skills">
                <h2 className="title__skills">Languages</h2>
                <p className="text__skills">
                    Python, Django, React, JavaScript, 
                    HTML/CSS, C#, JSON, SQL, Git
                </p>
            </div>
            <div className="soft__skills">
                <h2 className="title__skills">Skills</h2>
                <p className="text__skills">
                    Project Planning & Management, Data Analysis & Entries, Product Features & Benefits,
                    Leadership, Management, Copywrite, Drive, Creativity, Problem Solving,
                    Active Learning, Adaptability
                </p>
            </div>
            <div className="technologies__skills">
                <h2 className="title__skills">Technologies & Frameworks</h2>
                <p className="text__skills">
                    MySQL, GitHub, PostMan, Django REST Framework, 
                    .Net, Visual Studio Code, Visual Studio, Adobe XD,
                    Web Services & REST API's, JWT, AGILE, Excel Spreadsheets 
                </p>
            </div>
        </div>   
     );
}
 
export default SkillsSection;
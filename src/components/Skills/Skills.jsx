// General Imports
import React from 'react';

// Asset Imports
import checkbox from "../../assets/checkbox.png";

const SkillsSection = () => {
    return ( 
        <div className="container__skills">
            <div className="title__skills">
                <img src={checkbox} alt="checkbox__icon" />
                <h2>Skills</h2>
            </div>
            <div className="hard__skills">
                <h3>Hard Skills</h3>
                <div className="languages__skills">
                    <h4>Languages</h4>
                    <ul>
                        <li><p>Python</p></li>
                        <li><p>Django</p></li>
                        <li><p>React</p></li>
                        <li><p>JavaScript</p></li>
                        <li><p>HTML/CSS</p></li>
                        <li><p>C#</p></li>
                        <li><p>JSON</p></li>
                        <li><p>SQL</p></li>
                        <li><p>Git</p></li>
                    </ul>
                </div>
                <div className="technologies__skills">
                    <h4>Technologies & Frameworks</h4>
                    <ul>
                        <li><p>MySQL</p></li>
                        <li><p>GitHub</p></li>
                        <li><p>PostMan</p></li>
                        <li><p>Django REST Framework</p></li>
                        <li><p>.Net</p></li>
                        <li><p>Visual Studio Code</p></li>
                        <li><p>Visual Studio</p></li>
                        <li><p>Adobe XD</p></li>
                        <li><p>AWS</p></li>
                        <li><p>Web Services & REST API's</p></li>
                        <li><p>JWT</p></li>
                        <li><p>AGILE</p></li>
                        <li><p>Excel Spreadsheets</p></li>
                    </ul>
                </div>
            </div>
            <div className="soft__skills">
                <h3>Soft Skills</h3>
                <ul>
                    <li><p>Project Planning & Management</p></li>
                    <li><p>Data Analysis & Entries</p></li>
                    <li><p>Product Features & Benefits</p></li>
                    <li><p>Leadership</p></li>
                    <li><p>Management</p></li>
                    <li><p>Copywrite</p></li>
                    <li><p>Drive</p></li>
                    <li><p>Creativity</p></li>
                    <li><p>Problem Solving</p></li>
                    <li><p>Active Learning</p></li>
                    <li><p>Adaptability</p></li>
                </ul>
            </div>
        </div>   
     );
}
 
export default SkillsSection;
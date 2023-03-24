// General Imports
import React from 'react';

// Component Imports
import dcc from "../../assets/dcc.png";
import certificate from "../../assets/certificate.png";

const EducationSection = () => {
    return ( 
        <div className='wrapper__education'>
            <h1 className="title__education">Education</h1>
            <a href="https://devcodecamp.com/">
                <div className="institution__education">
                    <img className="logo_institution__education" src={dcc} alt="dcc__logo" />
                    <p className="title_text__education">devCodeCamp</p>
                </div>
            </a>
            <p className="text__education">
                18-Week project based coding bootcamp building real-world full stack applications 
                and deploying them to the cloud utilizing DevOps best practices. 
            </p>  
            <p className="text__education">
                Utilized Javascript/Python for algorithm development, coding, debugging, 
                building functions and graphical user interface applications.
            </p>
            <img className="certificate__education" src={certificate} alt="certificate__pdf" />
        </div>   
     );
}
 
export default EducationSection;
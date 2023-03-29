// General Imports
import React from 'react';
import './Certification.css'

// Component Imports
import dcc from "../../assets/dcc.png";
import certificate from "../../assets/certificate.png";

const CertificationSection = () => {
    return (  
        <div className='wrapper__certificate'>
                <h1 className="title__certificate">Certification</h1>
                <a href="https://devcodecamp.com/">
                    <img className="logo__certificate" src={dcc} alt="dcc__logo" />
                </a>
                <img className="certificate" src={certificate} alt="certificate" />
                <span className="text_wrapper__certificate">
                    <p className="text__certificate">
                        Project based coding bootcamp building real-world full stack applications
                        and deployment utilizing DevOps best practices. <br></br><br></br> Algorithm development, coding, debugging, 
                        building functions and graphical user interface applications.
                    </p>
                </span>
        </div>  
     );
}
 
export default CertificationSection;
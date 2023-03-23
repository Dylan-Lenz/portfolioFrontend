// General Imports
import React from 'react';
import "./Information.css";

// Asset Imports
import BlackV from "../../assets/BlackV.jpg";

const InformationSection = () => {
    return(
        <div className="container__information">
            <img className='headshot' src={BlackV} alt="headshot" />
        </div>
    );
}
 
export default InformationSection;
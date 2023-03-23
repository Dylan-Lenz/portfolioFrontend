// General Imports
import React from 'react';
import "./Banner.css";

// Asset Imports
import BlackV from "../../assets/BlackV.jpg";
import simpleflourish from "../../assets/simpleflourish.png"

const InformationSection = () => {
    return(
        <div className="container__information">
            <img className='flourish' src={simpleflourish} alt="headshot" />
            <img className='headshot' src={BlackV} alt="headshot" />
            <img className='flourish' src={simpleflourish} alt="headshot" />
        </div>
    );
}
 
export default InformationSection;
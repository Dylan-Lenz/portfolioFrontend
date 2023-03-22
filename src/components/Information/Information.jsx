// General Imports
import React from 'react';
import "./Information.css";

// Asset Imports
import BlackV from "../../assets/BlackV.jpg";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";

const InformationSection = () => {
    return(
        <div className="container__information">
            <img className='headshot' src={BlackV} alt="headshot" />
            <div className="information">
                <a href="https://www.google.com/maps/place/Madison,+WI/@43.0846517,-89.6867705,10z/data=!3m1!4b1!4m6!3m5!1s0x8806536d3a2019ff:0x4e0cfcb5ba484198!8m2!3d43.0721661!4d-89.4007501!16zL20vMGZ3Mnk">
                    <img className='icon__information' src={location} alt="location__icon" />
                </a>
                <p>Madison, Wi, US</p>
                <p>Willing to Relocate</p>
                <p>Office Preference: Any</p>
                <img className='icon__information' src={phone} alt="phone__icon" />
                <p>(602) 402-3836</p>
                <img className='icon__information' src={email} alt="email__icon" />
                <p>dylanjlenz@gmail.com</p>
            </div>
        </div>
    );
}
 
export default InformationSection;
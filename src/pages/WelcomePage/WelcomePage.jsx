// General Imports
import React from 'react';
import "./WelcomePage.css"

// Component Imports
import InformationSection from '../../components/Information/Information';
import AboutSection from '../../components/About/About';
import PortfolioSection from '../../components/Portfolio/Portfolio';
import SkillsSection from '../../components/Skills/Skills';
import ContactSection from '../../components/Contact/Contact';


const WelcomePage = () => {
    return ( 
        <div className="container">
            <hr></hr>
            <InformationSection />
            <hr></hr>
            <AboutSection />
            <hr></hr>
            <SkillsSection />
            <hr></hr>
            <PortfolioSection />
            <hr></hr>
            <ContactSection />
            <hr></hr>
        </div>
     );
}
 
export default WelcomePage;
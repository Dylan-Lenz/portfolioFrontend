// General Imports
import React from 'react';
import "./HomePage.css"

// Component Imports
import Banner from '../../components/Banner/Banner';
import AboutSection from '../../components/About/About';
import PortfolioSection from '../../components/Portfolio/Portfolio';
import SkillsSection from '../../components/Skills/Skills';
import CertificationSection from '../../components/Certification/Certification';


const HomePage = () => {
    return ( 
        <div className="container">
            <hr></hr>
            <Banner />
            <hr></hr>
            <AboutSection />
            <SkillsSection />
            <hr></hr>
            <CertificationSection />
            <hr></hr>
            <PortfolioSection />
        </div>
     );
}
 
export default HomePage;
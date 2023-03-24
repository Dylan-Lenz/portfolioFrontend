// General Imports
import React from 'react';
import "./HomePage.css"

// Component Imports
import Banner from '../../components/Banner/Banner';
import AboutSection from '../../components/About/About';
import PortfolioSection from '../../components/Portfolio/Portfolio';
import SkillsSection from '../../components/Skills/Skills';


const HomePage = () => {
    return ( 
        <div className="container">
            <hr></hr>
            <Banner />
            <hr></hr>
            <AboutSection />
            <SkillsSection />
            <hr></hr>
            <PortfolioSection />
            <hr></hr>
        </div>
     );
}
 
export default HomePage;
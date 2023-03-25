// General Imports
import React from 'react';
import "./HomePage.css"

// Component Imports
import Banner from '../../components/Banner/Banner';
import AboutSection from '../../components/About/About';
import WorkSection from '../../components/Work/Work';
import SkillsSection from '../../components/Skills/Skills';
import CertificationSection from '../../components/Certification/Certification';


const HomePage = () => {
    return ( 
        <div className="container">
            <hr></hr>
            <Banner />
            <hr></hr>
            <a name='about'></a>
            <AboutSection />
            <a name='certification'></a>
            <hr></hr>
            <CertificationSection />
            <hr></hr>
            <SkillsSection />
            <a name='work'></a>
            <hr></hr>
            <WorkSection />
            <a name='contact'></a>
        </div>
     );
}
 
export default HomePage;
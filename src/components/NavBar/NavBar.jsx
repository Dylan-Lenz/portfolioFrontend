// General Imports
import React from 'react';
import "../NavBar/NavBar.css"

const NavBar = () => {
    return ( 
        <div className="container__navBar">
            <a href='#about'><h2 className="links__navBar">About</h2></a>
            <a href='#certification'><h2 className="links__navBar">Certification</h2></a>
            <a href="/"><h1 className='header__navBar'>DYLAN LENZ</h1></a>
            <a href='#work'><h2 className="links__navBar">TheWork</h2></a>
            <a href='#contact'><h2 className="links__navBar">Contact</h2></a>
        </div>
    );
}
 
export default NavBar;
// General Imports
import React from 'react';
import "../NavBar/NavBar.css"

const NavBar = () => {
    return ( 
        <div className="container__navBar">
            <a href='#about'><button>About</button></a>
            <a href='#certification'><button>Certification</button></a>
            <a href="/"><h1 className='header__navBar'>DYLAN LENZ</h1></a>
            <a href='#work'><button>The Work</button></a>
            <a href='#contact'><button>Contact</button></a>
        </div>
    );
}
 
export default NavBar;
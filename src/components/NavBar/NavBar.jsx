// General Imports
import React from 'react';
import "../NavBar/NavBar.css"

const NavBar = () => {
    return ( 
        <div className="container__navBar">
            <a><button>About</button></a>
            <a><button>Certification</button></a>
            <a href="/"><h1 className='header__navBar'>DYLAN LENZ</h1></a>
            <a><button>The Work</button></a>
            <a><button>Contact</button></a>
        </div>
    );
}
 
export default NavBar;
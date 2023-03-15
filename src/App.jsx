//General Imports
import React from 'react';

//Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return ( 
    <body>
      <header className='header'>
        <NavBar />
      </header>
        <main className='container'>
        </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </body>
   );
}
 
export default App;
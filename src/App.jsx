//General Imports
import React from 'react';

//Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Page Imports
import WelcomePage from "./pages/Welcome/Welcome"

const App = () => {
  return ( 
    <body>
      <header className='header'>
        <NavBar />
      </header>
        <main className='container'>
          <WelcomePage />
        </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </body>
   );
}
 
export default App;
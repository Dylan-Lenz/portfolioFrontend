//General Imports
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import "./App.css";

//Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Page Imports
import WelcomePage from "./pages/WelcomePage/WelcomePage";

const App = () => {
  return ( 
    <div className="container">
      <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
      <Footer />
    </div>
   );
}
 
export default App;
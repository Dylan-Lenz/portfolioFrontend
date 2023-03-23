//General Imports
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import "./App.css";

//Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Page Imports
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  return ( 
    <div className="container">
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      <Footer />
    </div>
   );
}
 
export default App;
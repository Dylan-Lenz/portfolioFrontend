//General Imports
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import "./App.css";

//Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Page Imports
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const App = () => {
  return ( 
    <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      <Footer />
    </div>
   );
}
 
export default App;
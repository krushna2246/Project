import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// imported components

import LandingPage from "./LandingPage";
import Home from "./Component/Home"; 
import About from "./Component/About";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import MentalHealthTracking from "./Component/MentalHealthTracking";
import MentalHealthForm from "./Component/MentalHealthForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/mental-health-tracking" element={<MentalHealthTracking />} />
        <Route path="/mental-health-form" element={<MentalHealthForm />} />
        
      </Routes>
    </Router>
  );
};
export default App;

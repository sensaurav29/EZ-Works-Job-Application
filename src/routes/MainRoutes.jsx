import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingSection from "../components/LandingSection";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import FormPage from "../Pages/FormPage";

const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingSection />} />
        <Route path="/varnan" element={<LandingSection />} />

        <Route path="/about us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<FormPage />} />
        
        
      </Routes>
    </>
  );
};

export default MainRoutes;

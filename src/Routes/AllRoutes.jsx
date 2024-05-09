import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
}

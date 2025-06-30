import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar-and-footer/Navbar.jsx";
import Footer from "./components/navbar-and-footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import EducationPage from "./pages/EducationPage.jsx";
import GithubStatistics from "./pages/GithubStatistics.jsx";
import Experience from "./pages/Experience.jsx";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <About />
      <EducationPage />
      <Experience />
      <Skills />
      <Projects />
      <GithubStatistics />
      <Contact />
      <Footer />
    </Box>
  );
}

import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/navbar-and-footer/Navbar";
import Footer from "./components/navbar-and-footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import EducationPage from "./pages/EducationPage";
import GithubStatistics from "./pages/GithubStatistics";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <About />
      <EducationPage />
      <Skills />
      <Projects />
      <GithubStatistics />
      <Contact />
      <Footer />
    </Box>
  );
}

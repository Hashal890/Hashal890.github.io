import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

export default function App() {
  return (
    <Box>
      <Navbar />
      <br />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <br />
      <br /> */}
      <Footer />
    </Box>
  );
}

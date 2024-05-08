import React from "react";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import Home from "./Routes/Home";
// import About from "./Routes/About";
// import Skills from "./Routes/Skills";
// import Projects from "./Routes/Projects";
// import Contact from "./Routes/Contact";

export default function App() {
  return (
    <Box>
      <Navbar />
      <br />
      <AllRoutes />
      {/* <Home />
      <About />
      <Skills />
      <Projects />
      <Contact /> */}
      <br />
      <br />
      <Footer />
    </Box>
  );
}

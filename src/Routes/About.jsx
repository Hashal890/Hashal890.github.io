import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Heading>About Page</Heading>
      <Spacer />
      <Footer />
    </Flex>
  );
}

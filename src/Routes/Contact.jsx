import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Heading m="auto" mt="50">
        Contact page is in progress...
      </Heading>
      <Spacer />
      <Footer />
    </Flex>
  );
}

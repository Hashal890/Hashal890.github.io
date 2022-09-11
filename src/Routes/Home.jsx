import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HomeBanner from "../Components/HomeBanner";

export default function Home() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <HomeBanner />
      <Spacer />
      <Footer />
    </Flex>
  );
}

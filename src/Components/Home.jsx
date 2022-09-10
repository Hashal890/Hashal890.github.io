import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import HomeBanner from "./HomeBanner";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HomeBanner />
    </Box>
  );
}

import React from "react";
import { VStack } from "@chakra-ui/react";
import AboutMeIntroduction from "../components/about/AboutMeIntroduction";
import SectionHeading from "../components/common/SectionHeading";

export default function About() {
  return (
    <VStack
      id={"about"}
      justifyContent={"center"}
      alignItems={"center"}
      w={["95%", "90%", "90%", "75%"]}
      m={"auto"}
      pt={8}
      spacing={12}
      minH={"80vh"}
    >
      <SectionHeading sectionName={"About Me"} />
      <AboutMeIntroduction />
    </VStack>
  );
}

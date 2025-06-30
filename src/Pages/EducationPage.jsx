import React from "react";
import { VStack } from "@chakra-ui/react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import { EducationDetails } from "../assets/data.js";
import EducationCard from "../components/education/EducationCard.jsx";

const EducationPage = () => {
  return (
    <VStack
      id={"education"}
      maxW={"600px"}
      m={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={12}
      pt={12}
      minH={"90vh"}
    >
      <SectionHeading sectionName={"Education"} />
      <VStack
        spacing={4}
        marginBottom={6}
        justifyContent={"center"}
        align={"left"}
        w={"100%"}
        p={2}
      >
        {EducationDetails.map((elem) => (
          <EducationCard key={elem.id} {...elem} />
        ))}
      </VStack>
    </VStack>
  );
};

export default EducationPage;

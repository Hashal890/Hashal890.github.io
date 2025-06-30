import React from "react";
import { VStack } from "@chakra-ui/react";
import ExperienceCard from "../components/experience/ExperienceCard.jsx";
import { ExperienceDetails } from "../assets/data.js";
import SectionHeading from "../components/common/SectionHeading.jsx";

const Experience = () => {
  return (
    <VStack
      id={"experience"}
      w={["95%", "95%", "90%", "75%"]}
      m={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={12}
      mt={12}
      minH={"90vh"}
    >
      <SectionHeading sectionName={"Experience"} />
      <VStack spacing={4} marginBottom={6} align={"left"} mx={[0, 0, 6]} mt={3}>
        {ExperienceDetails.map((elem) => (
          <ExperienceCard key={elem.id} {...elem} />
        ))}
      </VStack>
    </VStack>
  );
};

export default Experience;

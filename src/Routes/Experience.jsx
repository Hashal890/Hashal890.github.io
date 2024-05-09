import { Box, Code, VStack } from "@chakra-ui/react";
import React from "react";
import AboutCardExperienceDetails from "../Components/AboutCardExperienceDetails";
import { ExperienceDetails } from "../assets/data";

const Experience = () => {
  return (
    <Box w={["95%", "95%", "90%", "75%"]} m="auto" mt="5">
      <br />
      <br />
      <Code colorScheme="yellow" mb="1rem" fontSize="24px" borderRadius={"xl"}>
        Experience
      </Code>
      <VStack spacing="4" marginBottom="6" align="left" mx={[0, 0, 6]} mt="3">
        {ExperienceDetails.map((elem, index) => {
          const { id, company, title, location, roles, skills, period } = elem;
          return (
            <AboutCardExperienceDetails
              key={id}
              company={company}
              title={title}
              location={location}
              roles={roles}
              skills={skills}
              period={period}
            />
          );
        })}
      </VStack>
    </Box>
  );
};

export default Experience;

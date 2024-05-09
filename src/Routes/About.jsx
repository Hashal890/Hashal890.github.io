import React from "react";
import { Box, Code, Flex, VStack } from "@chakra-ui/react";
import { EducationDetails } from "../assets/data";
import AboutCardEducationDetails from "../Components/AboutCardEducationDetails";
// import AboutCardExperienceDetails from "../Components/AboutCardExperienceDetails";

export default function About() {
  return (
    <Flex flexDir="column" h="100vh">
      <br />
      <br />
      <Box w={["90%", "85%", "80%", "65%"]} m="auto" mt="5">
        {/* <Code colorScheme="orange" mb="1rem" fontSize="18px">
          Experience
        </Code>
        <VStack spacing="4" marginBottom="6" align="left" mx={[0, 0, 6]} mt="3">
          {ExperienceDetails.map((elem, index) => {
            const { id, company, title, location, roles, skills, period } =
              elem;
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
        </VStack> */}
        <Code colorScheme="blue" mb="1rem" fontSize="18px">
          Education
        </Code>
        <VStack spacing="4" marginBottom="6" align="left" mx={[0, 0, 6]} mt="3">
          {EducationDetails.map((elem, index) => {
            const { id, title, role, marks, period } = elem;
            return (
              <AboutCardEducationDetails
                key={id}
                title={title}
                role={role}
                marks={marks}
                period={period}
              />
            );
          })}
        </VStack>
      </Box>
      <br />
      <br />
    </Flex>
  );
}

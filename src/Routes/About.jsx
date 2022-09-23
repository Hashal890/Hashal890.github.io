import { Box, Code, Flex, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { EducationDetails, ExperienceDetails } from "../assets/data";
import AboutCard from "../Components/AboutCard";

export default function About() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Box w={["90%", "85%", "65%"]} m="auto" mt="5">
        <Code colorScheme="orange" mb="1rem" fontSize="18px">
          Experience
        </Code>
        <VStack spacing="4" marginBottom="6" align="left" mx={[0, 0, 6]} mt="3">
          {ExperienceDetails.map((company, index) => (
            <AboutCard
              key={index}
              title={company.title}
              role={company.role}
              skills={company.skills}
              period={company.period}
              logo={company.logo}
              alt={company.alt}
              description={company.description}
            />
          ))}
        </VStack>
        <Code colorScheme="blue" mb="1rem" fontSize="18px">
          Education
        </Code>
        <VStack spacing="4" marginBottom="6" align="left" mx={[0, 0, 6]} mt="3">
          {EducationDetails.map((e, index) => (
            <AboutCard
              key={index + 1}
              title={e.title}
              role={e.role}
              skills={e.skills}
              period={e.period}
            />
          ))}
        </VStack>
      </Box>
      <Spacer />
      <Footer />
    </Flex>
  );
}

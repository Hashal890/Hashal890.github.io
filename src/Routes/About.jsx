import { Box, Flex, Heading, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { EducationDetails, ExperienceDetails } from "../assets/data";
import AboutCard from "../Components/AboutCard";

export default function About() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Box w={["90%", "85%", "65%"]} m="auto" mt="10">
        <Heading>
          <Flex alignItems="center">
            <Box
              as="h1"
              color="blue.600"
              fontSize="3xl"
              lineHeight="shorter"
              fontWeight="bold"
              textAlign="left"
            >
              Experience
            </Box>
          </Flex>
        </Heading>
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
        <Heading>
          <Flex alignItems="center">
            <Box
              as="h1"
              color="blue.600"
              fontSize="3xl"
              lineHeight="shorter"
              fontWeight="bold"
              textAlign="left"
            >
              Education
            </Box>
          </Flex>
        </Heading>
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

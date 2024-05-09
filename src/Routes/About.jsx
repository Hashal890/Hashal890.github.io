import React from "react";
import { Box, Code, Flex, Divider, VStack } from "@chakra-ui/react";
import { EducationDetails } from "../assets/data";
import AboutCardEducationDetails from "../Components/AboutCardEducationDetails";
import AboutMeIntroduction from "../Components/AboutMeIntroduction";

export default function About() {
  return (
    <Flex flexDir="column" h="100vh">
      <br />
      <br />
      <Box w={["95%", "90%", "90%", "75%"]} m="auto" mt="5">
        <Code
          colorScheme="yellow"
          mb={"1rem"}
          mt={"1rem"}
          fontSize="24px"
          borderRadius={"xl"}
        >
          About Me
        </Code>
        <AboutMeIntroduction />
        <br />
        <Divider />
        <br />
        <Code
          colorScheme="yellow"
          mb={"1rem"}
          mt={"1rem"}
          fontSize="24px"
          borderRadius={"xl"}
        >
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

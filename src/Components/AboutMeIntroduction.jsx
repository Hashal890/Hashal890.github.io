import React from "react";
import {
  Flex,
  Image,
  Box,
  useColorModeValue,
  Text,
  Code,
} from "@chakra-ui/react";
import Profile from "../assets/Harshal-Pardeshi-Profile-Photo.png";

const AboutMeIntroduction = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      m="auto"
      w={"100%"}
      align="center"
    >
      <Image
        w={["230px", "300px"]}
        h={["250px", "300px"]}
        src={Profile}
        alt="Harshal Image"
        loading="eager"
        mb="4"
        display={["block", "block", "none"]}
        alignSelf="center"
        borderRadius={"20px"}
      />
      <Box p="4" mr="4" w={"full"} maxW="800px">
        <Text
          pr={{ base: 0, md: 16 }}
          mb={4}
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
          textAlign="start"
          fontFamily="body"
        >
          <span>
            A <Code colorScheme="green">Full Stack Web Developer</Code> with a
            total of 1 year of hands-on experience in full-stack web
            development. This includes 7 months from Masai School and an
            additional 5 months of personal project building on both frontend
            and backend technologies. Currently pursuing my B.Sc. in Computer
            Science from BITS Pilani, I am ready to relocate for the right
            opportunity.
          </span>
          <br />
          <br />
          <span>
            Passionate about leveraging technology to solve real-world problems,
            I am driven by a love for coding and a commitment to continuous
            learning. I thrive in challenging environments that push me to
            innovate and grow, aspiring to contribute to groundbreaking projects
            and create solutions that make a meaningful impact.
          </span>
        </Text>
      </Box>
      <Image
        w={["230px", "300px"]}
        h={["250px", "300px"]}
        src={Profile}
        alt="Harshal Image"
        display={["none", "none", "block"]}
        loading="eager"
        mb="6"
        borderRadius={"20px"}
      />
    </Flex>
  );
};

export default AboutMeIntroduction;

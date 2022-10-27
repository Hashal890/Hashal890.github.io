import React from "react";
import {
  Flex,
  Avatar,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Link,
  Code,
  Button,
  Image,
} from "@chakra-ui/react";
import Profile from "../assets/profile_photo.jpg";
import Resume from "../assets/Harshal_Pardeshi_Resume.pdf";
import Typist from "react-typist";

export default function HomeBanner() {
  return (
    <Flex
      direction={["column", "column", "row"]}
      m="auto"
      mt="10"
      maxW="1100px"
      align="center"
    >
      <Avatar
        w="300px"
        h="300px"
        src={Profile}
        alt="Harshal Image"
        loading="eager"
        mb="4"
        display={["block", "block", "none"]}
        alignSelf="center"
      />
      <Box p="4" mr="4" w={"full"} maxW="800px">
        <Heading
          mb={6}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          textAlign={{ base: "inherit", md: "start" }}
        >
          Hey, 👋...
        </Heading>
        <Heading
          mb="6"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          textAlign={{ base: "inherit", md: "start" }}
        >
          <Text
            display="inline"
            w="full"
            bgClip="text"
            bgGradient="linear(to-l, blue.200, blue.600)"
            fontWeight="extrabold"
          >
            {"  "} Harshal {"  "}
          </Text>
          here
        </Heading>
        <Text
          pr={{ base: 0, md: 16 }}
          mb={4}
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
          textAlign="start"
          fontFamily="body"
        >
          An <Code colorScheme="green">FULL STACK WEB DEVELOPER</Code> graduated
          from <Code colorScheme="linkedin"> Masai School </Code> having{" "}
          <Code colorScheme="pink">1200+ hours</Code> coding experience and
          solved <Code colorScheme="pink">500+ </Code> dsa problems. Seek to
          join the tech industry to develop my technical skills and
          interpersonal skills.
          <br />
          <br />
          <Code animation="infinite" fontSize="xl">
            <Typist>
              I code <Code colorScheme="messenger"> beautifully</Code>{" "}
              <Code colorScheme="yellow"> simple</Code> things and I{" "}
              <Code colorScheme="red"> love </Code> what I do!
            </Typist>
          </Code>
        </Text>
        <Button
          as={Link}
          href={Resume}
          target="_blank"
          w="ms"
          mt="2"
          bg={useColorModeValue("gray.300", "gray.700")}
          color={useColorModeValue("gray.800", "white")}
          rounded="md"
          _hover={{
            bg: useColorModeValue("green.200", "yellow.500"),
            textDecoration: "none",
          }}
          _focus={{ outline: "none" }}
          download={"Harshal Pardeshi Resume.pdf"}
        >
          RESUME
        </Button>
      </Box>
      <Image
        w="300px"
        h="300px"
        src={Profile}
        alt="Harshal Image"
        display={["none", "none", "block"]}
        loading="eager"
        mb="6"
        borderRadius="50%"
      />
    </Flex>
  );
}

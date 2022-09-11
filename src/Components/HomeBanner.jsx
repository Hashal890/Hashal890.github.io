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
} from "@chakra-ui/react";
import Profile from "../assets/profile_photo.jpg";
import Resume from "../assets/Harshal_Pardeshi_Resume.pdf";
import Typist from "react-typist";

export default function HomeBanner() {
  return (
    <Flex direction="column" align="center" pt="16">
      <Flex direction={["column", "column", "row"]}>
        <Avatar
          size={"2xl"}
          src={Profile}
          alt="Ziad"
          loading="eager"
          mb={4}
          display={["block", "block", "none"]}
          alignSelf={"center"}
        />
        <Box p={4} mr={4} w={"full"} maxW="800px">
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
            mb={6}
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color={useColorModeValue("brand.600", "gray.300")}
            lineHeight="shorter"
            textAlign={{ base: "inherit", md: "start" }}
          >
            <Text
              display={"inline"}
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
            textAlign={"start"}
            fontFamily={"body"}
          >
            Graduated from <Code colorScheme="linkedin"> Masai School </Code>{" "}
            and looking for an opportunity to enhance my skills and building
            some good products for society...
            <br />
            <br />
            <Code animation="infinite" fontSize={"xl"}>
              <Typist>
                I code <Code colorScheme="messenger"> beautifully</Code>{" "}
                <Code colorScheme="green"> simple</Code> things and I{" "}
                <Code colorScheme="red"> love </Code> what I do!
              </Typist>
            </Code>
          </Text>
        </Box>
        <Box
          maxW="320px"
          w="full"
          bg={useColorModeValue("gray.100", "gray.900")}
          shadow="lg"
          rounded="lg"
          p="6"
          textAlign="center"
          display={["none", "none", "block"]}
        >
          <Avatar size="2xl" src={Profile} alt="Ziad" loading="eager" mb="6" />
          <Heading fontSize="md" fontWeight="400" mb="2">
            Harshal Pardeshi
          </Heading>
          <Text fontSize="md" fontWeight="200" color="gray.500">
            Full Stack Web Developer
          </Text>
          <Text fontSize="md" fontWeight="200" color="gray.500" mb="4">
            Masai School
          </Text>
          <Button
            as={Link}
            href={Resume}
            target="_blank"
            w="full"
            mt="2"
            bg={useColorModeValue("gray.300", "gray.700")}
            color={useColorModeValue("gray.800", "white")}
            rounded="md"
            _hover={{
              bg: useColorModeValue("green.200", "yellow.500"),
              textDecoration: "none",
            }}
            _focus={{ outline: "none" }}
          >
            RESUME
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

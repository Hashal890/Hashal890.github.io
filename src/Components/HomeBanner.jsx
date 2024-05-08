import React from "react";
import {
  Flex,
  Image,
  Box,
  useColorModeValue,
  Heading,
  Text,
  Link,
  Code,
  Button,
} from "@chakra-ui/react";
import Profile from "../assets/Harshal-Pardeshi-Profile-Photo.png";
import Resume from "../assets/Harshal-Pardeshi-Resume.pdf";
import { IoMdDownload } from "react-icons/io";

export default function HomeBanner() {
  return (
    <Flex
      direction={["column", "column", "row"]}
      m="auto"
      mt="10"
      maxW="1100px"
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
        <Heading
          mb={6}
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
          textAlign={{ base: "inherit", md: "start" }}
        >
          <Flex alignItems={"center"} gap={3}>
            <span>Hey,</span>
            <span>
              <Image
                src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                w={50}
              />
            </span>
            <span>...</span>
          </Flex>
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
          <span>
            A <Code colorScheme="green">FULL STACK WEB DEVELOPER</Code> with a
            total of 1 year of hands-on experience in full-stack web
            development. This includes 7 months from Masai School and an
            additional 5 months of personal project building on both frontend
            and backend technologies. Currently pursuing my B.Sc. in Computer
            Science from BITS Pilani, I am ready to relocate for the right
            opportunity. Passionate about leveraging technology to solve
            real-world problems, I am driven by a love for coding and a
            commitment to continuous learning.
          </span>
          <br />
          <br />
          <span>
            My portfolio reflects my expertise in HTML, CSS, JavaScript,
            TypeScript, React.JS, Node.JS, Express.JS, Next.JS, Redux, Context
            API, MongoDB, and Rest API. Additionally, I have experience with Web
            Scraping and am adept with tools like Chakra-UI, Bootstrap, Git, and
            Figma.
          </span>
          <br />
          <br />
          <span>
            I thrive in challenging environments that push me to innovate and
            grow, aspiring to contribute to groundbreaking projects and create
            solutions that make a meaningful impact.
          </span>
        </Text>
        <br />
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
          download={"Harshal-Pardeshi-Resume.pdf"}
          leftIcon={<IoMdDownload />}
        >
          Resume
        </Button>
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
}

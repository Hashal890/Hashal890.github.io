import React from "react";
import {
  Flex,
  Image,
  useColorModeValue,
  Heading,
  Text,
  Code,
  Button,
} from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import Typist from "react-typist";

export default function Home() {
  return (
    <Flex
      flexDir={"column"}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      w={"100%"}
      mt={-16}
    >
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
      <Typist>
        <Code colorScheme={"whatsapp"} fontSize={"18px"}>
          FULL STACK WEB DEVELOPER
        </Code>
      </Typist>
      <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
        <Button
          as="a"
          href={
            "https://drive.google.com/uc?export=download&id=1pV8XBrEE6ZaN5BbITcfE215MNNCLl94z"
          }
          target="_blank"
          rel="noopener noreferrer"
          rightIcon={<IoMdDownload />}
          w="ms"
          mt={6}
          colorScheme={"messenger"}
          size={"md"}
        >
          Download Resume
        </Button>
        <Button
          as="a"
          href={
            "https://drive.google.com/file/d/1pV8XBrEE6ZaN5BbITcfE215MNNCLl94z/view?usp=sharing"
          }
          target="_blank"
          rel="noopener noreferrer"
          rightIcon={<FaEye />}
          w="ms"
          mt={6}
          colorScheme={"messenger"}
          size={"md"}
        >
          View Resume
        </Button>
      </Flex>
    </Flex>
  );
}

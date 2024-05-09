import React from "react";
import {
  Flex,
  Image,
  useColorModeValue,
  Heading,
  Text,
  Link,
  Code,
  Button,
} from "@chakra-ui/react";
import Resume from "../assets/Harshal-Pardeshi-Resume.pdf";
import { IoMdDownload } from "react-icons/io";

export default function Home() {
  return (
    <Flex
      flexDir={"column"}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
      w={"100%"}
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
      <Code colorScheme={"whatsapp"} fontSize={"18px"}>
        FULL STACK WEB DEVELOPER
      </Code>
      <Button
        as={Link}
        href={Resume}
        target="_blank"
        w="ms"
        mt={6}
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
    </Flex>
  );
}

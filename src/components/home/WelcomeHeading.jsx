import React from "react";
import { Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";

const WelcomeHeading = () => {
  return (
    <>
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
    </>
  );
};

export default WelcomeHeading;

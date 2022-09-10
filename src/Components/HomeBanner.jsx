import { Box, Button, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import ProfilePhoto from "../assets/profile_photo.jpg";

export default function HomeBanner() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box>
        <Text>Hello!</Text>
        <Heading>I'm Harshal Pardeshi</Heading>
        <Heading>A Full Stack Web Developer</Heading>
        <Button>HIRE ME!</Button>
      </Box>
      <Spacer />
      <Image
        src={ProfilePhoto}
        alt="Profile Photo"
        borderRadius="50%"
        w="300px"
        h="300px"
      />
    </Flex>
  );
}

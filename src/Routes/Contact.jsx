import {
  Code,
  Flex,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FooterLinks } from "../Components/FooterLinks";

export default function Contact() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Stack w={["85%", "70%", "50%"]} m="auto" mt="10">
        <Flex
          flexDirection={["column", "column", "column"]}
          alignItems="center"
          w="100%"
        >
          <Text
            color={useColorModeValue("gray.800", "gray.200")}
            fontSize="28"
            mb="10"
          >
            Get In Touch
          </Text>
          <Text
            fontSize="20"
            color={useColorModeValue("gray.800", "gray.500")}
            textAlign="center"
          >
            My inbox is always open, whether you have a question or just want to
            know me or even just to say hi , I'll try my best to get back to{" "}
            <Code colorScheme="orange">you! 😊</Code>
          </Text>
          <Flex
            fontSize="20"
            mt="20"
            color={useColorModeValue("gray.800", "gray.500")}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            {FooterLinks.author.accounts.slice(0, 3).map((s, i) => (
              <IconButton
                key={i}
                as={Link}
                isExternal
                href={s.url}
                aria-label={s.name}
                colorScheme={s.type}
                icon={s.icon}
                mx="10"
                mb="10"
                size={"lg"}
                isRound={true}
              />
            ))}
          </Flex>
        </Flex>
      </Stack>
      <Spacer />
      <Footer />
    </Flex>
  );
}

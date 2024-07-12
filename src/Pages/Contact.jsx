import React from "react";
import {
  Flex,
  IconButton,
  Link,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ContactDetails } from "../assets/data";
import SectionHeading from "../components/common/SectionHeading";

export default function Contact() {
  return (
    <VStack
      id={"contact"}
      justifyContent={"center"}
      alignItems={"center"}
      w={["85%", "70%", "70%", "50%"]}
      m={"auto"}
      mb={12}
      mt={8}
      minH={"70vh"}
    >
      <SectionHeading sectionName={"Let's chat!"} />
      <Text
        fontSize={"20"}
        color={useColorModeValue("gray.800", "gray.500")}
        textAlign={"center"}
        mb={10}
      >
        👋 I'm actively seeking new opportunities in Full Stack Web Development
        and would love to hear from you! Whether you have an exciting project
        idea, a job opportunity, or simply want to connect, feel free to reach
        out to me via any of the platforms below:
        <Text mt={4}> Mobile Number: +918329729568</Text>
        <Text>Email-ID: pardeshiharshal90@gmail.com</Text>
      </Text>
      <Flex gap={3}>
        {ContactDetails.map((contact, ind) => {
          const { id, link, icon } = contact;
          return (
            <Link key={id} href={link} isExternal bg={"transparent"}>
              <IconButton
                colorScheme={"blue"}
                variant={"outline"}
                aria-label={"contact-button"}
                size={"lg"}
                icon={icon}
              />
            </Link>
          );
        })}
      </Flex>
    </VStack>
  );
}

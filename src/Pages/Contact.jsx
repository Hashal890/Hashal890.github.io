import React from "react";
import { Flex, VStack, Text, useColorModeValue, Box } from "@chakra-ui/react";
import { ContactDetails } from "../assets/data";
import SectionHeading from "../components/common/SectionHeading";
import ContactIconWithLink from "../components/contact/ContactIconWithLink";

const Contact = () => {
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
      <Box
        fontSize={20}
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
      </Box>
      <Flex gap={3}>
        {ContactDetails.map((contact) => (
          <ContactIconWithLink key={contact.id} {...contact} />
        ))}
      </Flex>
    </VStack>
  );
};

export default Contact;

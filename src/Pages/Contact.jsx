import React from "react";
import { Flex, VStack, Text, useColorModeValue, Box } from "@chakra-ui/react";
import { ContactDetails } from "../assets/data.js";
import SectionHeading from "../components/common/SectionHeading.jsx";
import ContactIconWithLink from "../components/contact/ContactIconWithLink.jsx";

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
        I'm currently working as a{" "}
        <strong>Software Development Engineer I</strong> and actively
        seeking new opportunities in <strong>Full Stack Web Development</strong>
        . I'm eager to join a team where I can contribute meaningfully, grow
        technically, and work on impactful products.
        <br />
        <br />
        If you have a role in mind or would like to collaborate, feel free to
        reach out using the platforms below:
        <br />
        <br />
        <Text fontWeight="medium">📞 Mobile: +91 8329729568</Text>
        <Text fontWeight="medium">📧 Email: pardeshiharshal90@gmail.com</Text>
      </Box>
      <Flex gap={4} wrap="wrap" justify="center">
        {ContactDetails.map((contact) => (
          <ContactIconWithLink key={contact.id} {...contact} />
        ))}
      </Flex>
    </VStack>
  );
};

export default Contact;

import React from "react";
import {
  Code,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ContactDetails } from "../assets/data";

export default function Contact() {
  return (
    <Flex flexDir="column" h="100vh">
      <br />
      <br />
      <Stack w={["85%", "70%", "70%", "50%"]} m="auto" mt="10">
        <Flex
          flexDirection={["column", "column", "column"]}
          alignItems="center"
          w="100%"
        >
          <Code colorScheme="yellow" fontSize="24px" borderRadius={"xl"} mb={8}>
            Let's chat!
          </Code>
          <Text
            fontSize="20"
            color={useColorModeValue("gray.800", "gray.500")}
            textAlign="center"
            mb={10}
          >
            I'd love to hear from you! Feel free to reach out using the
            following methods for any inquiries or collaborations.
            <Text mt={4}> Mobile Number: +918329729568</Text>
            <Text>Email-ID: pardeshiharshal90@gmail.com</Text>
          </Text>
          <Flex gap={3}>
            {ContactDetails.map((contact, ind) => {
              const { id, link, icon } = contact;
              return (
                <Link key={id} href={link} isExternal bg="transparent">
                  <IconButton
                    colorScheme="blue"
                    variant="outline"
                    aria-label="contact-button"
                    size="lg"
                    icon={icon}
                  />
                </Link>
              );
            })}
          </Flex>
        </Flex>
      </Stack>
    </Flex>
  );
}

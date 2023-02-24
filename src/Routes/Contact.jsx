import {
  Code,
  Flex,
  IconButton,
  Link,
  Spacer,
  Stack,
  // Table,
  // Tbody,
  // Td,
  // Tr,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ContactDetails } from "../assets/data";

export default function Contact() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <br />
      <br />
      <br />
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
            mb={10}
          >
            My inbox is always open, whether you have a question or just want to
            know me or even just to say hi , I'll try my best to get back to{" "}
            <Code colorScheme="orange">you! </Code>
            <Text> Mobile Number: +918329729568</Text>
            <Text>Email-ID: pardeshiharshal90@gmail.com</Text>
          </Text>
          <Flex gap={3}>
            {ContactDetails.map((c, ind) => (
              <Link key={ind} href={c.link} isExternal bg="transparent">
                <IconButton
                  colorScheme="blue"
                  variant="outline"
                  aria-label="contact-button"
                  size="lg"
                  icon={<c.icon />}
                />
              </Link>
            ))}
          </Flex>
          {/* <Table maxW={"400px"} m={"auto"}>
            <Tbody>
              {ContactDetails.map((c, index) => (
                <Tr key={`${index}-${c.link}`}>
                  <Link href={c.link} isExternal bg="transparent">
                    <Flex>
                      <Td>
                        <IconButton
                          colorScheme="blue"
                          variant="outline"
                          aria-label="contact-button"
                          size="lg"
                          icon={<c.icon />}
                        />
                      </Td>
                      <Spacer />
                      <Td>
                        <Text>{c.name}</Text>
                      </Td>
                    </Flex>
                  </Link>
                </Tr>
              ))}
            </Tbody>
          </Table> */}
        </Flex>
      </Stack>
      <Spacer />
      <Footer />
    </Flex>
  );
}

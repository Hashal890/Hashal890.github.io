import React from "react";
import {
  Flex,
  IconButton,
  Link,
  Stack,
  // Table,
  // Tbody,
  // Td,
  // Tr,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ContactDetails } from "../assets/data";

export default function Contact() {
  return (
    <Flex flexDir="column" h="100vh">
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
            Let's chat!
          </Text>
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
    </Flex>
  );
}

import {
  Flex,
  Spacer,
  Link,
  Text,
  VStack,
  Tabs,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Box,
  ScaleFade,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { SkillsList } from "../assets/data.js";

export default function Skills() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Box w="65%" m="auto">
        <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
          <TabPanels minHeight="45vh">
            <TabPanel px="0">
              <SimpleGrid columns={[1, 2, 3]} spacing="4" mt="8">
                {SkillsList.map((skill, index) => (
                  <ScaleFade initialScale="0.9" in="true">
                    <Link href={skill.link}>
                      <VStack
                        p="4"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        w="100%"
                        h="100px"
                        border="1px"
                        borderColor="blue.400"
                        rounded="xl"
                        _hover={{ shadow: "md" }}
                      >
                        {skill.name === "Postman" ? (
                          <Image
                            src="https://www.svgrepo.com/show/354202/postman-icon.svg"
                            alt="Postman"
                            mt="3"
                            h="35px"
                            w="35px"
                          />
                        ) : (
                          <Box mt="2" fontSize="3xl" color={skill.color}>
                            {skill.icon}
                          </Box>
                        )}

                        <Text as="h4" fontSize="md" py="2">
                          {skill.name}
                        </Text>
                      </VStack>
                    </Link>
                  </ScaleFade>
                ))}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Spacer />
      <Footer />
    </Flex>
  );
}

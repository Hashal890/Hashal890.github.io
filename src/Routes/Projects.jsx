import {
  Box,
  Flex,
  Heading,
  Spacer,
  VStack,
  Link,
  Text,
  useColorModeValue,
  Tabs,
  TabPanels,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";

export default function Projects() {
  const [data, setData] = useState([]);

  const getData = async () => {
    let res = await fetch(
      "https://api.github.com/users/hashal890/repos?sort=created"
    );
    res = await res.json();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Box w={["95%", "80%", "70%"]} m="auto">
        <VStack spacing={3}>
          <VStack>
            <Heading
              bgClip="text"
              bgGradient="linear(to-l, gray.300, blue.300)"
            >
              <Link color={useColorModeValue("blue.500", "blue.300")}>P</Link>
              rojects
            </Heading>
            <Text
              fontSize={"xl"}
              color={useColorModeValue("gray.500", "gray.200")}
              maxW="lg"
              textAlign="center"
            >
              Some of the projects I had fun doing 😁.
            </Text>
          </VStack>
          <Box w={["80%", "90%", "100%"]}>
            <Tabs
              variant="soft-rounded"
              colorScheme="blue"
              align="center"
              w="100%"
            >
              <TabPanels minHeight={"50vh"}>
                <TabPanel px={0}>
                  <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                    {data.map((rep) => (
                      <ProjectCard
                        key={rep.id}
                        title={rep.name}
                        description={rep.description}
                        language={rep.language}
                        url={rep.svn_url}
                      />
                    ))}
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </VStack>
      </Box>
      <Spacer />
      <Footer />
    </Flex>
  );
}

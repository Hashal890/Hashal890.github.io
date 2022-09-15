import {
  Box,
  Flex,
  Spacer,
  Tabs,
  TabPanels,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
import { ProjectsList } from "../assets/data";

export default function Projects() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Box w={["95%", "90%", "80%"]} m="auto">
        <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
          <TabPanels minHeight={"50vh"}>
            <TabPanel px={0}>
              <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                {ProjectsList.map((rep, index) => (
                  <ProjectCard
                    key={index + 1}
                    title={rep.title}
                    description={rep.description}
                    techStack={rep.techStack}
                    githubUrl={rep.githubUrl}
                    liveUrl={rep.liveUrl}
                    image={rep.image}
                  />
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

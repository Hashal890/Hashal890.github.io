import React from "react";
import {
  Box,
  Flex,
  Tabs,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Code,
} from "@chakra-ui/react";
import ProjectCard from "../Components/ProjectCard";
import { ProjectsList } from "../assets/data";
// import Carousel from "../Components/Carousel";

export default function Projects() {
  return (
    <Flex flexDir="column" h="100vh">
      <br />
      <br />
      <br />
      <Box w={["97%", "97%", "95%", "80%"]} m="auto">
        <Code colorScheme="yellow" fontSize="24px" borderRadius={"xl"}>
          Projects
        </Code>
        <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
          <TabPanels minHeight={"50vh"}>
            <TabPanel px={0}>
              <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                {ProjectsList.map((rep, index) => {
                  const {
                    id,
                    title,
                    description,
                    techStack,
                    githubUrl,
                    liveUrl,
                    image,
                  } = rep;
                  return (
                    <ProjectCard
                      key={id}
                      title={title}
                      description={description}
                      techStack={techStack}
                      githubUrl={githubUrl}
                      liveUrl={liveUrl}
                      image={image}
                    />
                  );
                })}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <Carousel /> */}
      </Box>
      <br />
      <br />
    </Flex>
  );
}

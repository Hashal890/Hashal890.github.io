import React from "react";
import {
  VStack,
  Tabs,
  TabPanels,
  TabPanel,
  SimpleGrid,
} from "@chakra-ui/react";
import ProjectCard from "../components/projects/ProjectCard";
import { ProjectsList } from "../assets/data";
import SectionHeading from "../components/common/SectionHeading";

export default function Projects() {
  return (
    <VStack
      id={"projects"}
      w={["97%", "97%", "95%", "80%"]}
      m={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      mt={12}
      minH={"90vh"}
    >
      <SectionHeading sectionName={"Projects"} />
      <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
        <TabPanels minHeight={"50vh"}>
          <TabPanel px={0}>
            <SimpleGrid columns={[1, 1, 2, 3]} spacing={4} mt={8}>
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
    </VStack>
  );
}

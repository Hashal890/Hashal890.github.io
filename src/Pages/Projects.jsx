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

const Projects = () => {
  return (
    <VStack
      id={"projects"}
      w={["97%", "97%", "95%", "85", "85%"]}
      m={"auto"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      mt={12}
      minH={"90vh"}
    >
      <SectionHeading sectionName={"Projects"} />
      <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
        <TabPanels>
          <TabPanel px={0}>
            <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={4} mt={8}>
              {ProjectsList.map((rep, index) => (
                <ProjectCard key={rep.id} {...rep} />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Projects;

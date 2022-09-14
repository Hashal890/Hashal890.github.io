import {
  Flex,
  Spacer,
  Tabs,
  TabPanels,
  TabPanel,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { SkillsList } from "../assets/data.js";
import SkillsCard from "../Components/SkillsCard";

export default function Skills() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Box w="65%" m="auto">
        <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
          <TabPanels minHeight="45vh">
            <TabPanel px="0">
              <SimpleGrid columns={[1, 2, 3]} spacing="4" mt="4">
                {SkillsList.map((skill, index) => (
                  <SkillsCard
                    key={index + 1}
                    link={skill.link}
                    name={skill.name}
                    color={skill.color}
                    icon={skill.icon}
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

import { Flex, Spacer, SimpleGrid, Box, Code } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { SkillsList, Statistics } from "../assets/data.js";
import SkillsCard from "../Components/SkillsCard";
import GithubCalendar from "../Components/GithubCalender";
import StatisticsCard from "../Components/StatisticsCard";

export default function Skills() {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <br />
      <br />
      <br />
      <Box w={["95%", "80%", "70%"]} m="auto">
        <Code colorScheme="whatsapp" mb="0.25rem" mt="2rem" fontSize="18px">
          Skills
        </Code>
        <SimpleGrid columns={[1, 2, 3]} spacing="4" mt="5" mb="5">
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
        <Code colorScheme="orange" mt="2rem" fontSize="18px">
          Statistics
        </Code>
        <SimpleGrid columns={[1, 2, 4]} spacing="4" mt="5" mb="5">
          {Statistics.map((skill, index) => (
            <StatisticsCard
              key={index + 1}
              count={skill.count}
              title={skill.title}
              subject={skill.subject}
            />
          ))}
        </SimpleGrid>
        <GithubCalendar />
      </Box>
      <Spacer />
      <Footer />
    </Flex>
  );
}

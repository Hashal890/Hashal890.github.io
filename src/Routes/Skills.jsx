import React from "react";
import { Flex, SimpleGrid, Box, Code, Image } from "@chakra-ui/react";
import { SkillsList, Statistics } from "../assets/data.js";
import SkillsCard from "../Components/SkillsCard";
import GithubCalendar from "../Components/GithubCalender";
import StatisticsCard from "../Components/StatisticsCard";

export default function Skills() {
  return (
    <Flex flexDir="column" h="100vh">
      <br />
      <br />
      <Box w={["95%", "80%", "70%"]} m="auto">
        <Code colorScheme="whatsapp" mb="0.25rem" mt="2rem" fontSize="18px">
          Skills
        </Code>
        <SimpleGrid columns={[2, 3, 4]} spacing="4" mt="5" mb="5">
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
        <Flex mt={4} gap={4} justifyContent={"space-between"} flexWrap={"wrap"}>
          <Image
            src={
              "https://github-readme-stats.vercel.app/api?username=Hashal890&theme=react&hide_border=false&include_all_commits=true&count_private=true"
            }
          />
          <Image
            src={
              "https://github-readme-streak-stats.herokuapp.com/?user=Hashal890&theme=react&hide_border=false&include_all_commits=true&count_private=true"
            }
          />
        </Flex>
        <SimpleGrid columns={[2, 2, 4]} spacing="4" mt="5" mb="5">
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
      <br />
      <br />
    </Flex>
  );
}

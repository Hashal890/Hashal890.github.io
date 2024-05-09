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
      <Box w={["95%", "90%", "90%", "75%"]} m="auto">
        <Code
          colorScheme="yellow"
          mb="0.25rem"
          mt="2rem"
          fontSize="24px"
          borderRadius={"xl"}
        >
          Skills
        </Code>
        <SimpleGrid columns={[3, 4, 6]} spacing="4" mt="5" mb="5">
          {SkillsList.map((skill, index) => {
            const { id, link, name, color, icon } = skill;
            return (
              <SkillsCard
                key={id}
                link={link}
                name={name}
                color={color}
                icon={icon}
              />
            );
          })}
        </SimpleGrid>
        <Code
          colorScheme="yellow"
          mt="2rem"
          fontSize="24px"
          borderRadius={"xl"}
        >
          Statistics
        </Code>
        <Flex
          mt={4}
          gap={4}
          justifyContent={["center", "center", "space-between"]}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
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
          {Statistics.map((statistic, index) => {
            const { id, count, title, subject } = statistic;
            return (
              <StatisticsCard
                key={id}
                count={count}
                title={title}
                subject={subject}
              />
            );
          })}
        </SimpleGrid>
        <GithubCalendar />
      </Box>
      <br />
      <br />
    </Flex>
  );
}

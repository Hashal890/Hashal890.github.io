import React from "react";
import { Flex, SimpleGrid, Box, Code, Image } from "@chakra-ui/react";
import { SkillsList, Statistics } from "../assets/data.js";
import SkillsCard from "../Components/SkillsCard.jsx";
import GithubCalendar from "../Components/GithubCalender.jsx";
import StatisticsCard from "../Components/StatisticsCard.jsx";

export default function Skills() {
  return (
    <Flex flexDir="column" id={"skills"}>
      {/* <br />
      <br /> */}
      <Box w={["95%", "90%", "90%", "75%"]} m="auto">
        <Flex justifyContent={"center"} alignItems={"center"} mb={6}>
          <Code
            colorScheme="yellow"
            mb="0.25rem"
            mt="2rem"
            fontSize="24px"
            borderRadius={"xl"}
          >
            Skills
          </Code>
        </Flex>
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
        <Flex justifyContent={"center"} alignItems={"center"} mb={6}>
          <Code
            colorScheme="yellow"
            mt="2rem"
            fontSize="24px"
            borderRadius={"xl"}
          >
            Statistics
          </Code>
        </Flex>
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

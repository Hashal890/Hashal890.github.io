import React from "react";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import { SkillsList } from "../assets/data.js";
import SkillsCard from "../components/skills/SkillsCard.jsx";
import SectionHeading from "../components/common/SectionHeading.jsx";

const Skills = () => {
  return (
    <VStack
      id={"skills"}
      justifyContent={"center"}
      alignItems={"center"}
      w={["95%", "90%", "90%", "75%"]}
      m={"auto"}
      pt={6}
      spacing={12}
      minH={"90vh"}
    >
      <SectionHeading sectionName={"Skills"} />
      <SimpleGrid columns={[4, 5, 6]} spacing={4} mb={5}>
        {SkillsList.map((skill) => (
          <SkillsCard key={skill.id} {...skill} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default Skills;

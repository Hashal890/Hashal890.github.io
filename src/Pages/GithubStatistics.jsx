import React from "react";
import { VStack } from "@chakra-ui/react";
import SectionHeading from "../components/common/SectionHeading.jsx";
import GitHubCommitsInfo from "../components/github-stats/GitHubCommitsInfo.jsx";
import GitHubCalendarCreator from "../components/github-stats/GitHubCalendarCreator.jsx";
// import CodingStatistics from "../components/github-stats/CodingStatistics.jsx";

const GithubStatistics = () => {
  return (
    <VStack
      id={"github-stats"}
      justifyContent={"center"}
      alignItems={"center"}
      w={["95%", "90%", "90%", "75%"]}
      m={"auto"}
      pt={12}
      spacing={12}
      minH={"90vh"}
    >
      <SectionHeading sectionName={"GitHub Stats"} />
      <GitHubCommitsInfo />
      <GitHubCalendarCreator />
      {/* <CodingStatistics /> */}
    </VStack>
  );
};

export default GithubStatistics;

import React from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

const GitHubCalendarCreator = () => {
  return (
    <Flex justifyContent={"center"} alignContent={"center"}>
      <GitHubCalendar
        username="Hashal890"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme={useColorModeValue("light", "dark")}
      />
    </Flex>
  );
};

export default GitHubCalendarCreator;

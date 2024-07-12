import React from "react";
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

const GitHubCommitsInfo = () => {
  return (
    <Flex
      gap={4}
      justifyContent={["center", "center", "space-between"]}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Image
        src={useColorModeValue(
          "https://github-readme-stats.vercel.app/api?username=Hashal890&theme=light&hide_border=false&include_all_commits=true&count_private=true",
          "https://github-readme-stats.vercel.app/api?username=Hashal890&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=true"
        )}
      />
      <Image
        src={useColorModeValue(
          "https://github-readme-streak-stats.herokuapp.com/?user=Hashal890&theme=light&hide_border=false&include_all_commits=true&count_private=true",
          "https://github-readme-streak-stats.herokuapp.com/?user=Hashal890&theme=tokyonight&hide_border=false&include_all_commits=true&count_private=true"
        )}
      />
    </Flex>
  );
};

export default GitHubCommitsInfo;

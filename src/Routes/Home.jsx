import React from "react";
import { Flex } from "@chakra-ui/react";
import HomeBanner from "../Components/HomeBanner";

export default function Home() {
  return (
    <Flex flexDir="column" h="100vh" p={4}>
      <HomeBanner />
      <br />
    </Flex>
  );
}

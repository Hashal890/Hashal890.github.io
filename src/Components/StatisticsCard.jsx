import { Code, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function StatisticsCard({ count, title, subject }) {
  return (
    <div>
      <VStack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w={"100%"}
        h={"150px"}
        border={"1px"}
        borderColor="blue.400"
        rounded={"xl"}
        _hover={{ shadow: "md" }}
        p={"10"}
      >
        <Code
          fontSize={["xl", "2xl", "3xl"]}
          borderRadius="30px"
          colorScheme="pink"
        >
          {count}
        </Code>
        <Text
          fontSize={["sm", "md", "xl"]}
          textAlign={"center"}
          fontWeight={500}
        >
          {title}
        </Text>
        <Text fontSize={["xs", "sm", "sm"]} textAlign={"center"}>
          {subject}
        </Text>
      </VStack>
    </div>
  );
}

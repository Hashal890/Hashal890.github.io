import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Text,
  Tag,
  Heading,
} from "@chakra-ui/react";

export default function AboutCardEducationDetails({
  title,
  role,
  marks,
  period,
}) {
  return (
    <Box
      px="4"
      py="5"
      borderWidth="1px"
      borderColor="blue.200"
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.700")}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Stack spacing="1" pl="3" align="left">
          <Heading align="left" fontSize="15">
            {title}
          </Heading>
          <Text color="gray.400" fontSize="12" align="left">
            {period}
          </Text>
          <Text as="i" align="left" fontSize="sm">
            {role}
          </Text>
          {marks && (
            <Tag size="sm" padding="0 3px" w={"54px"}>
              {marks}
            </Tag>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}

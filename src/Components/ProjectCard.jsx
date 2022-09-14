import React from "react";
import {
  Box,
  useColorModeValue,
  Tag,
  Text,
  Flex,
  Stack,
  Heading,
  Link,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { FaGithubAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { BiWorld } from "react-icons/bi";

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
}) {
  return (
    <Box
      px="4"
      py="5"
      borderWidth="1px"
      borderColor="gray.200"
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.700")}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Stack spacing="1" pl="3" align="left">
          <Flex gap="1rem" align="center">
            <FaGithubAlt />
            <Heading
              align="left"
              color="blue.400"
              fontWeight="medium"
              fontStyle="oblique"
              fontSize="15"
            >
              {title}
            </Heading>
          </Flex>
          <Stack
            pb="1"
            spacing="1"
            pt="3"
            isInline
            alignItems="center"
            display={["none", "none", "flex", "flex"]}
          >
            {techStack.map((language, index) => (
              <Tag size="sm" padding="1" key={index + 1}>
                {language}
              </Tag>
            ))}
          </Stack>
          <Text as="i" align="left" fontSize="sm" pb="1">
            {description}
          </Text>
          <Spacer />
          <Flex m="auto" gap="1rem" alignItems="center">
            <Link href={githubUrl}>
              <Button
                leftIcon={<SiGithub />}
                colorScheme="whatsapp"
                variant="solid"
                _hover={{ textDecor: "none" }}
              >
                View Code
              </Button>
            </Link>
            <Link href={liveUrl}>
              <Button
                leftIcon={<BiWorld />}
                colorScheme="linkedin"
                variant="solid"
                _hover={{ textDecor: "none" }}
              >
                View Live
              </Button>
            </Link>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}

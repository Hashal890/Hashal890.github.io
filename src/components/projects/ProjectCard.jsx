import React from "react";
import {
  Box,
  useColorModeValue,
  Tag,
  Text,
  Flex,
  Stack,
  Heading,
  Button,
  Spacer,
  Image,
  VStack,
  Spinner,
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
  image,
}) {
  return (
    <Box
      px={4}
      py={5}
      borderWidth={"2px"}
      borderColor={"gray.400"}
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.700")}
      position={"relative"}
      rounded={"md"}
    >
      <VStack justifyContent={"space-between"} alignItems={"start"}>
        <Image
          src={image}
          alt={title}
          borderRadius={"5px"}
          m={"auto"}
          fallbackSrc={
            <Spinner
              thickness={"4px"}
              speed={"0.65s"}
              emptyColor={"gray.200"}
              color={"blue.500"}
              size={"4xl"}
            />
          }
          w={"lg"}
        />
        <Stack
          spacing={"1"}
          pl={"3"}
          align={"left"}
          pt={5}
          borderTop={"1px solid gray"}
        >
          <Flex gap={"1rem"} align={"center"}>
            <FaGithubAlt />
            <Heading
              align={"left"}
              color={"blue.400"}
              fontWeight={"medium"}
              fontStyle={"oblique"}
              fontSize={"15"}
            >
              {title}
            </Heading>
          </Flex>
          <Flex
            pb={"1"}
            spacing={"1"}
            pt={"3"}
            isInline
            alignItems={"center"}
            gap={"0.25rem"}
            flexWrap={"wrap"}
          >
            {techStack.map((language, index) => (
              <Tag size={"sm"} padding={"1"} key={index + 1}>
                {language}
              </Tag>
            ))}
          </Flex>
          <Text as={"i"} align={"left"} fontSize={"sm"} pb={"1"}>
            {description}
          </Text>
          <Spacer />
          <Flex m={"auto"} gap={"1rem"} alignItems={"center"}>
            <a href={githubUrl} target={"_blank"} rel={"noreferrer"}>
              <Button
                leftIcon={<SiGithub />}
                colorScheme={"whatsapp"}
                variant={"solid"}
                _hover={{ textDecor: "none" }}
                fontSize={"small"}
                p={"2"}
              >
                View Code
              </Button>
            </a>
            <a href={liveUrl} target={"_blank"} rel={"noreferrer"}>
              <Button
                p={"2"}
                fontSize={"small"}
                leftIcon={<BiWorld />}
                colorScheme={"linkedin"}
                variant={"solid"}
                _hover={{ textDecor: "none" }}
              >
                View Deploy
              </Button>
            </a>
          </Flex>
        </Stack>
      </VStack>
    </Box>
  );
}

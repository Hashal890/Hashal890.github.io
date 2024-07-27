import React, { useState } from "react";
import {
  Box,
  useColorModeValue,
  Tag,
  Text,
  Flex,
  Stack,
  Heading,
  Image,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { BiWorld } from "react-icons/bi";
import ProjectCommonButton from "./ProjectCommonButton";

const ProjectCard = ({
  id,
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  image,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <Box
      px={3}
      py={4}
      borderWidth={"2px"}
      borderColor={"gray.400"}
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"md"}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <VStack
        justifyContent={"space-between"}
        alignItems={"start"}
        flexGrow={1}
      >
        {loading && (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            p={8}
            minH={"200px"}
          >
            <Spinner
              thickness={"4px"}
              speed={"0.65s"}
              emptyColor={"gray.200"}
              color={"blue.500"}
              size={"xl"}
            />
          </Flex>
        )}
        <Image
          src={image}
          alt={title}
          borderRadius={"5px"}
          m={"auto"}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
          display={loading ? "none" : "block"}
          w={"lg"}
          minH={"170px"}
        />
        <Stack
          spacing={1}
          pl={2}
          align={"left"}
          pt={5}
          borderTop={"1px solid gray"}
          flexGrow={1}
        >
          <Heading
            align={"left"}
            color={"blue.400"}
            fontWeight={"medium"}
            fontSize={17}
          >
            {title}
          </Heading>
          <Flex
            pb={1}
            spacing={1}
            mt={3}
            isInline
            alignItems={"center"}
            gap={"0.25rem"}
            flexWrap={"wrap"}
          >
            {techStack.map((language, index) => (
              <Tag
                fontSize={"x-small"}
                p={1}
                key={index + 1}
                colorScheme={"whatsapp"}
              >
                {language}
              </Tag>
            ))}
          </Flex>
          <Text
            align={"left"}
            fontSize={"xs"}
            pb={1}
            mt={2}
            color={useColorModeValue("gray.700", "wheat")}
          >
            {description}
          </Text>
        </Stack>
      </VStack>
      <Flex mt={2} gap={"1rem"} justifyContent={"center"} alignItems={"center"}>
        <ProjectCommonButton
          url={githubUrl}
          icon={<SiGithub />}
          color={"whatsapp"}
          title={"View Code"}
        />
        <ProjectCommonButton
          url={liveUrl}
          icon={<BiWorld />}
          color={"linkedin"}
          title={"View Deploy"}
        />
      </Flex>
    </Box>
  );
};

export default ProjectCard;

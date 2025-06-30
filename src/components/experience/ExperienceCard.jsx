import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Stack,
  Text,
  Tag,
  Heading,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { LiaCentercode } from "react-icons/lia";

const ExperienceCard = ({
  company,
  title,
  location,
  roles,
  skills,
  period,
}) => {
  return (
    <Box
      px={4}
      py={5}
      borderWidth={"1px"}
      borderColor={"blue.200"}
      _hover={{ shadow: "lg" }}
      bg={useColorModeValue("white", "gray.700")}
      position={"relative"}
      rounded={"md"}
    >
      <Flex justifyContent={"space-between"}>
        <Stack spacing={1} pl={3} align={"left"} gap={2}>
          <Box>
            <Heading align={"left"} fontSize={15}>
              {title}
            </Heading>
            <Text color={"gray.400"} fontSize={12} align={"left"} mt={1}>
              {company} <span>|</span> {location}
            </Text>
            <Text color={"gray.400"} fontSize={12} align={"left"} mt={1}>
              {period}
            </Text>
          </Box>
          <List fontSize={"sm"} mt={1}>
            {roles.map((role, ind) => (
              <ListItem size={"sm"} key={ind + 1}>
                <ListIcon as={LiaCentercode} color={"green.500"} />
                {role}
              </ListItem>
            ))}
          </List>
          <Flex spacing={1} alignItems={"center"} flexWrap={"wrap"} gap={"0.25rem"} mt={1}>
            {skills.map((skill, ind) => (
              <Tag size={"sm"} padding={"0 5px"} key={ind + 1}>
                {skill}
              </Tag>
            ))}
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ExperienceCard;

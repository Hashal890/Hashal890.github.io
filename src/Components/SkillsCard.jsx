import { VStack, Image, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function SkillsCard({ link, name, color, icon }) {
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <VStack
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100px"
          border="1px"
          borderColor="blue.400"
          rounded="xl"
          _hover={{ shadow: "md" }}
        >
          {name === "Postman" ? (
            <Image
              src="https://www.svgrepo.com/show/354202/postman-icon.svg"
              alt="Postman"
              mt="3"
              h="35px"
              w="35px"
            />
          ) : (
            <Box mt="2" fontSize="2xl" color={color}>
              {icon}
            </Box>
          )}
          <Text
            fontSize={["10px", "10px", "10px", "13px"]}
            pb="3"
            textAlign={"center"}
          >
            {name}
          </Text>
        </VStack>
      </a>
    </>
  );
}

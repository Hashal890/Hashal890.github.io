import React from "react";
import { Flex, Link, chakra, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      w="full"
      as="footer"
      align="center"
      justify="center"
      textAlign="center"
      p={2}
      position="fixed"
      left={0}
      bottom={0}
      bg={useColorModeValue("#FFFFFF", "#1A202C")}
      borderTop="1px solid"
      borderColor={useColorModeValue("#FFFFFF", "#1A202C")}
      zIndex={10}
      width="100%"
    >
      <chakra.p
        py={{
          base: "2",
          sm: "0",
        }}
        color={useColorModeValue("#1A202C", "blue.500")}
      >
        Built by{"  "}
        <span>
          <Link href="https://www.linkedin.com/in/harshalpardeshi/" isExternal>
            Harshal Pardeshi,
          </Link>
        </span>{" "}
        © {new Date().getFullYear()}. All rights reserved.
      </chakra.p>
    </Flex>
  );
}

import React from "react";
import { Flex, Link, chakra, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      w="full"
      as="footer"
      flexDir={{
        base: "column",
        sm: "row",
      }}
      align="center"
      justify="center"
      p={6}
      textAlign="center"
    >
      <chakra.p
        py={{
          base: "2",
          sm: "0",
        }}
        color={useColorModeValue("blackAlpha.900", "blue.500")}
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

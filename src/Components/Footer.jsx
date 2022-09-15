import React from "react";
import { Flex, IconButton, Link } from "@chakra-ui/react";
import { FooterLinks } from "./FooterLinks";

export default function Footer() {
  return (
    <Flex
      as="footer"
      spacing={[1, 2]}
      p="2"
      justifyContent="space-around"
      alignItems="center"
      w={["90%", "95%", "90%"]}
      maxW="1050"
      m="auto"
    >
      {FooterLinks.author.accounts.map((s, index) => (
        <IconButton
          key={index}
          as={Link}
          isExternal
          href={s.url}
          aria-label={s.name}
          colorScheme={s.type}
          icon={s.icon}
          variant="ghost"
          size="lg"
          isRound="true"
        />
      ))}
    </Flex>
  );
}

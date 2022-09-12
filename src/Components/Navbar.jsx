import React from "react";
import {
  Box,
  HStack,
  IconButton,
  useColorModeValue,
  useColorMode,
  useDisclosure,
  Link as ChakraLink,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { FaMoon, FaSun, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import NavLink from "./NavLink";
// import { NavbarLinks } from "../assets/data.js";

const NavbarLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills ", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      borderBottomColor={useColorModeValue("white", "blue.900")}
      boxShadow="md"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        w={["100%", "95%", "80%"]}
        pt="4"
        pb="4"
        maxW="container.lg"
        mx="auto"
      >
        <IconButton
          size="md"
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label="Open Menu"
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing="4" alignItems="center">
          <HStack as="nav" spacing="4" display={{ base: "none", md: "flex" }}>
            {NavbarLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                name={link.name}
                onClick={() => onClose()}
              />
            ))}
          </HStack>
        </HStack>
        <HStack alignItems="center">
          <IconButton
            as={ChakraLink}
            href={"https://github.com/Hashal890"}
            size="md"
            icon={<FaGithub />}
            aria-label="Github account"
            _hover={{
              textDecoration: "none",
              bg: useColorModeValue("gray.300", "blue.600"),
            }}
            bg={useColorModeValue("white", "gray.700")}
          />
          <IconButton
            variant="outline"
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
            aria-label="toggle-dark-mode"
          />
        </HStack>
      </Flex>
      {isOpen ? (
        <Box
          pb="4"
          w={["100%", "100%", "80%"]}
          maxW="800"
          display={["inherit", "inherit", "none"]}
        >
          <Stack as="nav" spacing="4" alignItems="center" w="">
            {NavbarLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.path}
                name={link.name}
                w="md"
                onClick={() => onClose()}
              />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

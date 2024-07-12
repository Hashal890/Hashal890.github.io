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
import NavLink from "./NavLink.jsx";
import { NavbarLinks } from "../../assets/data.js";

export default function Navbar() {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        zIndex: "10000",
        background: useColorModeValue("#FFFFFF", "#1A202C"),
        width: "100%",
      }}
      className={"navbar"}
    >
      <Box
        borderBottomColor={useColorModeValue("#FFFFFF", "#1A202C")}
        boxShadow={"md"}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w={["95%", "95%", "98%", "85%"]}
          pt={4}
          pb={4}
          m={"auto"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
            border={"1px dashed"}
            borderColor={useColorModeValue("black", "white")}
          />
          <HStack spacing={4} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {NavbarLinks.map((link) => {
                const { id, to, name } = link;

                return (
                  <NavLink
                    key={id}
                    to={to}
                    name={name}
                    onClick={() => onClose()}
                  />
                );
              })}
            </HStack>
          </HStack>
          <HStack alignItems={"center"}>
            <IconButton
              as={ChakraLink}
              href={"https://github.com/Hashal890"}
              target={"_blank"}
              size={"md"}
              icon={<FaGithub />}
              aria-label={"Github account"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.300", "blue.600"),
              }}
              bg={useColorModeValue("white", "gray.700")}
              border={"1px dashed"}
              borderColor={useColorModeValue("black", "white")}
            />
            <IconButton
              variant={"outline"}
              icon={useColorModeValue(<FaMoon />, <FaSun />)}
              onClick={toggleColorMode}
              aria-label={"toggle-dark-mode"}
              border={"1px dashed"}
              borderColor={useColorModeValue("black", "white")}
            />
          </HStack>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "85%"]}
            maxW={"800"}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4} alignItems={"center"}>
              {NavbarLinks.map((link, i) => {
                const { id, to, name } = link;

                return (
                  <NavLink
                    key={id}
                    to={to}
                    name={name}
                    onClick={() => onClose()}
                  />
                );
              })}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </div>
  );
}

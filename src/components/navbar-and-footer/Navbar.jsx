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

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as={"nav"}
      position={"fixed"}
      top={0}
      width={"100%"}
      zIndex={"10000"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"md"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        w={["95%", "95%", "98%", "98%", "85%"]}
        py={4}
        mx={"auto"}
      >
        <IconButton
          size={"md"}
          icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          aria-label={"Open Menu"}
          display={{ base: "inherit", lg: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={4} alignItems={"center"}>
          <HStack as={"nav"} spacing={4} display={{ base: "none", lg: "flex" }}>
            {NavbarLinks.map((link) => (
              <NavLink key={link.id} {...link} onClick={onClose} />
            ))}
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
            bg={useColorModeValue("white", "gray.700")}
            _hover={{ bg: useColorModeValue("gray.300", "blue.600") }}
          />
          <IconButton
            variant={"outline"}
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
            aria-label={"Toggle Dark Mode"}
            _hover={{ bg: useColorModeValue("gray.300", "blue.600") }}
          />
        </HStack>
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ base: "block", lg: "none" }}>
          <Stack as={"nav"} spacing={4} alignItems={"center"}>
            {NavbarLinks.map((link) => (
              <NavLink key={link.id} {...link} onClick={onClose} />
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;

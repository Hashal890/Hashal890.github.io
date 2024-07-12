import React from "react";
import { Button } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

export default function NavLink({ to, name, onClick }) {
  return (
    <>
      {name === "Resume" ? (
        <a
          href={"https://drive.google.com/file/d/1pV8XBrEE6ZaN5BbITcfE215MNNCLl94z/view?usp=sharing"}
          target={"_blank"}
          rel={"noopener noreferrer"}
          cursor={"pointer"}
        >
          Resume
        </a>
      ) : (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
          <Button
            as={"a"}
            variant={"ghost"}
            colorScheme={"gray"}
            size={"sm"}
            cursor={"pointer"}
            onClick={onClick}
          >
            {name}
          </Button>
        </ScrollLink>
      )}
    </>
  );
}

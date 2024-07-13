import React from "react";
import { Button } from "@chakra-ui/react";

const HomeCommonButton = ({ link, icon, title }) => {
  return (
    <Button
      as={"a"}
      href={link}
      target={"_blank"}
      rel="noopener noreferrer"
      rightIcon={icon}
      w="ms"
      mt={6}
      colorScheme={"messenger"}
      size={"md"}
    >
      {title}
    </Button>
  );
};

export default HomeCommonButton;

import React from "react";
import { Button } from "@chakra-ui/react";

const ProjectCommonButton = ({ url, icon, color, title }) => {
  return (
    <a href={url} target={"_blank"} rel={"noreferrer"}>
      <Button
        leftIcon={icon}
        colorScheme={color}
        variant={"solid"}
        _hover={{ textDecor: "none" }}
        fontSize={"small"}
        p={2}
      >
        {title}
      </Button>
    </a>
  );
};

export default ProjectCommonButton;

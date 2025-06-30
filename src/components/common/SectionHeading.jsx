import React from "react";
import { Code, useColorModeValue } from "@chakra-ui/react";

const SectionHeading = ({ sectionName }) => {
  return (
    <Code
      colorScheme={useColorModeValue("linkedin", "yellow")}
      fontSize={"24px"}
      borderRadius={8}
      m={"auto"}
      mb={"1rem"}
      mt={"1rem"}
    >
      {sectionName}
    </Code>
  );
};

export default SectionHeading;

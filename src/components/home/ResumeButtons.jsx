import React from "react";
import { Flex } from "@chakra-ui/react";
import { IoMdDownload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import HomeCommonButton from "./HomeCommonButton";

const ResumeButtons = () => {
  return (
    <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
      <HomeCommonButton
        link={
          "https://drive.google.com/file/d/1pV8XBrEE6ZaN5BbITcfE215MNNCLl94z/view?usp=sharing"
        }
        icon={<FaEye />}
        title={"View Resume"}
      />
      <HomeCommonButton
        link={
          "https://drive.google.com/uc?export=download&id=1pV8XBrEE6ZaN5BbITcfE215MNNCLl94z"
        }
        icon={<IoMdDownload />}
        title={"Download Resume"}
      />
    </Flex>
  );
};

export default ResumeButtons;

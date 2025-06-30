import React from "react";
import { Flex, Code } from "@chakra-ui/react";
import Typist from "react-typist";
import ResumeButtons from "../components/home/ResumeButtons.jsx";
import WelcomeHeading from "../components/home/WelcomeHeading.jsx";

const Home = () => {
  return (
    <Flex
      id={"home"}
      flexDir={"column"}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      mt={[18, 8]}
      minH={"92vh"}
    >
      <WelcomeHeading />
      <Typist>
        <Code colorScheme={"whatsapp"} fontSize={"18px"}>
          FULL STACK WEB DEVELOPER
        </Code>
      </Typist>
      <ResumeButtons />
    </Flex>
  );
};

export default Home;

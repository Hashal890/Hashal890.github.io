import React from "react";
import {
  Flex,
  Image,
  Box,
  useColorModeValue,
  Text,
  Code,
} from "@chakra-ui/react";
import Profile from "../../assets/Harshal-Pardeshi-Profile-Photo.png";

const AboutMeIntroduction = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      m={"auto"}
      w={"100%"}
      align={"center"}
    >
      <Image
        w={["230px", "300px"]}
        h={["250px", "300px"]}
        src={Profile}
        alt={"Harshal Image"}
        loading={"eager"}
        mb={4}
        display={["block", "block", "none"]}
        alignSelf={"center"}
        borderRadius={"20px"}
      />
      <Box p={4} mr={4} w={"full"} maxW={"800px"}>
        <Text
          pr={{ base: 0, md: 16 }}
          mb={4}
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing={"wider"}
          textAlign={"start"}
          fontFamily={"body"}
        >
          <span>
            A <Code colorScheme={"green"}>Full Stack Web Developer</Code>{" "}
            currently working as an <strong>SDE-I at Smart Ship© Hub</strong>,
            where I’m contributing to the development of scalable and
            high-performance web applications. I bring a strong foundation in
            the <strong>MERN stack</strong>, honed through intensive, full-time
            training at <strong>Masai School</strong> and strengthened by
            real-world experience in a fast-paced, product-driven environment.
          </span>
          <br />
          <br />
          <span>
            My technical skill set includes{" "}
            <strong>
              JavaScript, TypeScript, Node.js, Fastify, React.js, MongoDB,
              Redux, Next.js
            </strong>
            , and integrations like <strong>Google Cloud Storage</strong>. I
            specialize in building robust backend APIs and crafting responsive,
            user-friendly frontend interfaces that align with business goals.
          </span>
          <br />
          <br />
          <span>
            I’m also pursuing my <strong>B.Sc. in Computer Science</strong> from{" "}
            <strong>BITS Pilani</strong>, balancing academics with hands-on
            industry work. My projects, like a real-time multilingual speech
            translator and a timezone scheduling tool, reflect my passion for
            solving real-world problems through clean, efficient code.
          </span>
          <br />
          <br />
          <span>
            I'm always looking for opportunities that challenge me to grow and
            innovate. Open to relocation, I aim to contribute to impactful
            projects in a collaborative and forward-thinking environment.
          </span>
        </Text>
      </Box>
      <Image
        w={["230px", "300px"]}
        h={["250px", "300px"]}
        src={Profile}
        alt={"Harshal Image"}
        display={["none", "none", "block"]}
        loading={"eager"}
        mb={6}
        borderRadius={"20px"}
      />
    </Flex>
  );
};

export default AboutMeIntroduction;

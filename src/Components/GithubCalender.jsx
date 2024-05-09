import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { Code } from "@chakra-ui/react";

export default function GithubCalendar() {
  return (
    <Row
      style={{
        justifyContent: "center",
        marginTop: "3rem",
        marginBottom: "1rem",
      }}
    >
      <Code colorScheme="yellow" mb="1rem" fontSize="24px" borderRadius={"xl"}>
        Github Calender
      </Code>
      <GitHubCalendar
        username="Hashal890"
        blockSize={15}
        blockMargin={5}
        color="rgb(10,120,219)"
        fontSize={16}
      />
    </Row>
  );
}

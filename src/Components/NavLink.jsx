import React from "react";
import { Button } from "@chakra-ui/react";
import { NavLink as Link, useLocation } from "react-router-dom";

export default function NavLink({ to, name, onClose, ...rest }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <>
      {name === "Resume" ? (
        <a
          href="https://drive.google.com/file/d/1eo6ZOSHSIb4brjK1_bmFpCNnZJNWavW6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      ) : (
        <Link to={to}>
          <Button
            as="a"
            variant={isActive ? "outline" : "ghost"}
            colorScheme={isActive ? "blue" : "gray"}
            size="sm"
            {...rest}
          >
            {name}
          </Button>
        </Link>
      )}
    </>
  );
}

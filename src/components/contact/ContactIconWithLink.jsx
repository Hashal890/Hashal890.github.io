import React from "react";
import { IconButton, Link } from "@chakra-ui/react";

const ContactIconWithLink = ({ id, link, icon }) => {
  return (
    <Link href={link} isExternal bg={"transparent"}>
      <IconButton
        colorScheme={"blue"}
        variant={"outline"}
        aria-label={"contact-button"}
        size={"lg"}
        icon={icon}
      />
    </Link>
  );
};

export default ContactIconWithLink;

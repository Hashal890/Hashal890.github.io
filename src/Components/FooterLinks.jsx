import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const FooterLinks = {
  copyright: `Copyright © ${new Date().getFullYear()} El Midaoui Ziad. All Rights Reserved.`,
  author: {
    name: "El Midaoui Ziad",
    accounts: [
      {
        url: "https://www.linkedin.com/in/harshalpardeshi/",
        name: "LinkedIn",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "https://github.com/Hashal890",
        name: "Github",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "mailto:pardeshiharshal90@gmail.com",
        name: "Mail",
        type: "red",
        icon: <FiMail />,
      },
      {
        url: "https://twitter.com/harshal258",
        name: "Twitter",
        type: "twitter",
        icon: <FaTwitter />,
      },
    ],
  },
};

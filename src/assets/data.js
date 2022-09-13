import {
  SiChakraui,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiNodedotjs,
  SiTypescript,
  SiBootstrap,
} from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaRegFileCode,
} from "react-icons/fa";

export const SkillsList = [
  {
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: <FaHtml5 />,
    color: "red.600",
  },
  {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: <FaCss3Alt />,
    color: "green.600",
  },
  {
    name: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <SiJavascript />,
    color: "yellow.400",
  },
  {
    name: "ReactJS",
    link: "https://reactjs.org/",
    icon: <FaReact />,
    color: "blue.600",
  },
  {
    name: "ExpressJS",
    link: "https://expressjs.com/",
    icon: <SiExpress />,
    color: "blue.600",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
    color: "blue.500",
  },
  {
    name: "Redux",
    link: "https://redux.js.org/",
    icon: <SiRedux />,
    color: "blue.600",
  },
  {
    name: "NodeJS",
    link: "https://www.oracle.com/",
    icon: <SiNodedotjs />,
    color: "red.500",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: <SiMongodb />,
    color: "orange.500",
  },
  {
    name: "WebScrapping",
    link: "https://webscraper.io/",
    icon: <FaRegFileCode />,
    color: "blue.200",
  },
  {
    name: "Chakra UI",
    link: "https://chakra-ui.com/",
    icon: <SiChakraui />,
    color: "teal.400",
  },
  {
    name: "Bootstrap",
    link: "https://chakra-ui.com/",
    icon: <SiBootstrap />,
    color: "teal.400",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    icon: <FaGitAlt />,
    color: "red.500",
  },
  {
    name: "Postman",
    link: "https://www.postman.com/",
    icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    color: "red.500",
  },
  {
    name: "Data Structures and Algorithms",
    link: "#",
    icon: <FaGitAlt />,
    color: "red.500",
  },
];

export const NavbarLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills ", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

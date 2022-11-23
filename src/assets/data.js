import {
  SiChakraui,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiNodedotjs,
  SiTypescript,
  SiBootstrap,
  SiHeroku,
  SiCanva,
  SiNetlify,
  SiVercel,
  SiRailway,
  SiRedis,
  SiAmazonaws,
} from "react-icons/si";
import {
  FaGitAlt,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaRegFileCode,
  FaGithub,
  FaLaptopCode,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { ImNpm } from "react-icons/im";
import { TbBrandNextjs } from "react-icons/tb";
import {
  BsTelephoneFill,
  BsWhatsapp,
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsInstagram,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

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
    color: "blue.600",
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
    color: "gray.600",
  },
  {
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
    color: "rgb(0, 122, 204)",
  },
  {
    name: "NextJS",
    link: "https://nextjs.org/",
    icon: <TbBrandNextjs />,
    color: "rgb(0, 0, 0)",
  },
  {
    name: "Redux",
    link: "https://redux.js.org/",
    icon: <SiRedux />,
    color: "rgb(118, 74, 188)",
  },
  {
    name: "NodeJS",
    link: "https://www.oracle.com/",
    icon: <SiNodedotjs />,
    color: "rgb(60, 135, 58)",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: <SiMongodb />,
    color: "rgb(77, 179, 61)",
  },
  {
    name: "Redis",
    link: "https://redis.com/",
    icon: <SiRedis />,
    color: "rgb(216, 44, 32)",
  },
  {
    name: "AWS",
    link: "https://aws.amazon.com/",
    icon: <SiAmazonaws />,
    color: "#ec7211",
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
    color: "blue.400",
  },
  {
    name: "NPM",
    link: "https://www.npmjs.com/",
    icon: <ImNpm />,
    color: "red.400",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    icon: <FaGitAlt />,
    color: "red.500",
  },
  {
    name: "Github",
    link: "https://github.com/",
    icon: <FaGithub />,
    color: "teal.500",
  },
  {
    name: "VS Code",
    link: "https://code.visualstudio.com/",
    icon: <VscCode />,
    color: "red.500",
  },
  {
    name: "Postman",
    link: "https://git-scm.com/",
    icon: <FaGitAlt />,
    color: "red.500",
  },
  {
    name: "Heroku",
    link: "https://devcenter.heroku.com/",
    icon: <SiHeroku />,
    color: "purple.600",
  },
  {
    name: "Netlify",
    link: "https://app.netlify.com/",
    icon: <SiNetlify />,
    color: "teal.600",
  },
  {
    name: "Vercel",
    link: "https://vercel.com/dashboard",
    icon: <SiVercel />,
    color: "teal.600",
  },
  {
    name: "Railway",
    link: "https://railway.app/dashboard",
    icon: <SiRailway />,
    color: "whiteAlpha.900",
  },
  {
    name: "Canva",
    link: "https://www.canva.com/",
    icon: <SiCanva />,
    color: "blue.500",
  },
  {
    name: "Data Structures and Algorithms",
    link: "https://www.geeksforgeeks.org/data-structures/",
    icon: <FaLaptopCode />,
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

export const ProjectsList = [
  {
    title: "Exclusive Website(Yoox Clone)",
    description:
      "Yoox Net-a-Porter is home to the world’s leading online luxury, fashion and style destinations. They are four multi-brand online stores names as Net-a-Porter, Mr Porter, the Outnet and Yoox.",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "NextJS",
      "ExpressJS",
      "Redis",
      "Json web token",
      "Razorpay",
      "Chakra-UI",
    ],
    githubUrl: "https://github.com/Hashal890/Exclusive-Yoox-Clone",
    liveUrl: "https://yoox-clone-by-exclusive.vercel.app/",
    image:
      "https://github.com/Hashal890/Exclusive-Yoox-Clone/raw/main/assets/mensProductsPage.png",
  },
  {
    title: "Bitrix-24 Clone",
    description:
      "Bitrix24 is a united work space which handles the many aspects of daily operations & tasks. CRM, Project Management & Collaboration Platform for your business management. Cloud or on premise.",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "ReactJS",
      "ExpressJS",
      "Redux",
      "MongoDB",
      "Chakra-UI",
    ],
    githubUrl: "https://github.com/Hashal890/gusty-cover-2254",
    liveUrl: "https://betrix24-clone.vercel.app/",
    image:
      "https://github.com/Hashal890/Bitrix24-Clone/raw/main/frontend/src/assets/homePage.png",
  },
  {
    title: "Nature Basket Clone",
    description:
      "Nature’s Basket is India’s pioneering food destination present through physical retail stores, online portal and a mobile application.",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "React",
      "WebScrapping",
      "Chakra-UI",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/Hashal890/stark-meeting-6715",
    liveUrl: "https://naturesbasketclone.vercel.app/",
    image:
      "https://github.com/Hashal890/Nature-Basket-Clone/raw/main/src/Assets/homePage.png",
  },
  {
    title: "Zoom Car Clone",
    description:
      "Zoomcar is an Indian car sharing platform, headquartered in Bangalore. The company was founded in 2013 by David Back and Greg Moran. It currently operates in 34+ cities.",
    techStack: ["HTML", "CSS", "JS", "React", "Chakra-UI", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/educated-earth-4277",
    liveUrl: "https://zoomcarclone.vercel.app/",
    image:
      "https://github.com/Hashal890/Zoom-Car-Clone/raw/main/src/Assets/homePage.png",
  },
  {
    title: "Dot & Key Clone",
    description:
      "Dot & Key is a fresh take on skincare. One that's founded on the understanding that everyone is unique.",
    techStack: [
      "HTML",
      "CSS",
      "JS",
      "WebScrapping",
      "Bootstrap",
      "Slick Slider",
      "Jquery",
    ],
    githubUrl: "https://github.com/Hashal890/dot-key-clone",
    liveUrl: "https://dotandkeyclone.netlify.app/",
    image:
      "https://github.com/Hashal890/dot-key-clone/raw/main/assets/homePage.png",
  },
  {
    title: "Kimaye Clone",
    description:
      "Consistently delivering the safest and highest-quality fruits at your doorstep. Our roots lie in the principles of cooperation and partnership.",
    techStack: ["HTML", "CSS", "JS", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/Team-Kimayi",
    liveUrl: "https://kimaye-masai.netlify.app/",
    image:
      "https://github.com/Hashal890/Kimaye-Clone/raw/main/assets/homePage.png",
  },
  {
    title: "Star Wars Searchbar",
    description:
      "An searchbar, where you can search for characters of the Star Wars.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Hashal890/Star-Wars",
    liveUrl: "https://star-wars-unit3.netlify.app/",
    image:
      "https://github.com/Hashal890/Star-Wars/raw/main/assets/searchResults.png",
  },
  {
    title: "Space Tourism Website",
    description:
      "Website that takes you to some planets like moon, mars, europa and titan.",
    techStack: ["HTML", "CSS", "JS", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/Space-tourism-website",
    liveUrl: "https://space-tourism-123.netlify.app/",
    image:
      "https://github.com/Hashal890/Space-tourism-website/raw/main/assets/solution/homePage.png",
  },
  {
    title: "Youtube App",
    description:
      "An basic youtube application where you can search and watch videos.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Hashal890/Youtube-App",
    liveUrl: "https://youtube-app-unit3.netlify.app/",
    image:
      "https://github.com/Hashal890/Youtube-App/raw/main/assets/searchResults.png",
  },
  {
    title: "Weather App",
    description:
      "An basic weather application where you can search and get weather of that city. You can also get weather by live location.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Hashal890/Weather-App",
    liveUrl: "https://weather-app-unit3.netlify.app/",
    image:
      "https://github.com/Hashal890/Weather-App/raw/main/assets/homeOnePage.png",
  },
];

export const EducationDetails = [
  {
    title: "Masai School, Bangalore",
    role: "Full Stack Web Development",
    skills: [],
    period: "March 2022 – Present",
  },
  {
    title: "Government Polytechnic, Nashik",
    role: "Diploma in Mechanical Engineering",
    skills: ["8.8 GPA"],
    period: "2018 – 2021",
  },
];

export const ExperienceDetails = [
  {
    title: "Supervisor",
    role: "Mechanical Engineer Intern",
    skills: [
      "Leadership",
      "Team Collaboration",
      "Problem Solving",
      "Presentations",
    ],
    period: "October 2021 – February 2022",
  },
];

export const Statistics = [
  {
    count: "1200+",
    title: "Hours",
    subject: "of Full Stack Coding",
  },
  {
    count: "800+",
    title: "DSA",
    subject: "Problems",
  },
  {
    count: "15+",
    title: "Projects",
    subject: "Done",
  },
  {
    count: "100+",
    title: "Hours",
    subject: "of Soft Skills Sessions",
  },
];

export const ContactDetails = [
  { icon: BsTelephoneFill, link: "tel:+8329729568", name: "+91 8329729568" },
  {
    icon: BsWhatsapp,
    link: "https://api.whatsapp.com/send/?phone=8329729568&text=Hey+Harshal%21+I+just+checked+out+your+website%2C+and+I+would+love+to+discuss+about+a+project+with+you&app_absent=0&lang=en",
    name: "+91 8329729568",
  },
  {
    icon: BsGithub,
    link: "https://github.com/hashal890",
    name: "hashal890",
  },
  {
    icon: HiOutlineMail,
    link: "mailto: pardeshiharshal90@gmail.com",
    name: "pardeshiharshal90@gmail.com",
  },
  {
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/harshalpardeshi/",
    name: "harshalpardeshi",
  },
  {
    icon: BsTwitter,
    link: "https://twitter.com/harshal258/",
    name: "harshal258",
  },
  {
    icon: BsInstagram,
    link: "https://www.instagram.com/harshalpardeshi_hp/",
    name: "harshalpardeshi_hp",
  },
];

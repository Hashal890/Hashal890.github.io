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
    link: "https://git-scm.com/",
    icon: <FaGitAlt />,
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

export const ProjectsList = [
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
      "https://3.imimg.com/data3/EK/AQ/GLADMIN-69208/food-basket-500x500.jpg",
  },
  {
    title: "Zoom Car Clone",
    description:
      "Zoomcar is an Indian car sharing platform, headquartered in Bangalore. The company was founded in 2013 by David Back and Greg Moran. It currently operates in 34+ cities.",
    techStack: ["HTML", "CSS", "JS", "React", "Chakra-UI", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/educated-earth-4277",
    liveUrl: "https://zoomcarclone.vercel.app/",
    image:
      "https://zoomcar-assets.zoomcar.com/images/original/207f2f9653395ea8b5b5acf04cd722aa1b88b0f0.png?1661344619",
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
      "https://img.buzzfeed.com/buzzfeed-static/static/2020-05/14/19/asset/0329e3af71dc/sub-buzz-298-1589485926-2.png?downsize=700%3A%2A&output-quality=auto&output-format=auto",
  },
  {
    title: "Kimaye Clone",
    description:
      "Consistently delivering the safest and highest-quality fruits at your doorstep. Our roots lie in the principles of cooperation and partnership.",
    techStack: ["HTML", "CSS", "JS", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/Team-Kimayi",
    liveUrl: "https://kimaye-masai.netlify.app/",
    image:
      "https://www.thespruce.com/thmb/mbyAoYkqn-y-pqASxWjz5NCEb4Q=/3530x3530/smart/filters:no_upscale()/june-fruit-drop-1403308-02-4f53df5c1caf40f197e8a8c619ded693.jpg",
  },
  {
    title: "Space Tourism Website",
    description:
      "Website that takes you to some planets like moon, mars, europa and titan.",
    techStack: ["HTML", "CSS", "JS", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/Space-tourism-website",
    liveUrl: "https://space-tourism-123.netlify.app/",
    image:
      "https://img.freepik.com/free-vector/space-background-design_1300-145.jpg",
  },
  {
    title: "Json Mock Server",
    description:
      "An api which contains some information which is avialable for everyone.",
    techStack: ["HTML", "CSS", "JS", "Json Server", "Heroku"],
    githubUrl: "https://github.com/Hashal890/Json-Mock-Server",
    liveUrl: "https://harshal-json-mock-server.herokuapp.com/",
    image: "https://guviblogs.files.wordpress.com/2014/08/database_server.jpg",
  },
  {
    title: "Star Wars Searchbar",
    description:
      "An searchbar, where you can search for characters of the Star Wars.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Hashal890/Star-Wars",
    liveUrl: "https://star-wars-unit3.netlify.app/",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/star-wars-characters-ranked-1577122930.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    title: "Youtube App",
    description:
      "An basic youtube application where you can search and watch videos.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Hashal890/Youtube-App",
    liveUrl: "https://youtube-app-unit3.netlify.app/",
    image:
      "https://as2.ftcdn.net/v2/jpg/03/50/73/39/1000_F_350733963_Tkud6iHBkLBkTDnbyNTBrVkcJBzbbyXv.jpg",
  },
  {
    title: "Weather App",
    description:
      "An basic weather application where you can get live weather information.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Hashal890/Weather-App",
    liveUrl: "https://weather-app-unit3.netlify.app/",
    image:
      "https://i.pinimg.com/originals/ab/96/a8/ab96a8d990b339f53202e32777481a63.png",
  },
  {
    title: "Food App",
    description:
      "An basic food application where you can search for different recipies and also get top recipies.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Hashal890/Food-App",
    liveUrl: "https://food-app-unit3.netlify.app/",
    image:
      "https://cdn.shopify.com/s/files/1/0596/3717/0335/products/The-Winter-Roast-Kit_large.jpg?v=1642506525",
  },
  {
    title: "Hotstar Searchbar",
    description:
      "An searchbar, where you can search for movies and also get trending movies.",
    techStack: ["HTML", "CSS", "JS"],
    githubUrl: "https://github.com/Hashal890/Hotstar-Search-Bar",
    liveUrl: "https://hotstar-search-bar-unit3.netlify.app/",
    image:
      "https://malwaretips.com/blogs/wp-content/uploads/2018/02/Amazing-Movie-Search.jpg",
  },
];

export const EducationDetails = [
  {
    title: "Masai School, Bangalore",
    description:
      "Given 1200+ hours of coding and solved 500+ dsa problems within 7 months.",
    role: "Full Stack Web Development",
    skills: [],
    period: "2022 – present",
  },
  {
    title: "Government Polytechnic, Nashik",
    description:
      "The three years contain theoretical courses to found a strong basis in logical reasoning.",
    role: "Diploma in Mechanical Engineering",
    skills: ["8.8 GPA"],
    period: "2018 – 2021",
  },
  {
    title: "LVM Jr. College, Bhadgaon",
    description: "Formation of base of education for future studies.",
    role: "SSC",
    skills: ["9.2 CGPA"],
    period: "2017 – 2018",
  },
];

export const ExperienceDetails = [
  {
    title: "Supervisor",
    role: "Mechanical Engineer Intern",
    description:
      "After completing the three years of diploma I decided to take some practical knowledge, so I joined TATA Motors, Pune as intern. My work was to supervise on the workers.",
    skills: [
      "Leadership",
      "Team Collaboration",
      "Problem Solving",
      "Presentations",
    ],
    period: "October 2021 – February 2022",
  },
];

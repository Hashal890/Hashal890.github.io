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
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Image } from "@chakra-ui/react";

export const SkillsList = [
  {
    id: 1,
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: <FaHtml5 />,
    color: "red.600",
  },
  {
    id: 2,
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: <FaCss3Alt />,
    color: "blue.600",
  },
  {
    id: 3,
    name: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <SiJavascript />,
    color: "yellow.400",
  },
  {
    id: 4,
    name: "ReactJS",
    link: "https://reactjs.org/",
    icon: <FaReact />,
    color: "blue.600",
  },
  {
    id: 5,
    name: "Express.js",
    link: "https://expressjs.com/",
    icon: <SiExpress />,
    color: "gray.600",
  },
  {
    id: 6,
    name: "Typescript",
    link: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
    color: "rgb(0, 122, 204)",
  },
  {
    id: 7,
    name: "Next.js",
    link: "https://nextjs.org/",
    icon: <TbBrandNextjs />,
    color: "rgb(0, 0, 0)",
  },
  {
    id: 8,
    name: "Redux",
    link: "https://redux.js.org/",
    icon: <SiRedux />,
    color: "rgb(118, 74, 188)",
  },
  {
    id: 9,
    name: "NodeJS",
    link: "https://www.oracle.com/",
    icon: <SiNodedotjs />,
    color: "rgb(60, 135, 58)",
  },
  {
    id: 10,
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: <SiMongodb />,
    color: "rgb(77, 179, 61)",
  },
  {
    id: 11,
    name: "Redis",
    link: "https://redis.com/",
    icon: <SiRedis />,
    color: "rgb(216, 44, 32)",
  },
  {
    id: 12,
    name: "AWS",
    link: "https://aws.amazon.com/",
    icon: <SiAmazonaws />,
    color: "#ec7211",
  },
  {
    id: 13,
    name: "WebScrapping",
    link: "https://webscraper.io/",
    icon: <FaRegFileCode />,
    color: "blue.200",
  },
  {
    id: 14,
    name: "Chakra-UI",
    link: "https://chakra-ui.com/",
    icon: <SiChakraui />,
    color: "teal.400",
  },
  {
    id: 15,
    name: "Bootstrap",
    link: "https://chakra-ui.com/",
    icon: <SiBootstrap />,
    color: "blue.400",
  },
  {
    id: 16,
    name: "NPM",
    link: "https://www.npmjs.com/",
    icon: <ImNpm />,
    color: "red.400",
  },
  {
    id: 17,
    name: "Git",
    link: "https://git-scm.com/",
    icon: <FaGitAlt />,
    color: "red.500",
  },
  {
    id: 18,
    name: "Github",
    link: "https://github.com/",
    icon: <FaGithub />,
    color: "teal.500",
  },
  {
    id: 19,
    name: "VS Code",
    link: "https://code.visualstudio.com/",
    icon: <VscCode />,
    color: "red.500",
  },
  {
    id: 20,
    name: "Postman",
    link: "https://git-scm.com/",
    icon: <FaGitAlt />,
    color: "red.500",
  },
  {
    id: 21,
    name: "Heroku",
    link: "https://devcenter.heroku.com/",
    icon: <SiHeroku />,
    color: "purple.600",
  },
  {
    id: 22,
    name: "Netlify",
    link: "https://app.netlify.com/",
    icon: <SiNetlify />,
    color: "teal.600",
  },
  {
    id: 23,
    name: "Vercel",
    link: "https://vercel.com/dashboard",
    icon: <SiVercel />,
    color: "teal.600",
  },
  {
    id: 24,
    name: "Railway",
    link: "https://railway.app/dashboard",
    icon: <SiRailway />,
    color: "whiteAlpha.900",
  },
  {
    id: 25,
    name: "Canva",
    link: "https://www.canva.com/",
    icon: <SiCanva />,
    color: "blue.500",
  },
  {
    id: 26,
    name: "Data Structures and Algorithms",
    link: "https://www.geeksforgeeks.org/data-structures/",
    icon: <FaLaptopCode />,
    color: "red.500",
  },
  {
    id: 27,
    name: "ChatGPT",
    link: "https://chat.openai.com/",
    icon: (
      <Image
        src={
          "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png"
        }
        w={"28px"}
        h={"28px"}
        borderRadius={"100%"}
      />
    ),
    color: "red.500",
  },
];

export const NavbarLinks = [
  { id: 1, to: "home", name: "Home" },
  { id: 2, to: "about", name: "About Me" },
  // { id: 3, to: "experience", name: "Experience" },
  { id: 4, to: "education", name: "Education" },
  { id: 5, to: "skills", name: "Skills " },
  { id: 6, to: "projects", name: "Projects" },
  { id: 7, to: "github-stats", name: "Github Stats" },
  { id: 8, to: "contact", name: "Contact Me" },
  {
    id: 9,
    to: "https://drive.google.com/file/d/1pV8XBrEE6ZaN5BbITcfE215MNNCLl94z/view?usp=sharing",
    name: "Resume",
  },
];

export const ProjectsList = [
  {
    id: 1,
    title: "Exclusive Luxury Fashion E-Commerce Platform",
    description:
      "Exclusive (Yoox) hosts premier online luxury, fashion, and style destinations, featuring four multi-brand stores: Net-a-Porter, Mr Porter, the Outnet, and Yoox. Explore the finest in fashion and luxury at these renowned online destinations.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Express.js",
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
    id: 17,
    title: "TimeZone Convertor and Scheduler",
    description:
      "TimeZone Convertor and Scheduler is a React-based tool for converting time between multiple time zones. Features include a responsive time slider, date picker, dark mode, drag-and-drop reordering, and Google Meet scheduling.",
    techStack: [
      "React.js",
      "Moment.js",
      "React Select",
      "React Datepicker",
      "Hello Pangea Dnd",
      "JavaScript",
      "Axios",
      "Chakra-UI",
      "React Icons",
    ],
    githubUrl: "https://github.com/Hashal890/timezone-convertor-and-scheduler",
    liveUrl: "https://timezone-convertor-and-scheduler.vercel.app/",
    image:
      "https://github.com/Hashal890/timezone-convertor-and-scheduler/raw/main/src/assets/project-demonstration.gif",
  },
  {
    id: 16,
    title: "Multilingual Text and Speech Translator",
    description:
      "A MERN stack web app for translating text between multiple languages. Features a clean UI, automatic language detection, speech-to-text input, and text-to-speech output. Utilizes Google Translate API and MongoDB for storing translation data. Designed for scalability, efficiency, and robust performance.",
    techStack: [
      "MongoDB",
      "Mongoose",
      "Express.js",
      "React.js",
      "React Speech Recognition",
      "JavaScript",
      "Axios",
      "Chakra-UI",
      "React Icons",
    ],
    githubUrl:
      "https://github.com/Hashal890/multilingual-text-and-speech-translator",
    liveUrl: "https://multilingual-text-and-speech-translator.vercel.app/",
    image:
      "https://github.com/Hashal890/multilingual-text-and-speech-translator/raw/main/screenshots/home-page-result.jpg",
  },
  {
    id: 15,
    title: "Products Transaction App",
    description:
      "Developed a comprehensive single-page MERN application showcasing a product transactions table alongside monthly transaction statistics. It includes dynamic visual elements such as a bar chart illustrating price ranges and item counts for the chosen month, and a pie chart presenting unique categories with corresponding item counts.",
    techStack: [
      "MongoDB",
      "Mongoose",
      "Express.js",
      "React.js",
      "Context API",
      "JavaScript",
      "Axios",
      "Chakra-UI",
      "React Icons",
    ],
    githubUrl: "https://github.com/Hashal890/products-transaction",
    liveUrl: "https://products-transaction-statistics-frontend.vercel.app/",
    image:
      "https://github.com/Hashal890/products-transaction/raw/main/screenshots/product-transactions-table.jpg",
  },
  {
    id: 3,
    title: "Nature's Basket Website Clone",
    description:
      "Developed a clone of Nature's Basket website, India's leading food destination, featuring physical retail stores, an online portal, and a mobile application. Completed as an individual project within a 5-day timeframe.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "WebScrapping",
      "Chakra-UI",
      "Bootstrap",
    ],
    githubUrl: "https://github.com/Hashal890/Nature-Basket-Clone",
    liveUrl: "https://naturesbasketclone.vercel.app/",
    image:
      "https://github.com/Hashal890/Nature-Basket-Clone/raw/main/src/Assets/homePage.png",
  },
  {
    id: 9,
    title: "Youtube App",
    description:
      "I built a YouTube app with key features: search and watch videos, random video suggestions, and a responsive layout for seamless viewing.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Youtube-App",
    liveUrl: "https://youtube-webapp-project.netlify.app/",
    image:
      "https://github.com/Hashal890/Youtube-App/raw/main/assets/searchResults.png",
  },
  {
    id: 11,
    title: "Space Tourism Website",
    description:
      "Developed as a solution for the Space Tourism Website challenge from Frontend Mentor, this project offers users information about space tours. It allows users to view the optimal layout for each page based on their device's screen size, experience hover states for interactive elements, and toggle between tabs to explore new information.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Space-tourism-website",
    liveUrl: "https://space-tourism-website-projectt.netlify.app/",
    image:
      "https://github.com/Hashal890/Space-tourism-website/raw/main/assets/solution/homePage.png",
  },
  {
    id: 6,
    title: "Kimaye Website Clone",
    description:
      "I collaborated on a project to clone the Kimaye website, which focuses on delivering safe, high-quality fruits to your doorstep. Our group embraced the cooperative and partnership principles at the core of Kimaye's values.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/Team-Kimayi",
    liveUrl: "https://kimaye-website-clone-project.netlify.app/",
    image:
      "https://github.com/Hashal890/Kimaye-Clone/raw/main/assets/homePage.png",
  },
  {
    id: 7,
    title: "Food Recipe Book",
    description:
      "Discover and save your favorite food recipes with ease! Our platform allows you to explore a variety of recipes and save them to your personal profile for quick access. Start cooking up a storm today!",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Redux",
      "Redux Thunk",
      "Axios",
      "Chakra-UI",
      "React Icons",
    ],
    githubUrl: "https://github.com/Hashal890/recipe-book",
    liveUrl: "https://recipe-book-rosy.vercel.app/",
    image:
      "https://github.com/Hashal890/recipe-book/raw/main/src/assets/homePage.png",
  },
  {
    id: 10,
    title: "Star Wars Characters Information",
    description:
      "Developed a Star Wars character search app, enabling users to easily find and explore details of their favorite characters from the Star Wars universe. Search, discover, and learn about iconic characters with ease!",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Star-Wars",
    liveUrl: "https://star-wars-characters-information.netlify.app/",
    image:
      "https://github.com/Hashal890/Star-Wars/raw/main/assets/searchResults.png",
  },
  {
    id: 12,
    title: "Weather App",
    description:
      "Developed a weather application with versatile features: search any city for current weather, forecast for the next 7 days, and live location-based weather data. The app boasts a responsive layout for seamless use across devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Weather-App",
    liveUrl: "https://weather-webapp-project.netlify.app/",
    image:
      "https://github.com/Hashal890/Weather-App/raw/main/assets/homeOnePage.png",
  },
  {
    id: 2,
    title: "Bitrix-24 Website Clone",
    description:
      "Created a Bitrix24 website clone, offering a unified workspace for customer relationship management, project management, and collaboration. Enhance your business management with this all-in-one solution.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Express.js",
      "Redux",
      "MongoDB",
      "Chakra-UI",
    ],
    githubUrl: "https://github.com/Hashal890/Bitrix24-Clone",
    liveUrl: "https://betrix24-clone.vercel.app/",
    image:
      "https://github.com/Hashal890/Bitrix24-Clone/raw/main/frontend/src/assets/homePage.png",
  },
  {
    id: 4,
    title: "Zoom Car Website Clone",
    description:
      "Built a clone of the Zoomcar website, an Indian car sharing platform founded in 2013, operating in 34+ cities. Developed using JavaScript, React, Chakra-UI and other technologies. Allows users to rent cars for short periods, providing a seamless booking experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Chakra-UI", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/Zoom-Car-Clone",
    liveUrl: "https://zoomcarclone.vercel.app/",
    image:
      "https://github.com/Hashal890/Zoom-Car-Clone/raw/main/src/Assets/homePage.png",
  },
  {
    id: 5,
    title: "Dot & Key Website Clone",
    description:
      "Created a clone of the Dot & Key website, a skincare brand emphasizing individuality. Offering advanced products tailored to unique lifestyle needs, this project replicates their innovative approach to skincare.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "WebScrapping",
      "Bootstrap",
      "Slick Slider",
      "Jquery",
    ],
    githubUrl: "https://github.com/Hashal890/dot-key-clone",
    liveUrl: "https://dot-and-key-website-clone-project.netlify.app/",
    image:
      "https://github.com/Hashal890/dot-key-clone/raw/main/assets/homePage.png",
  },
  {
    id: 8,
    title: "Teerex T-shirts Store",
    description:
      "Developed a user-friendly web app enabling customers to browse, add, and purchase t-shirts from a catalog. Seamlessly integrates shopping cart functionality for a smooth checkout experience.",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Chakra-UI",
      "Context API",
    ],
    githubUrl: "https://github.com/Hashal890/TeeRex-Store",
    liveUrl: "https://teerexstore.vercel.app/",
    image:
      "https://github.com/Hashal890/TeeRex-Store/raw/main/src/Assets/homePage.png",
  },
  {
    id: 13,
    title: "Food App",
    description:
      "Developed a food app with search, recipe details, recipe of the day, random recipes, login/signup, debouncing, and a responsive layout. Explore delicious recipes effortlessly!",
    techStack: ["HTML", "CSS", "JavaScript", "Debouncing"],
    githubUrl: "https://github.com/Hashal890/Food-App",
    liveUrl: "https://food-web-app-project.netlify.app/",
    image:
      "https://github.com/Hashal890/Food-App/raw/main/assets/recipieOfDay.png",
  },
  {
    id: 14,
    title: "Movies Hotstar Search Bar",
    description:
      "Developed a Hotstar search bar replica with advanced features: search for any movie, access trending/popular movies, and implemented debouncing for efficient searches. The project boasts a responsive layout for seamless user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Hotstar-Search-Bar",
    liveUrl: "https://hotstar-website-searchbar-project.netlify.app/",
    image:
      "https://github.com/Hashal890/Hotstar-Search-Bar/raw/main/assets/trendingMovies.png",
  },
];

export const EducationDetails = [
  {
    id: 1,
    title: "Birla Institute of Technology and Science, Pilani",
    role: "Bachelor in Computer Science",
    marks: null,
    period: "Jul 2023 – Present",
  },
  {
    id: 2,
    title: "Masai School, Bangalore",
    role: "Full Stack Web Development",
    marks: null,
    period: "Mar 2022 – Nov 2022",
  },
  {
    id: 3,
    title: "Government Polytechnic, Nashik",
    role: "Diploma in Mechanical Engineering",
    marks: null,
    period: "Aug 2018 – Sep 2021",
  },
];

export const ExperienceDetails = [
  {
    id: 1,
    company: "Masai School",
    title: "Full Stack Web Developer",
    location: "Bangalore, India",
    roles: [
      "Experienced Full Stack Web Developer with 1 year of hands-on experience in MERN stack, JavaScript, TypeScript, Next.js, and Redux.",
      "Led teams on multiple projects, successfully building clones of existing websites and delivering high-quality solutions.",
      "Proficient in developing both group and individual projects, demonstrating strong skills in full-stack web development.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.JS",
      "Node.JS",
      "Express.JS",
      "Next.JS",
      "Redux",
      "Context API",
      "MongoDB",
      "Rest API",
      "Web Scraping",
      "Chakra-UI",
      "Material UI",
      "Bootstrap",
      "Git",
      "Figma",
    ],
    period: "Mar 2022 - Nov 2022",
  },
  {
    id: 2,
    company: "Tata Motors",
    location: "Pune, India",
    title: "Mechanical Engineer Trainee - Assistant Supervisor",
    roles: [
      "Transitioned from Machine Operator to Assistant Supervisor at Tata Motors' Pune plant, overseeing operations for Nexon EV car production.",
      "Supervised and coordinated daily activities, ensuring adherence to production schedules and quality standards.",
    ],
    skills: [
      "Leadership",
      "Team Collaboration",
      "Problem Solving",
      "Presentations",
    ],
    period: "Sep 2021 – Mar 2022",
  },
];

export const Statistics = [
  {
    id: 1,
    count: "1200+",
    title: "Hours",
    subject: "of Full Stack Coding",
  },
  {
    id: 2,
    count: "800+",
    title: "DSA",
    subject: "Problems",
  },
  {
    id: 3,
    count: "20+",
    title: "Projects",
    subject: "Done",
  },
  {
    id: 4,
    count: "100+",
    title: "Hours",
    subject: "of Soft Skills Sessions",
  },
];

export const ContactDetails = [
  {
    id: 1,
    icon: <BsTelephoneFill />,
    link: "tel:+8329729568",
    name: "+91 8329729568",
  },
  {
    id: 2,
    icon: <BsWhatsapp />,
    link: "https://api.whatsapp.com/send/?phone=8329729568&text=Hey+Harshal%21+I+just+checked+out+your+website%2C+and+I+would+love+to+discuss+about+a+project+with+you&app_absent=0&lang=en",
    name: "+91 8329729568",
  },
  {
    id: 3,
    icon: <BsGithub />,
    link: "https://github.com/hashal890",
    name: "hashal890",
  },
  {
    id: 4,
    icon: <HiOutlineMail />,
    link: "mailto: pardeshiharshal90@gmail.com",
    name: "pardeshiharshal90@gmail.com",
  },
  {
    id: 5,
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/harshalpardeshi/",
    name: "harshalpardeshi",
  },
  // {
  // id: 6,
  //   icon: <BsTwitter />,
  //   link: "https://twitter.com/harshal258/",
  //   name: "harshal258",
  // },
  // {
  // id: 7,
  //   icon: <BsInstagram />,
  //   link: "https://www.instagram.com/harshalpardeshi_hp/",
  //   name: "harshalpardeshi_hp",
  // },
];

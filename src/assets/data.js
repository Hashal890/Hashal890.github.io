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
  SiNetlify,
  SiVercel,
  SiRailway,
  SiJson,
  SiMui,
  SiFastify,
  SiAxios,
  SiPostman,
  SiGooglecloud,
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
import { TbBrandNextjs } from "react-icons/tb";
import {
  BsTelephoneFill,
  BsWhatsapp,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdApi, MdDataArray, MdHttp } from "react-icons/md";

export const SkillsList = [
  // --- Core Programming Languages ---
  {
    id: 1,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <SiJavascript />,
    color: "yellow.400",
  },
  {
    id: 2,
    name: "TypeScript",
    link: "https://www.typescriptlang.org/",
    icon: <SiTypescript />,
    color: "blue.500",
  },
  {
    id: 3,
    name: "JSON",
    link: "https://www.json.org/",
    icon: <SiJson />,
    color: "black.500",
  },
  // --- Frontend Technologies ---
  {
    id: 4,
    name: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: <FaHtml5 />,
    color: "orange.500",
  },
  {
    id: 5,
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: <FaCss3Alt />,
    color: "blue.500",
  },
  {
    id: 6,
    name: "React.js",
    link: "https://reactjs.org/",
    icon: <FaReact />,
    color: "blue.400",
  },
  {
    id: 7,
    name: "Redux",
    link: "https://redux.js.org/",
    icon: <SiRedux />,
    color: "purple.500",
  },
  {
    id: 8,
    name: "Next.js",
    link: "https://nextjs.org/",
    icon: <TbBrandNextjs />,
    color: "gray.700",
  },
  {
    id: 9,
    name: "Context API",
    link: "https://react.dev/reference/react/createContext/",
    icon: <MdDataArray />,
    color: "cyan.600",
  },
  {
    id: 10,
    name: "Bootstrap",
    link: "https://getbootstrap.com/",
    icon: <SiBootstrap />,
    color: "purple.400",
  },
  {
    id: 11,
    name: "Chakra UI",
    link: "https://chakra-ui.com/",
    icon: <SiChakraui />,
    color: "teal.400",
  },
  {
    id: 12,
    name: "Material-UI",
    link: "https://mui.com/material-ui/",
    icon: <SiMui />,
    color: "blue.600",
  },
  // --- Backend Technologies & APIs ---
  {
    id: 13,
    name: "Node.js",
    link: "https://nodejs.org/",
    icon: <SiNodedotjs />,
    color: "green.600",
  },
  {
    id: 14,
    name: "Fastify",
    link: "https://fastify.dev/",
    icon: <SiFastify />,
    color: "gray.700",
  },
  {
    id: 15,
    name: "Express.js",
    link: "https://expressjs.com/",
    icon: <SiExpress />,
    color: "gray.500",
  },
  {
    id: 16,
    name: "Axios",
    link: "https://axios-http.com/docs/intro/",
    icon: <SiAxios />,
    color: "purple.500",
  },
  {
    id: 17,
    name: "REST API",
    link: "https://restfulapi.net/",
    icon: <MdApi />,
    color: "green.500",
  },
  {
    id: 18,
    name: "HTTP",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/",
    icon: <MdHttp />,
    color: "gray.600",
  },
  // --- Databases & ORMs ---
  {
    id: 19,
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    icon: <SiMongodb />,
    color: "green.500",
  },
  {
    id: 20,
    name: "Web Scraping",
    link: "https://webscraper.io/",
    icon: <FaRegFileCode />,
    color: "blue.300",
  },
  // --- Tools & Platforms ---
  {
    id: 21,
    name: "Git",
    link: "https://git-scm.com/",
    icon: <FaGitAlt />,
    color: "red.500",
  },
  {
    id: 22,
    name: "GitHub",
    link: "https://github.com/",
    icon: <FaGithub />,
    color: "gray.700",
  },
  {
    id: 23,
    name: "VS Code",
    link: "https://code.visualstudio.com/",
    icon: <VscCode />,
    color: "blue.600",
  },
  {
    id: 24,
    name: "Postman",
    link: "https://www.postman.com/",
    icon: <SiPostman />,
    color: "orange.400",
  },
  // --- Cloud & Hosting ---
  {
    id: 25,
    name: "Google Cloud Storage Integration",
    link: "https://cloud.google.com/integration-connectors/docs/connectors/cloudstorage/configure/",
    icon: <SiGooglecloud />,
    color: "blue.500",
  },
  {
    id: 26,
    name: "Heroku",
    link: "https://devcenter.heroku.com/",
    icon: <SiHeroku />,
    color: "purple.600",
  },
  {
    id: 27,
    name: "Netlify",
    link: "https://app.netlify.com/",
    icon: <SiNetlify />,
    color: "teal.500",
  },
  {
    id: 28,
    name: "Vercel",
    link: "https://vercel.com/",
    icon: <SiVercel />,
    color: "gray.600",
  },
  {
    id: 29,
    name: "Railway",
    link: "https://railway.app/",
    icon: <SiRailway />,
    color: "gray.600",
  },
  // --- Other / General Skills ---
  {
    id: 30,
    name: "Data Structures & Algorithms",
    link: "https://www.geeksforgeeks.org/data-structures/",
    icon: <FaLaptopCode />,
    color: "red.500",
  },
];

export const NavbarLinks = [
  { id: 1, to: "home", name: "Home" },
  { id: 2, to: "about", name: "About Me" },
  { id: 4, to: "education", name: "Education" },
  { id: 3, to: "experience", name: "Experience" },
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
      "https://raw.githubusercontent.com/Hashal890/Exclusive-Yoox-Clone/main/assets/mensProductsPage.png",
  },
  {
    id: 2,
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
      "https://raw.githubusercontent.com/Hashal890/timezone-convertor-and-scheduler/main/src/assets/project-demonstration.gif",
  },
  {
    id: 3,
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
      "https://raw.githubusercontent.com/Hashal890/multilingual-text-and-speech-translator/main/screenshots/home-page-result.jpg",
  },
  {
    id: 18,
    title: "AI-Powered Content Summarization & Analysis Tool",
    description:
      "This project demonstrates an AI-powered content summarization and analysis tool using Next.js for the front-end and Node.js (Express.js) for the back-end. The application allows users to upload text content, receive a summarized version with key insights, and display these insights clearly. Optionally, the project can be extended to include data visualizations and user authentication.",
    techStack: [
      "Next.js",
      "Express.js",
      "JavaScript",
      "Multer",
      "Natural",
      "Sentiment",
      "Node Summarizer",
      "Axios",
      "Chakra-UI",
      "React Icons",
      "CSS",
      "HTML",
    ],
    githubUrl:
      "https://github.com/Hashal890/ai-content-summarization-and-analysis-tool",
    liveUrl:
      "https://ai-content-summarization-and-analysis-tool-frontend.vercel.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/ai-content-summarization-and-analysis-tool/main/project-demonstration/image-preview.gif",
  },
  {
    id: 4,
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
      "https://raw.githubusercontent.com/Hashal890/products-transaction/main/screenshots/product-transactions-table.jpg",
  },
  {
    id: 5,
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
      "https://raw.githubusercontent.com/Hashal890/Nature-Basket-Clone/main/src/Assets/homePage.png",
  },
  {
    id: 6,
    title: "Youtube App",
    description:
      "Built a YouTube app with key features: search and watch videos, random video suggestions, and a responsive layout for seamless viewing.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Youtube-App",
    liveUrl: "https://youtube-webapp-project.netlify.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/Youtube-App/main/assets/searchResults.png",
  },
  {
    id: 7,
    title: "Space Tourism Website",
    description:
      "Developed as a solution for the Space Tourism Website challenge from Frontend Mentor, this project offers users information about space tours. It allows users to view the optimal layout for each page based on their device's screen size, experience hover states for interactive elements, and toggle between tabs to explore new information.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Space-tourism-website",
    liveUrl: "https://space-tourism-website-projectt.netlify.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/Space-tourism-website/main/assets/solution/homePage.png",
  },
  {
    id: 8,
    title: "Kimaye Website Clone",
    description:
      "Collaborated on a project to clone the Kimaye website, which focuses on delivering safe, high-quality fruits to your doorstep. Our group embraced the cooperative and partnership principles at the core of Kimaye's values.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/Team-Kimayi",
    liveUrl: "https://kimaye-website-clone-project.netlify.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/Kimaye-Clone/main/assets/homePage.png",
  },
  {
    id: 9,
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
      "https://raw.githubusercontent.com/Hashal890/recipe-book/main/src/assets/homePage.png",
  },
  {
    id: 10,
    title: "Weather App",
    description:
      "Developed a weather application with versatile features: search any city for current weather, forecast for the next 7 days, and live location-based weather data. The app boasts a responsive layout for seamless use across devices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Weather-App",
    liveUrl: "https://weather-webapp-project.netlify.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/Weather-App/main/assets/homeOnePage.png",
  },
  {
    id: 11,
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
      "https://raw.githubusercontent.com/Hashal890/Bitrix24-Clone/main/frontend/src/assets/homePage.png",
  },
  {
    id: 12,
    title: "Zoom Car Website Clone",
    description:
      "Built a clone of the Zoomcar website, an Indian car sharing platform founded in 2013, operating in 34+ cities. Developed using JavaScript, React, Chakra-UI and other technologies. Allows users to rent cars for short periods, providing a seamless booking experience.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Chakra-UI", "Bootstrap"],
    githubUrl: "https://github.com/Hashal890/Zoom-Car-Clone",
    liveUrl: "https://zoomcarclone.vercel.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/Zoom-Car-Clone/main/src/Assets/homePage.png",
  },
  {
    id: 13,
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
      "https://raw.githubusercontent.com/Hashal890/fruits-vegetables-platform/main/assets/homePage.png",
  },
  {
    id: 14,
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
      "https://raw.githubusercontent.com/Hashal890/TeeRex-Store/main/src/Assets/homePage.png",
  },
  {
    id: 15,
    title: "Food App",
    description:
      "Developed a food app with search, recipe details, recipe of the day, random recipes, login/signup, debouncing, and a responsive layout. Explore delicious recipes effortlessly!",
    techStack: ["HTML", "CSS", "JavaScript", "Debouncing"],
    githubUrl: "https://github.com/Hashal890/Food-App",
    liveUrl: "https://food-web-app-project.netlify.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/Food-App/main/assets/recipieOfDay.png",
  },
  {
    id: 16,
    title: "Movies Hotstar Search Bar",
    description:
      "Developed a Hotstar search bar replica with advanced features: search for any movie, access trending/popular movies, and implemented debouncing for efficient searches. The project boasts a responsive layout for seamless user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Hotstar-Search-Bar",
    liveUrl: "https://hotstar-website-searchbar-project.netlify.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/Hotstar-Search-Bar/main/assets/trendingMovies.png",
  },
  {
    id: 17,
    title: "Star Wars Characters Information",
    description:
      "Developed a Star Wars character search app, enabling users to easily find and explore details of their favorite characters from the Star Wars universe. Search, discover, and learn about iconic characters with ease!",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Hashal890/Star-Wars",
    liveUrl: "https://star-wars-characters-information.netlify.app/",
    image:
      "https://raw.githubusercontent.com/Hashal890/Star-Wars/main/assets/searchResults.png",
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
    company: "Smart Ship© Hub",
    title: "Software Development Engineer I",
    location: "Pune, India",
    roles: [
      "Designed and maintained scalable backend services using Drizzle ORM, replacing raw SQL queries to improve code readability, type safety, and long-term maintainability.",
      "Implemented JWT-based authentication across microservices to replace legacy session-based logic, enabling secure, stateless communication and enhanced user authorization handling.",
      "Integrated Google Cloud Storage into backend systems to support efficient, secure file upload and download operations, improving storage scalability and reliability.",
      "Developed real-time data pipelines using WebSockets for streaming live updates to clients, and contributed to a multi-tenant architecture enabling data isolation across users.",
      "Enhanced service reliability by writing unit and integration tests using Jest, and created internal documentation with practical examples to streamline backend test coverage.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Fastify",
      "MySQL",
      "Drizzle ORM",
      "Google Cloud Platform (GCP)",
      "Google Cloud Storage Integration",
      "Git",
      "Jest",
      "Next.js",
      "HTML",
      "Bootstrap",
      "MongoDB",
      "HTML5",
      "Docker",
      "MERN Stack",
      "Redux.js",
      "Cascading Style Sheets (CSS)",
      "React.js",
      "Express.js",
    ],
    period: "Aug 2024 - Current",
  },
  {
    id: 2,
    company: "Tata Motors",
    location: "Pune, India",
    title: "ME Trainee - Assistant Supervisor",
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

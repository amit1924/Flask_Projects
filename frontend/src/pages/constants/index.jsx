import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../../assets/project1.jpeg";
import projectImage2 from "../../assets/project2.jpeg";
import projectImage3 from "../../assets/project3.jpeg";
import projectImage4 from "../../assets/project4.jpeg";
import projectImage5 from "../../assets/project5.jpeg";
import projectImage6 from "../../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Amit Kumar",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate fullstack developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/user/personal-portfolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "My name is Amit Kumar, and I am a fresher full-stack developer passionate about building interactive web applications and solving complex problems. I have a solid foundation in both frontend and backend technologies.",
  "I recently completed my engineering degree in electrical engineering, where I developed a strong interest in software development. Throughout my studies, I have honed my skills in HTML, CSS, JavaScript, and frameworks like React.",
  "I am eager to collaborate with innovative teams and contribute to projects that create impactful user experiences. I am constantly learning and adapting to new technologies to enhance my skill set and stay up-to-date with industry trends.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "Fresher",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "Fresher",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "Fresher",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "Fresher",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "Fresher",
  },
];

export const EXPERIENCES = [
  {
    title: "Intern Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "June 2023 - August 2023",
    description:
      "As an intern frontend developer, I contributed to the development of web applications using React and JavaScript. I collaborated with the design team to implement responsive user interfaces and participated in code reviews, learning best practices for frontend development.",
  },
  {
    title: "Project: E-commerce Website",
    company: "Personal Project",
    duration: "January 2023 - May 2023",
    description:
      "Developed a full-stack e-commerce application using React for the frontend and Node.js for the backend. Implemented features such as user authentication, product listing, and a shopping cart. This project honed my skills in building responsive and user-friendly web applications.",
  },
  {
    title: "Academic Projects",
    company: "Engineering College",
    duration: "2019 - 2022",
    description:
      "Worked on various academic projects that included building a personal portfolio website, a blog platform using MERN stack, and a weather application using APIs. Gained hands-on experience in coding, debugging, and collaborating in teams.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Electrical Enginnering",

    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript,Python frameworks.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },

  {
    href: "https://www.instagram.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/amit1924?tab=repositories",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

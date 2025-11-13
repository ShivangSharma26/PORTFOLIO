import {
  javascript,
  typescript,
  reactjs,
  nodejs,
  python,
  cpp,
  keras,
  opencv,
  flask,
  tensorflow,
  firebase,
  cabshare,
  deepfake,
  gesture,
} from "../assets";

import { Github, Linkedin, Code2, BookText, Award, Mail, ExternalLink } from "lucide-react";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "timeline",
    title: "Timeline",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: BookText,
    description: "Building conversational agents and robust RAG systems using LLMs, LangChain, and Computer Vision.",
  },
  {
    title: "Backend Developer",
    icon: Code2,
    description: "Engineering scalable microservices and cloud infrastructure with Node.js, Docker, and AWS ECS.",
  },
  {
    title: "DSA & CP Enthusiast",
    icon: Award,
    description: "Solving complex algorithmic problems with 400+ LeetCode solutions and top ranks ⭐ in coding contests.",
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Keras",
    icon: keras,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const projects = [
  {
    name: "Cabshare-NITR",
    description:
      "A platform for NIT Rourkela students to find and share cab rides, reducing travel costs and promoting community transportation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: cabshare,
    source_code_link: "https://github.com/ShivangSharma26",
    live_demo_link: "https://github.com/ShivangSharma26",
  },
  {
    name: "Deepfake Detection",
    description:
      "An ML-powered system that detects manipulated videos using convolutional neural networks, with 94% accuracy on test datasets.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: deepfake,
    source_code_link: "https://github.com/ShivangSharma26",
    live_demo_link: "https://github.com/ShivangSharma26",
  },
  {
    name: "Gesture-Based Voice Control",
    description:
      "An accessibility tool that converts hand gestures to voice commands, enabling non-verbal communication for differently-abled users.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "keras",
        color: "green-text-gradient",
      },
      {
        name: "mediapipe",
        color: "pink-text-gradient",
      },
    ],
    image: gesture,
    source_code_link: "https://github.com/ShivangSharma26",
    live_demo_link: "https://github.com/ShivangSharma26",
  },
];

const testimonials = [
  {
    content:
      "Shivang demonstrated exceptional problem-solving skills during our research collaboration at Iowa State University.",
    name: "Dr. Sarah Johnson",
    designation: "Research Mentor",
    company: "Iowa State University",
  },
  {
    content:
      "One of our most dedicated members in the Entrepreneurship Cell, bringing technical expertise and leadership to multiple projects.",
    name: "Rohan Mehta",
    designation: "President",
    company: "E-Cell, NIT Rourkela",
  },
  {
    content:
      "His ability to quickly understand complex algorithms and implement them efficiently stood out during the AlgoUniversity bootcamp.",
    name: "Ankit Gupta",
    designation: "Lead Instructor",
    company: "AlgoUniversity",
  },
];

const experiences = [
  {
    title: "B.Tech with Minor in Computer Science",
    company_name: "NIT Rourkela",
    iconBg: "#151530",
    date: "2023 - 2027",
    points: [
      "B.Tech CGPA: 8.2/10",
      "Minor in Computer Science & Engineering (CGPA: 9.0/10)",
      "Member of E-Cell and Coding Club",
      "Active participant in hackathons and coding competitions"
    ],
  },
  {
    title: "AI/ML Research Intern",
    company_name: "IIT Gandhinagar",
    iconBg: "#151530",
    date: "May 2025 - July 2025",
    points: [
      "Worked on computer vision applications for autonomous systems",
      "Implemented deep learning models for object detection and tracking",
      "Collaborated with a team of researchers on real-time processing algorithms",
      "Presented findings at the department's research symposium"
    ],
  },
  {
    title: "Selected for REU-TRACE Program",
    company_name: "Iowa State University",
    iconBg: "#151530",
    date: "May 2025 - July 2025",
    points: [
      "Selected for the prestigious REU-TRACE Program in Translational AI",
      "Offered research position at Translational AI Center, Ames, Iowa",
      "Program focused on AI applications in Engineering",
      "Full funding offered with accommodation at Frederickson Court Apartments"
    ],
  },
  {
    title: "National Cadet Corps (NCC)",
    company_name: "NCC India",
    iconBg: "#151530",
    date: "2023 - Present",
    points: [
      "Participated in national camps and training programs",
      "Developed leadership and team-building skills",
      "Organized community service activities",
      "Received commendation for exemplary service"
    ],
  },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/ShivangSharma26",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/shivang-sharma-9324512a7/",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/SHIVANG26/",
    icon: Code2,
  },
  {
    name: "Email",
    url: "mailto:iamluckysharma99@gmail.com",
    icon: Mail,
  },
];

export { services, technologies, projects, testimonials, experiences, socialLinks };
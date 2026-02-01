/* ===============================
   ICON IMPORTS
================================ */

import { percent } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Briefcase,
  Laptop,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

/* ===============================
   SKILLS CATEGORY
================================ */

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        level: 90,
        color: "bg-cyan-500",
        icon: "devicon-react-original colored",
        description: "Building interactive UIs with modern React patterns and hooks.",
      },
      {
        name: "JavaScript",
        level: 88,
        color: "bg-yellow-400",
        icon: "devicon-javascript-plain colored",
        description: "Writing clean ES6+ code for dynamic behavior, async operations, and browser-based logic.",
      },
      {
        name: "HTML5",
        level: 95,
        color: "bg-orange-500",
        icon: "devicon-html5-plain colored",
        description: "Structuring semantic, SEO-friendly layouts with accessibility and performance in mind.",
      },
      {
        name: "CSS3",
        level: 92,
        color: "bg-blue-500",
        icon: "devicon-css3-plain colored",
        description: "Styling responsive layouts using modern CSS features like Flexbox, Grid, and animations.",
      },
      {
        name: "Tailwind CSS",
        level: 90,
        color: "bg-teal-500",
        icon: "devicon-tailwindcss-original colored",
        description: "Rapid UI development using utility-first CSS framework.",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        level: 90,
        color: "bg-red-500",
        icon: "devicon-java-plain colored",
        description: "Implementing object-oriented solutions, business logic, and backend workflows using Java.",
      },
      {
        name: "Spring Boot",
        level: 88,
        color: "bg-green-600",
        icon: "devicon-spring-original colored",
        description: "Building RESTful APIs, handling authentication, and managing microservice-based architectures.",
      },
      {
        name: "Node.js",
        level: 80,
        color: "bg-green-500",
        icon: "devicon-nodejs-plain colored",
        description: "Creating lightweight backend services and APIs using event-driven, non-blocking architecture.",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        level: 85,
        color: "bg-blue-600",
        icon: "devicon-mysql-plain colored",
        description: "Designing relational schemas, optimizing queries, and maintaining data integrity.",
      },
      {
        name: "MongoDB",
        level: 80,
        color: "bg-green-500",
        icon: "devicon-mongodb-plain colored",
        description: "Handling NoSQL data models with flexible schemas for scalable applications.",
      },
      {
        name: "Oracle",
        level: 75,
        color: "bg-red-600",
        icon: "devicon-oracle-original colored",
        description: "Working with enterprise-grade databases, complex queries, and transactional data systems.",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      {
        name: "Git",
        level: 90,
        color: "bg-orange-500",
        icon: "devicon-git-plain colored",
        description: "Distributed version control system for tracking changes.",
      },
      {
        name: "GitHub",
        level: 90,
        color: "bg-gray-700",
        icon: "devicon-github-original colored",
        description: "Managing repositories, pull requests, and collaborative project workflows.",
      },
      {
        name: "Postman",
        level: 85,
        color: "bg-orange-600",
        icon: "devicon-postman-plain colored",
        description: "Testing, documenting, and validating REST APIs during development and debugging.",
      },
      {
        name: "VS Code",
        level: 95,
        color: "bg-blue-600",
        icon: "devicon-vscode-plain colored",
        description: "Primary development environment with extensions for productivity and debugging.",
      },
      {
        name: "Eclipse",
        level: 80,
        color: "bg-purple-600",
        icon: "devicon-eclipse-plain colored",
        description: "IDE for Java and enterprise application development with strong tooling support.",
      },
    ],
  },
];

// export const STATS = [
//   { number: "3+", label: "Years Experience" },
//   { number: "50+", label: "Projects Completed" },
//   { number: "20+", label: "Happy Clients" },
//   { number: "100%", label: "Job Success" },
// ];


/* ===============================
   TECH STACK TAGS
================================ */

export const TECH_STACK = [
  "Java",
  "Spring Boot",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MongoDB",
  "MySQL",
  "Oracle",
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "Eclipse",
];

/* ===============================
   STATS
================================ */

export const STATS = [
  { number: "10+", label: "Projects Completed" },
  { number: "2+", label: "Internships" },
  { number: "15+", label: "Technologies Used" },
  { number: "100%", label: "Learning Mindset" },
];

/* ===============================
   PROJECTS
================================ */

export const PROJECTS = [
  {
    id: 1,
    title: "Eventique",
    description:
      "A full-stack event management system with event creation, registrations, admin dashboard, and reporting.",
    image: "/Eventique.png",
    tags: ["Java", "Hibernate", "JSP", "Servlets", "Oracle SQL"],
    duration: "May 2025 – Jun 2025",
    liveUrl: "",
    githubUrl: "https://github.com/anikethiraskar/EventManagement",
    featured: true,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "PlayMerce",
    description:
      "A full-stack sports platform combining e-commerce for sports kits, online turf booking, and tournament management.",
    image: "/PlayMerce.png",
    tags: ["Angular", "Spring Boot", "MySQL", "SaaS"],
    duration: "Jun 2025 – Jul 2025",
    liveUrl: "",
    githubUrl: "https://github.com/anikethiraskar/SportsHub",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 3,
    title: "NeighbourEats",
    description:
      "A full-stack platform connecting local home chefs with customers, featuring real-time order tracking, secure payments, and personalized meal recommendations.",
    image: "/NeighbourEats.jpeg",
    tags: ["React", "Spring Boot", "MySQL"],
    duration: "Jan 2025 – May 2025",
    liveUrl: "",
    githubUrl: "https://github.com/anikethiraskar/NeigbhourEats",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Admission Portal",
    description:
      "A web-based admission management system that streamlines student registration, application tracking, and administrative approval workflows.",
    image: "/AdmissionPortal.png",
    tags: ["Java", "JSP", "Servlets", "Hibernate", "MySQL"],
    duration: "Feb 2025 – Mar 2025",
    liveUrl: "",
    githubUrl: "https://github.com/anikethiraskar/Admission_Portal",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 5,
    title: "ShopX",
    description:
      "A modern, responsive e-commerce web application with user authentication, product browsing, cart management, and order processing.",
    image: "/ShopX.png",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    duration: "Dec 2024 – Jan 2025",
    liveUrl: "",
    githubUrl: "  https://github.com/anikethiraskar/EcommWeb",
    featured: false,
    category: "Full Stack",
  },
];



/* ===============================
   JOURNEY / TIMELINE
================================ */

export const JOURNEY_STEPS = [
  {
    year: "2020 – 2022",
    title: "Diploma in Computer Technology",
    company: "Government Polytechnic",
    description:
      "Completed Diploma in Computer Technology, learning programming fundamentals, databases, operating systems, and core computer concepts.",
    icon: Laptop,
    color: "bg-cyan-500",
  },
  {
    year: "2022 – 2025",
    title: "Bachelor of Engineering (B.E.)",
    company: "Computer Science • CGPA 8.9",
    description:
      "Completed Bachelor's degree in Computer Science with strong academic performance and hands-on full-stack development experience.",
    icon: GraduationCap,
    color: "bg-purple-500",
  },
  {
    year: "2025",
    title: "Full-Stack Developer Intern",
    company: "SETTribe LLP",
    description:
      "Worked as a Full-Stack Developer Intern, developing REST APIs using Java and Spring Boot and integrating frontend with backend systems.",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    year: "2025",
    title: "Full-Stack Developer (Entry Level)",
    company: "Open to Opportunities",
    description:
      "Actively seeking full-time opportunities as a Full-Stack Developer, focused on building scalable and high-quality web applications.",
    icon: Code2,
    color: "bg-emerald-500",
  },
];


/* ===============================
   PASSIONS
================================ */

export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Designing interfaces that users love to interact with",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Breaking complex problems into simple, effective solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always improving skills and exploring new technologies",
  },
];

/* ===============================
   SOCIAL LINKS
================================ */

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/anikethiraskar",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com/in/aniket-hiraskar",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    url: "https://twitter.com/your-twitter-handle",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:anikethiraskar2002@gmail.com",
  },
];

/* ===============================
   CONTACT INFO
================================ */

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
  },
  {
    icon: Mail,
    label: "Email",
    value: "anikethiraskar2002@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93225 75574",
  },
];
export const WORK_EXPERIENCE = [
  {
    role: "Software Development Intern",
    company: "Vianera Technologies",
    duration: "Sep 2025 – Dec 2025",
    location: "India",
    description:
      "Worked as a Full-Stack Development Intern, contributing to the design, development, and optimization of scalable web applications.",
    responsibilities: [
      "Developed RESTful APIs using Java and Spring Boot to handle business logic and data processing.",
      "Integrated frontend components with backend services to ensure seamless data flow.",
      "Worked with relational and NoSQL databases for efficient data storage and retrieval.",
      "Collaborated with team members in an Agile environment, participating in daily stand-ups and code reviews.",
      "Improved application performance and fixed bugs based on testing and feedback.",
    ],
    technologies: ["Java", "Spring Boot", "React", "MySQL", "Git"],
  },
  {
    role: "Full-Stack Developer(Intern)",
    company: "SETTribe LLP",
    duration: "Jan 2025 – July 2025",
    location: "India",
    description:
      "Completed a 20-week industrial training program focused on building real-world applications using modern web and mobile technologies.",
    responsibilities: [
      "Worked on multiple live projects including health management, donation platforms, and logistics systems.",
      "Built responsive user interfaces using React and React Native with a focus on UI/UX design.",
      "Implemented backend features using Node.js and MongoDB for scalable data handling.",
      "Collaborated with designers and backend developers to deliver production-ready features.",
      "Gained hands-on experience in version control, API integration, and deployment workflows.",
    ],
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Git",
    ],
  },
];
export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    institution: "Savitribai Phule Pune University",
    duration: "2022 – 2025",
    location: "Maharashtra, India",
    cgpa: "8.9 / 10",
    description:
      "Completed Bachelor's degree in Computer Science with a strong academic record and hands-on experience in full-stack development.",
    highlights: [
      "Graduated with a CGPA of 8.9, demonstrating strong academic consistency and technical understanding.",
      "Studied core subjects including Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks.",
      "Developed multiple academic and personal projects using Java, Spring Boot, React, and databases.",
      "Applied theoretical knowledge through internships and real-world project work.",
    ],
  },
  {
    degree: "Diploma in Computer Technology",
    institution: "Government Polytechnic",
    duration: "2020 – 2022",
    location: "Maharashtra, India",
    cgpa: "81%",
    description:
      "Completed a diploma program focused on computer fundamentals, programming, and practical technical skills.",
    highlights: [
      "Learned programming fundamentals using C, Java, and basic web technologies.",
      "Gained hands-on experience in database concepts and software development practices.",
      "Worked on academic mini-projects related to application development.",
      "Built a strong technical foundation for advanced computer science studies.",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) – Science",
    institution: "Maharashtra State Board",
    duration: "2018 – 2020",
    location: "Maharashtra, India",
    cgpa: "60%",
    description:
      "Completed higher secondary education with a focus on Science and Mathematics.",
    highlights: [
      "Built a strong foundation in Mathematics and logical problem-solving.",
      "Studied Physics and Chemistry, enhancing analytical and critical thinking skills.",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    duration: "2017 – 2018",
    location: "Maharashtra, India",
    cgpa: "75%",
    description:
      "Completed secondary education with emphasis on core academic fundamentals.",
    highlights: [
      "Developed early interest in computers and technology.",
      "Maintained consistent academic performance.",
    ],
  },
];
/* ===============================
   CERTIFICATIONS
================================ */
export const CERTIFICATIONS = [
  {
    id: 1,
    title: "SQL for Beginners: Learn SQL Using MySQL and Database Design",
    issuer: "Scaler Topics",
    issueDate: "June 2025",
    status: "Completed",
    description:
      "Covered database design, SQL queries, joins, constraints, indexing, and real-world problem-solving using MySQL.",
    skills: [
      "MySQL",
      "SQL Queries",
      "Database Design",
      "Joins",
      "Constraints",
      "Indexing",
    ],
  },
  {
    id: 2,
    title: "Full Stack Development with Java",
    issuer: "Seed Infotech",
    issueDate: "Ongoing",
    status: "Completed",
    description:
      "Hands-on training in full-stack development covering backend, frontend, and database technologies.",
    skills: [
      "Core Java",
      "J2EE",
      "Servlets",
      "Hibernate",
      "Oracle SQL",
      "MongoDB",
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Spring Boot",
      "Angular",
      "React",
      "Postman",
      "Git",
      "GitHub",
    ],
  },
];

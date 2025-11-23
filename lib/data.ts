import React from "react";
import { FaGraduationCap, FaJava, FaCogs, FaDatabase, FaChalkboardTeacher } from "react-icons/fa";

// Dummy placeholders for now
import img1 from "@/public/Pic1.png";
import img2 from "@/public/Pic2.png";
import img3 from "@/public/Pic3.webp";
import img4 from "@/public/Pic4.png";
import img5 from "@/public/Pic5.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Projects", hash: "#projects" },
  { name: "Contents", hash: "#contents" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "GemHeathcare",
    location: "Halifax NS",
    description:
      "As a Software Developer at GEM Health Care Group, I work with a modern tech stack including Django, Vue.js, MySQL, and REST APIs to build digital solutions used across multiple long-term care facilities in Nova Scotia. My primary responsibility is digitizing and automating clinical workflows that were previously paper-based, enabling nurses and healthcare staff to work more efficiently, accurately, and safely.",
    date: "2 Sep 2025",
    category: "work",
    icon: React.createElement(FaCogs),
  },
  {
    title: "Zoho Corporation",
    location: "Chennai, Tamil Nadu",
    description:
      "I worked as a Full Stack Developer at Zoho Corporation, where I built and optimized key healthcare HRM and patient-management features aimed at reducing the administrative workload on doctors and nurses and digitizing hospital operations. Using Spring Boot, Angular, MySQL, AWS, GitHub Actions, and REST APIs, I developed a digital Token Booking System that improved front-desk workflow efficiency by 40%, and a complete Patient Appointment Booking module that reduced scheduling conflicts by 30%. I also integrated WhatsApp automated notifications, which decreased patient no-shows by 25% and significantly improved communication. To support performance and scalability, I optimized MySQL schemas and queries, improving critical API response times by 35%, and designed clean, component-driven Angular interfaces for better usability. I leveraged AWS services such as Lambda, SNS, and SQS for automation and asynchronous messaging, and built CI/CD pipelines with AWS CodePipeline and GitHub Actions, accelerating deployment cycles and enabling smoother feature releases. Throughout the project, I collaborated with clinicians, QA engineers, and product managers to translate paper-based workflows into scalable digital systems that improved operational efficiency, patient experience, and overall service delivery.",
    date: "Sep 2022 - June 2024",
    category: "work",
    icon: React.createElement(FaJava),
  },
  {
    title: "Mindtree Limited",
    location: "Chennai, India",
    description:
      "As a Software Engineer Intern at Mindtree Limited, I contributed to enterprise-grade application development and maintenance projects using Java, REST APIs, and SQL. I assisted in building modular backend components, optimizing existing codebases, and improving API reliability across large-scale systems. I collaborated with senior engineers on integration and testing efforts involving enterprise application services, ensuring smooth communication between distributed services. I also supported defect resolution, performance tuning, and documentation activities across agile sprints, gaining hands-on experience in software engineering best practices within a fast-paced enterprise environment.",
    date: "April 2022 - Aug 2022",
    category: "work",
    icon: React.createElement(FaJava),
  },
   {
    title: "Master of Applied Computer Science",
    location: "Dalhousie University, Canada",
    description:
      "Recently completed my Master’s degree with a CGPA of 3.8/4.30. Alongside coursework, I worked as a TA and marker, where I supported student learning in areas such as web development, digital transformation, and algorithms. My academic journey has deepened my expertise in cloud computing, AI, and applied software engineering.",
    date: "Sep 2024 – Dec 2025",
    category: "education",
    icon: React.createElement(FaGraduationCap),
  },
  {
    title: "Bachelor of Engineering in Computer Science",
    location: "Anna University, India",
    description:
      "I completed my undergraduate degree with first class distinction, achieving a CGPA of 9.06/10. My studies gave me a strong foundation in computer science, data structures, object-oriented programming, and software engineering principles.",
    date: "Aug 2018 – Jun 2022",
    category: "education",
    icon: React.createElement(FaGraduationCap),
  }
] as const;

export const projectsData = [
  {
    title: "AI-Powered Meeting Minutes Generator",
    description:
      "AI-powered meeting minutes generator with automated text extraction, vector search, and intelligent summarization. Built with AWS serverless architecture, React frontend, and RAG workflows for active learning.",
    tags: ["React", "AWS", "HCL", "RAG", "Vector Search"],
    imageUrl: img1,
    projectUrl: "https://github.com/Sajidrahman-tech/AI-Powered-Meeting-Minutes-Generator",
  },
  {
    title: "Cloud Chat – Real-Time Messaging Platform",
    description:
      "A cloud-native, real-time messaging platform that enables secure, scalable, and low-latency chat between users. Built to demonstrate modern cloud architectures, serverless technologies, and event-driven design.",
    tags: ["JavaScript", "Cloud Native", "WebSocket", "Serverless"],
    imageUrl: img2,
    projectUrl: "https://github.com/Sajidrahman-tech/Cloud-Chat-Real-Time-Messaging-Platform",
  },
  {
    title: "Cloud Native Notes App",
    description:
      "A modern, serverless, and infinitely scalable note-taking application that harnesses the full power of AWS cloud services. Built with enterprise-grade architecture demonstrating cutting-edge cloud technologies.",
    tags: ["HCL", "AWS", "Serverless"],
    imageUrl: img3,
    projectUrl: "https://github.com/Sajidrahman-tech/Cloud-Native-Notes-App",
  },
  {
    title: "Movie Ticket Booking System",
    description:
      "A modern, feature-rich movie ticket booking application that provides users with a seamless experience for discovering movies, selecting seats, and booking tickets online.",
    tags: ["JavaScript", "Node.js", "Express"],
    imageUrl: img4,
    projectUrl: "https://github.com/Sajidrahman-tech/Movie-Ticket-Booking-System",
  },
  {
    title: "E-Commerce Backend",
    description:
      "A modern, feature-rich movie ticket booking application that provides users with a seamless experience for discovering movies, selecting seats, and booking tickets online.",
    tags: ["TypeScript", "React", "Node.js"],
    imageUrl: img5,
    projectUrl: "https://github.com/Sajidrahman-tech/E-COMMERCE-Backend",
  },
] as const;

// ---------- SKILLS (Full-Stack) ----------
export const skillsFullStack = {
  languages: ["Core Java", "JavaScript", "TypeScript", "Python"],
  frameworks: ["Spring Boot", "Node.js (Express)", "Flask", "React.js", "Vue.js"],
  libraries: ["Redux", "Elasticsearch"],
  databases: ["MySQL", "MongoDB", "Firebase", "BigQuery", "DynamoDB"],
  devopsCloud: ["Git", "Jenkins", "Docker", "Kubernetes", "Ansible", "CI/CD"],
  messaging: ["Kafka", "ActiveMQ"],
  monitoring: ["Grafana", "Datadog"],
  concepts: ["Agile", "OOPS", "SOLID", "TDD", "Unit & Integration Testing"],
  certifications: [
    "AWS SAA-C03",
    "GCP Fundamentals (Coursera)",
    "Azure Fundamentals (AZ-900)",
  ],
} as const;

// ---------- SKILLS (Data Science) ----------
export const skillsDataScience = {
  frameworksLibs: [
    "scikit-learn",
    "Keras",
    "Pandas",
    "NumPy",
    "TensorFlow",
    "Matplotlib",
    "OpenCV",
    "Dash",
  ],
  concepts: [
    "Machine Learning Algorithms",
    "Neural Networks",
    "Data Visualization",
    "Statistical Analysis",
  ],
  certifications: ["Machine Learning (Andrew Ng)"],
} as const;

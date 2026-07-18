import {
  Code2,
  Palette,
  Globe,
  GraduationCap,
  Database,
  Wrench,
  Sparkles,
  Monitor,
  Server,
  Layout,
  Terminal,
  GitBranch,
  Layers,
  Smartphone,
  Shield,
  Workflow,
} from "lucide-react";
import { FigmaIcon } from "../components/BrandIcons";

export const personalInfo = {
  name: "ARIBA Mehdi",
  firstName: "Mehdi",
  title: "MERN Stack Developer",
  animatedRoles: [
    "MERN Stack Developer",
    "Full-Stack Engineer",
    "UI/UX Builder",
    "Problem Solver",
  ],
  location: "Algeria, Alger",
  email: "armehdi0101@gmail.com",
  status: "Open to Work",
  profileImage: "/images/pirate_hate.png",
  bio: {
    short:
      "MERN Stack developer crafting scalable web applications with modern technologies. Passionate about clean architecture, performance, and building products that make a difference.",
    medium:
      "I'm a MERN Stack developer focused on building full-stack web applications with React, Node.js, Express, and MongoDB. I care deeply about clean code, scalable architecture, and creating experiences that feel polished and professional.",
    detailed:
      "I believe in building applications the right way — with clean architecture, thoughtful UI/UX, and production-ready code. Every project is an opportunity to push my skills further and deliver real value.",
  },
  social: {
    github: "https://github.com/mehdi869",
    linkedin: "https://www.linkedin.com/in/mehdi-ariba",
  },
};

export const dashboardCards = [
  {
    label: "Current Project",
    value: "Fintech Ecommerce Dashboard",
    description: "Full-stack MERN application with auth and analytics",
    icon: Code2,
    color: "primary",
  },
  {
    label: "Current Focus",
    value: "MERN Stack Development",
    description: "Building production-ready full-stack applications",
    icon: Workflow,
    color: "accent",
  },
  {
    label: "Currently Learning",
    value: "Backend Architecture",
    description: "Authentication patterns, API design & optimization",
    icon: Server,
    color: "emerald",
  },
  {
    label: "Availability",
    value: "Open to Freelance",
    description: "Available for projects and collaborations",
    icon: Sparkles,
    color: "amber",
  },
];

export const buildLog = [
  { text: "Created first React project", done: true },
  { text: "Learned API integration", done: true },
  { text: "Implemented JWT authentication", done: true },
  { text: "Built MERN stack applications", done: true },
  { text: "Deployed production projects", done: true },
  { text: "Mastering backend architecture", done: false },
  { text: "Launching freelance services", done: false },
];

export const terminalLines = [
  { prompt: true, text: "visitor@mehdi:~$" },
  { prompt: false, text: "> Building MERN applications..." },
  { prompt: false, text: "> Learning every day..." },
  { prompt: false, text: "> Solving real-world problems..." },
  { prompt: false, text: "> Ready for freelance opportunities..." },
];

export const journeyTimeline = [
  {
    year: "2022",
    event: "Started my journey in Computer Science",
    type: "milestone",
  },
  {
    year: "2023",
    event: "Focused on Computer Systems and Software Engineering",
    type: "learning",
  },
  {
    year: "2025",
    event: "Graduated with a Bachelor's Degree in Computer Systems and Software Engineering",
    type: "milestone",
  },
  {
    year: "2025",
    event: "Started a Master's Degree in Visual Computing",
    type: "milestone",
  },
  {
    year: "2026",
    event: "Learning the MERN Stack and building real-world full-stack projects",
    type: "learning",
  },
];

export const stats = [
  { label: "Projects Built", value: "5+" },
  { label: "Technologies", value: "12+" },
  { label: "Hours Coded", value: "100+" },
];

export const aboutValues = [
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Writing maintainable, scalable code following industry best practices and design patterns.",
  },
  {
    icon: Globe,
    title: "Performance First",
    description:
      "Optimizing for speed, accessibility, and seamless user experiences across all devices.",
  },
  {
    icon: Palette,
    title: "Design-Driven",
    description:
      "Creating interfaces that are both beautiful and functional with attention to every detail.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Growth",
    description:
      "Constantly learning new technologies and refining my craft to stay at the cutting edge.",
  },
];

export const funFacts = [
  "I turn complex problems into elegant solutions",
  "Every bug is a learning opportunity",
];

export const skills = {
  frontend: {
    title: "Frontend",
    icon: Monitor,
    color: "from-blue-500 to-cyan-400",
    items: [
      {
        name: "React",
        icon: Code2,
        description: "Component-driven UIs with hooks and modern patterns",
      },
      {
        name: "JavaScript",
        icon: Code2,
        description: "ES6+, async/await, functional programming",
      },
      {
        name: "TailwindCSS",
        icon: Layers,
        description: "Utility-first styling and custom design systems",
      },
      {
        name: "HTML5",
        icon: Layout,
        description: "Semantic markup and accessibility",
      },
      {
        name: "CSS3",
        icon: Palette,
        description: "Grid, Flexbox, animations, and responsive design",
      },
      {
        name: "Responsive Design",
        icon: Smartphone,
        description: "Mobile-first, pixel-perfect across all devices",
      },
    ],
  },

  backend: {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-400",
    items: [
      {
        name: "Node.js",
        icon: Server,
        description: "Server-side JavaScript and REST APIs",
      },
      {
        name: "Express",
        icon: Workflow,
        description: "Fast, unopinionated web framework",
      },
      {
        name: "Django",
        icon: Server,
        description: "High-level Python framework for rapid development",
      },
      {
        name: "Django REST Framework",
        icon: Globe,
        description: "Building secure and scalable REST APIs",
      },
      {
        name: "REST APIs",
        icon: Globe,
        description: "Designing and consuming RESTful services",
      },
      {
        name: "JWT Auth",
        icon: Shield,
        description: "Secure token-based authentication",
      },
    ],
  },

  database: {
    title: "Database",
    icon: Database,
    color: "from-amber-500 to-orange-400",
    items: [
      {
        name: "MongoDB",
        icon: Database,
        description: "Document-based NoSQL database design",
      },
      {
        name: "SQL",
        icon: Database,
        description: "Relational database design and querying",
      },
    ],
  },

  tools: {
    title: "Languages & Tools",
    icon: Wrench,
    color: "from-purple-500 to-pink-400",
    items: [
      {
        name: "Python",
        icon: Code2,
        description: "Backend development, automation, and scripting",
      },
      {
        name: "Git",
        icon: GitBranch,
        description: "Version control and branching strategies",
      },
      {
        name: "GitHub",
        icon: Terminal,
        description: "Collaboration, CI/CD, and project management",
      },
      {
        name: "VS Code",
        icon: Code2,
        description: "IDE with custom extensions and workflows",
      },
    ],
  },
};

export const softSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Fast Learning",
  "Adaptability",
];

export const education = [
  {
    id: 1,
    degree: "Master's Degree in Computer Science",
    field: "Specialization in Software Engineering",
    institution: "University of Technology, Casablanca",
    period: "2022 - 2025",
    highlights: [
      "Graduated with Honors (Mention: Very Good)",
      "Master's Thesis: Modern Web Application Architecture",
      "Published 2 research papers in international conferences",
      "President of University Coding Club",
    ],
  },
  {
    id: 2,
    degree: "Bachelor's in Computer Science",
    field: "Major in Web Technologies",
    institution: "Faculty of Sciences, Rabat",
    period: "2019 - 2022",
    highlights: [
      "Advanced Algorithms",
      "Database Systems",
      "Machine Learning",
      "Cloud Computing",
      "Cybersecurity",
    ],
  },
  {
    id: 3,
    degree: "Scientific Baccalaureate",
    field: "Mathematics & Physics Stream",
    institution: "High School of Excellence, Casablanca",
    period: "2016 - 2019",
    highlights: [
      "National Mathematics Competition - 2nd Place",
      "School Programming Contest Winner",
      "Graduated with Honors",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Expense Tracker",
    description:
      "Full-stack MERN expense tracking application with user authentication, category management, and visual analytics dashboard.",
    longDescription:
      "A complete MERN stack expense tracker featuring JWT authentication, real-time chart visualizations, budget management, and a responsive dashboard. Built with security and scalability in mind.",
    category: "MERN",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Chart.js"],
    features: [
      "JWT Authentication",
      "Real-time Charts",
      "Category Management",
      "Budget Tracking",
    ],
    image: "images/expense-tracker.png",
    github: "https://github.com/mehdi869/Expense-Tracker",
    live: "https://expense-tracker-frontend-lc2c.onrender.com ",
    featured: true,
  },
  {
    id: 2,
    name: "Portfolio Website",
    description:
      "A premium developer portfolio built with React, TailwindCSS, and Framer Motion featuring smooth animations and a dark theme.",
    longDescription:
      "My personal portfolio designed to showcase projects, skills, and journey as a developer. Features a premium dark theme, smooth scroll animations, bento grid layouts, and a fully responsive design.",
    category: "Frontend",
    tech: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    features: ["Scroll Animations", "Dark Theme", "Bento Grid", "Mobile-First"],
    image: "images/myportfolio.png",
    github: "https://github.com/mehdi869/MyPortfolio",
    live: "https://mehdi869.github.io/MyPortfolio/",
    featured: true,
  },
  {
    id: 3,
    name: "AI-Powered Resume Screener",
    description:
      "Intelligent recruitment platform that leverages Google Gemini AI to evaluate candidate resumes and streamline hiring decisions.",
    longDescription:
      "Built for modern HR teams, this MERN application combines AI-powered resume analysis with applicant tracking capabilities. Recruiters can manage job openings, review AI-generated candidate insights, monitor hiring pipelines, and make data-driven hiring decisions through a sleek dashboard interface.",
    category: "AI",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Gemini",
      "Tailwind CSS",
    ],
    features: [
      "Google Gemini AI Analysis",
      "Automated Resume Scoring",
      "Applicant Tracking System",
      "Job Management Dashboard",
      "AI Candidate Summaries",
      "Hiring Pipeline Monitoring",
    ],
    image: "images/ai-resume-screener.png",
    github: "https://github.com/mehdi869/resume-screener-hr-tracker2",
    live: "https://resume-screener-hr-tracker2-frontend.onrender.com",
    featured: true,
  },
];

export const projectCategories = ["All", "Frontend", "MERN", "Full Stack" , "AI"];

export const learningTimeline = [
  { year: "2019", event: "Started studying Computer Science" },
  { year: "2020", event: "Began learning HTML, CSS, and JavaScript" },
  { year: "2021", event: "Built first personal projects" },
  { year: "2022", event: "Started Master's degree in Software Engineering" },
  {
    year: "2023",
    event: "Completed freeCodeCamp certification, started learning React",
  },
  {
    year: "2024",
    event: "AWS Cloud Practitioner certification, building portfolio projects",
  },
  {
    year: "2025",
    event: "Currently learning MERN stack (React, Node.js, MongoDB)",
  },
];

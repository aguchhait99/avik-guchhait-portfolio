import { Project, ExperienceItem, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Avik Guchhait",
  title: "Senior Frontend Developer",
  subTitle: "Specializing in High-Performance React & Next.js Ecosystems",
  location: "South 24 Parganas, West Bengal, India",
  phone: "8777823929",
  email: "avikguchhait09@gmail.com",
  linkedin: "https://linkedin.com/in/avik-guchhait-178411371",
  github: "https://github.com/aguchhait99",
  brief: "Frontend Developer with extensive experience in React.js, Next.js, TypeScript, and modern web environments. Skilled in engineering scalable web applications, complete enterprise admin panels, high-conversion e-commerce workflows, and SEO-optimized frontend solutions. Expert in state management architectures, API proxy patterns, performance optimizations, and building fluid, interactive customer-facing interfaces.",
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    spec: "Electronics & Communication Engineering",
    school: "Greater Kolkata College of Engineering and Management (MAKAUT)",
    year: "2020",
    score: "DGPA: 7.81",
    secondary: "Higher Secondary: 69% | Secondary: 74.42%"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "communitee-golf",
    title: "Communitee Golf",
    subtitle: "Enterprise Management & Administrative Platform",
    category: "admin-panels",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Redux", "REST APIs"],
    points: [
      "Architected and developed the complete enterprise Admin Panel entirely from scratch.",
      "Engineered comprehensive golf course management features with fluid data visualizers.",
      "Created highly scalable, secure administrative workflows and dynamic metrics dashboards.",
      "Integrated secure backend APIs and centralized state management solutions seamlessly."
    ],
    featuredImageColor: "from-emerald-500/10 to-teal-800/20 border-emerald-500/20 text-emerald-400"
  },
  {
    id: "vibras",
    title: "Vibras",
    subtitle: "High-Performance Monorepo Suite & Instant Chat System",
    category: "web-apps",
    tags: ["React.js", "Next.js", "TypeScript", "Monorepo", "WebSockets", "Zustand"],
    points: [
      "Successfully engineered web features within a complex, highly nested Monorepo structure.",
      "Developed and maintained 2 core customer-facing React.js web applications concurrently.",
      "Built a highly performant, server-rendered SEO-focused Next.js landing platform.",
      "Implemented a robust, instant chat module for highly responsive, real-time user engagement.",
      "Optimized performance and crafted reusable enterprise-level React components."
    ],
    featuredImageColor: "from-blue-500/10 to-indigo-800/20 border-blue-500/20 text-blue-400"
  },
  {
    id: "steelbird",
    title: "Steelbird",
    subtitle: "E-Commerce Suite & Scalable Checkout Engine",
    category: "e-commerce",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Payment Gateways", "Zustand"],
    points: [
      "Engineered a robust, complete administrative management back-office console.",
      "Designed and built the customer-facing, high-conversion e-commerce user interface.",
      "Implemented highly intricate step-by-step Checkout workflows, Wishlists, and active local Carts.",
      "Integrated highly secure third-party payment processing architectures safely.",
      "Created modular product management dashboards with responsive grid layouts."
    ],
    featuredImageColor: "from-orange-500/10 to-red-800/20 border-orange-500/20 text-orange-400"
  },
  {
    id: "mywork24",
    title: "MyWork24",
    subtitle: "Modern Freelance Services Platform",
    category: "web-apps",
    tags: ["React.js", "JavaScript", "HTML5/CSS3", "REST APIs"],
    points: [
      "Developed core frontend modules and highly intuitive user experience touchpoints.",
      "Integrated secure backend API communications supporting robust multi-module features.",
      "Successfully managed automated bug fixing, unit alignments, and layout optimizations."
    ],
    featuredImageColor: "from-purple-500/10 to-pink-800/20 border-purple-500/20 text-purple-400"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-webskitters",
    role: "Application Developer (React JS / Next.js)",
    company: "Webskitters Technology Solution Pvt. Ltd.",
    duration: "February 2024 – Present",
    bullets: [
      "Develop highly scalable web applications using React.js and Next.js framework architectures.",
      "Build, test, and maintain responsive admin panels and enterprise real-time dashboards.",
      "Successfully map and implement typescript-based structures ensuring high type safety.",
      "Integrate REST APIs, cloud databases (Firebase), and serverless database backends (Supabase).",
      "Collaborate in cross-functional agile teams consisting of designers, QA heads, and engineers.",
      "Optimize core loading benchmarks, boosting core web vitals and client satisfaction."
    ],
    color: "emerald"
  },
  {
    id: "exp-royal",
    role: "Technical Team Leader / Floor Head",
    company: "Royal Research",
    duration: "February 2022 – August 2023 (1.5 Years)",
    bullets: [
      "Led and managed complex technical developer divisions and project workflows.",
      "Supervised day-to-day operations, cross-platform product alignments, and team coordination.",
      "Actively troubleshot development bottlenecks to maintain fast-paced operational metrics."
    ],
    color: "blue"
  },
  {
    id: "exp-studentlife",
    role: "Technical Team Leader",
    company: "Student Life",
    duration: "September 2021 – February 2022 (5 Months)",
    bullets: [
      "Managed software project deliveries and coordinated strict schedule trajectories.",
      "Delivered robust technical setups and established structured quality assurance methodologies."
    ],
    color: "purple"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Frontend & Languages",
    skills: [
      { name: "React.js", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "JavaScript (ES6+)", level: 5 },
      { name: "HTML5 & CSS3", level: 5 }
    ]
  },
  {
    title: "State Management & UI Architectures",
    skills: [
      { name: "Redux Toolkit", level: 4.5 },
      { name: "Zustand", level: 4.5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Material UI (MUI)", level: 4.5 }
    ]
  },
  {
    title: "Backend & Serverless Integrations",
    skills: [
      { name: "RESTful APIs Interaction", level: 5 },
      { name: "Firebase (Auth / Firestore)", level: 4.5 },
      { name: "Supabase (PostgreSQL / Realtime)", level: 4 }
    ]
  },
  {
    title: "Other Professional Disciplines",
    skills: [
      { name: "Admin Panel & Dashboard Architecture", level: 5 },
      { name: "E-commerce Integration & Workflows", level: 5 },
      { name: "SEO Optimization & Server-Side Hydration", level: 4.5 },
      { name: "Performance Optimization (Lazy Loading / Memo)", level: 4.5 },
      { name: "Monorepo Architectures (Turborepo)", level: 4 },
      { name: "Component-Driven Design & Storybook", level: 4.5 }
    ]
  }
];

export const OTHER_SKILLS = [
  "Responsive Web Design",
  "Admin Panel Architecture",
  "E-commerce Integration",
  "SEO Optimization Strategy",
  "Performance Optimization",
  "Component-Driven Design",
  "Agile Methodologies",
  "Git & GitHub Versioning",
  "VS Code Tooling Suite",
  "REST APIs Integrations"
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-react",
    title: "Web Development using React JS Certification",
    issuer: "Authorized Training Provider"
  },
  {
    id: "cert-telecom",
    title: "Vocational Training in Basic Telecom",
    issuer: "Bharat Sanchar Nigam Limited (BSNL)"
  },
  {
    id: "cert-metro",
    title: "Vocational Training in Signaling Systems",
    issuer: "Kolkata Metro Railway Corporation"
  }
];

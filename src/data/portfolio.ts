import {
  SiAngular,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiIonic,
  SiCapacitor,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiJira,
  SiRedux,
  SiReactivex,
  SiGitlab,
  SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";

/* ------------------------------------------------------------------ */
/* Profile                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Sanket Jain",
  firstName: "Sanket",
  title: "Frontend & Mobile Application Developer",
  shortTitle: "Frontend Engineer",
  location: "Pune, Maharashtra, India",
  email: "sanketjain242000@gmail.com",
  phone: "+91 7558702483",
  availability: "Open to remote & full-time roles",
  available: true,
  resumeUrl: "/Sanket_Jain_Resume.pdf",
  // Roles cycled through the hero typing effect
  typingRoles: [
    "Angular Specialist",
    "Ionic Mobile Developer",
    "SSR & PWA Engineer",
    "TypeScript Craftsman",
    "Performance-focused UI Engineer",
  ],
  intro:
    "Frontend Developer with 3.3+ years building scalable enterprise web and mobile applications with Angular, TypeScript, Ionic and modern frontend engineering. I specialize in SSR, performance optimization, reusable component architecture and shipping production-grade experiences for Android, iOS and the web.",
  bio: [
    "I'm a frontend engineer who loves turning complex, data-heavy enterprise workflows into fast, intuitive interfaces. Over the last 3+ years at Rssquarz Tech Solutions I've led an Angular 10 → 17 migration with SSR, architected a 50+ module ERP platform, and shipped cross-platform mobile apps to the Play Store and App Store.",
    "My focus is frontend scalability — reusable component architecture, NgRx state management, rendering optimization and Core Web Vitals. I work fluently with AI-assisted workflows (Cursor, Copilot, MCP) to ship faster without compromising code quality.",
  ],
  socials: {
    github: "https://github.com/Sanket2404",
    linkedin: "https://linkedin.com/in/sanket-jain-550680222",
    email: "mailto:sanketjain242000@gmail.com",
  },
};

/* ------------------------------------------------------------------ */
/* Stats / Achievements                                               */
/* ------------------------------------------------------------------ */

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 3.3, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "Successful Deployments" },
  { value: 4, suffix: "", label: "Mobile Apps Released" },
  { value: 15, suffix: "+", label: "Projects Completed" },
];

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

export interface Skill {
  name: string;
  icon: IconType;
  level: number; // 0 - 100 proficiency indicator
  color: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Building scalable, accessible, high-performance interfaces.",
    skills: [
      { name: "Angular", icon: SiAngular, level: 95, color: "#dd0031" },
      { name: "TypeScript", icon: SiTypescript, level: 92, color: "#3178c6" },
      { name: "JavaScript", icon: SiJavascript, level: 92, color: "#f7df1e" },
      { name: "RxJS", icon: SiReactivex, level: 88, color: "#b7178c" },
      { name: "NgRx / Redux", icon: SiRedux, level: 85, color: "#764abc" },
      { name: "React", icon: SiReact, level: 80, color: "#61dafb" },
      { name: "HTML5", icon: SiHtml5, level: 95, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, level: 93, color: "#1572b6" },
      { name: "SCSS", icon: SiSass, level: 90, color: "#cc6699" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 88, color: "#38bdf8" },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform apps shipped to the Play Store & App Store.",
    skills: [
      { name: "Ionic 7/8", icon: SiIonic, level: 90, color: "#3880ff" },
      { name: "Capacitor", icon: SiCapacitor, level: 85, color: "#119eff" },
    ],
  },
  {
    title: "Backend & Cloud",
    description: "Working knowledge to integrate and deploy end-to-end.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 65, color: "#5fa04e" },
      { name: "Express.js", icon: SiExpress, level: 62, color: "#ffffff" },
      { name: "AWS (S3, IAM)", icon: FaAws, level: 60, color: "#ff9900" },
    ],
  },
  {
    title: "Tools & DevOps",
    description: "Day-to-day workflow, CI/CD and collaboration.",
    skills: [
      { name: "Git", icon: SiGit, level: 92, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, level: 92, color: "#ffffff" },
      { name: "GitLab CI/CD", icon: SiGitlab, level: 82, color: "#fc6d26" },
      { name: "Docker", icon: SiDocker, level: 68, color: "#2496ed" },
      { name: "VS Code", icon: VscVscode, level: 95, color: "#007acc" },
      { name: "Postman", icon: SiPostman, level: 85, color: "#ff6c37" },
      { name: "Figma", icon: SiFigma, level: 78, color: "#f24e1e" },
      { name: "Jira", icon: SiJira, level: 80, color: "#0052cc" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Rssquarz Tech Solutions Pvt. Ltd.",
    role: "Frontend Developer — Angular, SSR & AI-Assisted Development",
    period: "Mar 2023 — Present",
    location: "Pune, India",
    current: true,
    summary:
      "Driving frontend architecture for enterprise ERP & workflow platforms, cross-platform mobile apps and SSR-powered web experiences.",
    highlights: [
      "Led the migration of an enterprise Angular application from Angular 10 to Angular 17 with SSR, improving SEO visibility, rendering performance and initial page-load experience.",
      "Engineered scalable enterprise web apps, PWAs and cross-platform mobile apps using Angular, Ionic and modern frontend architecture.",
      "Implemented NgRx state management and RxJS reactive patterns for predictable state across complex enterprise workflows.",
      "Reduced initial bundle size and improved performance via lazy loading, SSR optimization, code splitting and OnPush change detection.",
      "Integrated secure payment gateways, authentication systems and RESTful APIs for real-time transactions.",
      "Designed and maintained GitLab CI/CD pipelines for automated build, deployment and release across test and production.",
      "Published and maintained production mobile apps on the Google Play Store and Apple App Store using Ionic.",
      "Leveraged AI-assisted tooling (Cursor AI, GitHub Copilot, MCP) for debugging, rapid prototyping and code optimization.",
    ],
    stack: ["Angular 17", "TypeScript", "Ionic", "NgRx", "RxJS", "SSR", "GitLab CI/CD"],
  },
];

export const education = {
  degree: "Integrated Master of Computer Application (MCA)",
  school: "R.C. Patel I.M.R.D, Shirpur",
  period: "2018 — 2023",
  score: "CGPA 9.64 / 10",
};

export const achievements = [
  {
    title: "Best Performer 2023–24",
    detail: "Recognized for outstanding contribution and technical excellence in Frontend Development.",
  },
  {
    title: "2nd Rank — CSI Project Presentation",
    detail: "Awarded for technical innovation and effective project delivery.",
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                           */
/* ------------------------------------------------------------------ */

export interface Project {
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  accent: string; // gradient css for the preview card
  featured?: boolean;
  links: { github?: string; live?: string };
}

export const projects: Project[] = [
  {
    name: "Richa Graphics",
    category: "Enterprise Workflow Platform · Angular + Ionic",
    tagline: "A 50+ module ERP for end-to-end operations.",
    description:
      "Engineered and maintained a large-scale enterprise operations platform spanning Orders, Task Management, Installation, Delivery, Vendors, Inventory, CMS and Role Administration — with complex workflow orchestration and real-time status transitions.",
    features: [
      "50+ interconnected, lazy-loaded feature modules",
      "Deeply nested reactive forms with role-driven UI access",
      "OnPush change detection, RxJS & response caching for scale",
      "Cross-platform Ionic field-installer mobile app",
    ],
    stack: ["Angular 16", "Ionic 7", "RxJS", "REST APIs", "GitLab CI"],
    accent: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    featured: true,
    links: {},
  },
  {
    name: "BuildersNetwork",
    category: "Real-Estate Platform · Android & iOS",
    tagline: "Property discovery with real-time chat & geolocation.",
    description:
      "A large-scale cross-platform real-estate platform with property discovery, advanced search/filtering, real-time chat, push notifications and geolocation services — migrated from an Angular 10 PWA to Angular 17 with SSR.",
    features: [
      "Angular 10 PWA → Angular 17 SSR migration",
      "Improved Core Web Vitals & hydration behaviour",
      "Real-time chat, push notifications & geolocation",
      "Shipped to Google Play Store & Apple App Store",
    ],
    stack: ["Angular 17", "Ionic", "SSR", "Firebase", "REST APIs"],
    accent: "linear-gradient(135deg,#d946ef,#8b5cf6)",
    featured: true,
    links: {},
  },
  {
    name: "Apna Grahak",
    category: "Business Management Platform · Angular",
    tagline: "Sales, purchase, inventory & reporting at scale.",
    description:
      "An enterprise business-management platform covering Sales, Purchase, Inventory, Customer Management, Order Processing and Reporting, built on reusable component-driven Angular architecture with centralized NgRx state.",
    features: [
      "Centralized NgRx state for high-volume async data",
      "Complex reactive forms & dynamic data tables",
      "Advanced filtering, search & permission workflows",
      "Debounced API interactions & optimized rendering",
    ],
    stack: ["Angular 12", "NgRx", "RxJS", "Angular Material", "Bootstrap"],
    accent: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
    featured: true,
    links: {},
  },
  {
    name: "Rejouice Clone",
    category: "Frontend Craft · Motion Study",
    tagline: "A pixel-faithful, motion-rich agency clone.",
    description:
      "A self-initiated build recreating the award-winning Rejouice agency site — a deep dive into smooth scroll, scroll-tied animation, kinetic typography and immaculate layout detail.",
    features: [
      "Lenis smooth scroll + GSAP scroll-triggers",
      "Kinetic typography & image reveals",
      "Pixel-faithful responsive layout",
      "Performance-budgeted animation",
    ],
    stack: ["JavaScript", "GSAP", "Lenis", "SCSS"],
    accent: "linear-gradient(135deg,#f59e0b,#d946ef)",
    links: { github: "https://github.com/Sanket2404" },
  },
  {
    name: "Freelance Web Applications",
    category: "Independent Client Work",
    tagline: "Responsive marketing & business sites.",
    description:
      "A series of freelance engagements delivering responsive, SEO-friendly marketing and business web apps for clients — from design hand-off to production deployment.",
    features: [
      "Responsive, mobile-first builds",
      "SEO & performance optimization",
      "Reusable component libraries",
      "End-to-end delivery & deployment",
    ],
    stack: ["Angular", "TypeScript", "SCSS", "REST APIs"],
    accent: "linear-gradient(135deg,#34d399,#22d3ee)",
    links: { github: "https://github.com/Sanket2404" },
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials (placeholder structure for future use)               */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sanket consistently delivers clean, scalable frontend architecture. His Angular 17 SSR migration measurably improved our performance and SEO.",
    name: "Your Name Here",
    role: "Engineering Lead",
    company: "Add a testimonial",
  },
  {
    quote:
      "A reliable engineer who takes ownership end-to-end — from reusable component design to Play Store & App Store releases.",
    name: "Your Name Here",
    role: "Product Manager",
    company: "Add a testimonial",
  },
  {
    quote:
      "Strong eye for detail and performance. Sanket turned a complex 50+ module ERP into something genuinely pleasant to use.",
    name: "Your Name Here",
    role: "Client",
    company: "Add a testimonial",
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

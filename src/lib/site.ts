import { projectsData } from "@/app/projects/project-configs";

export const profile = {
  name: "Rahul Das Sarma",
  role: "Senior Frontend Developer",
  location: "India",
  resume: "/Rahul_Das_Sarma_Resume.pdf",
  resumeName: "Rahul_Das_Sarma_Resume.pdf",
  github: "https://github.com/Rahul-Das-Sarma",
  linkedin: "https://www.linkedin.com/in/rahuldsofficial/",
  x: "https://twitter.com/rahul_dofficial",
  site: "https://rahul-das-sarma.vercel.app",
};

export const navItems = [
  { name: "Home", href: "/#top" },
  { name: "Work", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];

export const principles = [
  {
    index: "01",
    title: "Interfaces that stay clear as they grow",
    body: "Most of my shipped work is React and Next.js. Lotion uses Radix UI for accessible interface pieces, and UI Atelier is a set of distinct product interfaces built with the same stack.",
  },
  {
    index: "02",
    title: "State that matches the product",
    body: "Lotion uses Zustand alongside Convex for notes and collaboration. Thumbnail Creator tracks projects, accounts, and a credit-based usage system.",
  },
  {
    index: "03",
    title: "Accounts, data, and real workflows",
    body: "Lotion uses Clerk for authentication and Convex for data. Thumbnail Creator uses Prisma, OAuth, and Razorpay. At work I also build with Node.js, Express, MongoDB, and PostgreSQL.",
  },
  {
    index: "04",
    title: "Software people can open and use",
    body: "The projects here are deployed products with live demos, including AgentGuard and UI Atelier on Vercel, not slide decks of unfinished concepts.",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    label: "Data",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Tools & workflow",
    items: ["Git", "Docker", "Kubernetes", "AWS", "Vercel", "Nginx", "Linux"],
  },
];

export const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "IkureTechsoft Pvt. Ltd.",
    period: "2023 — Present",
    location: "India",
    description:
      "Leading a development team building MERN stack applications. Mentoring developers and working across React, Node.js, Express, MongoDB, and PostgreSQL.",
  },
  {
    title: "Frontend Developer",
    company: "BluespaceLabs Pvt. Ltd.",
    period: "2021 — 2023",
    location: "India",
    description:
      "Built MERN stack applications and telecom products, with React and Node.js on the application side and MongoDB and PostgreSQL for data.",
  },
];

const projectMeta: Record<
  string,
  { category: string; featured: boolean }
> = {
  AgentGuard: { category: "Developer tool", featured: true },
  "UI Atelier": { category: "Interface studies", featured: true },
  "Lotion - A Notion Clone": { category: "Product", featured: false },
  "Thumbnail Creator": { category: "Product", featured: false },
};

export const projects = projectsData.map((project) => ({
  ...project,
  category: projectMeta[project.title]?.category ?? "Product",
  featured: projectMeta[project.title]?.featured ?? false,
  stack: project.tech.split(", ").map((item) => item.trim()),
}));

export const featuredProjects = projects.filter((project) => project.featured);
export const supportingProjects = projects.filter((project) => !project.featured);

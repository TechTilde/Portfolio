/** The tilde path from the logo (viewBox 0 0 100 100). */
export const TILDE_PATH =
  "M22 55 C27 46 32 41.5 38 41.5 C43.5 41.5 47 46 50 50 C53.5 54.5 57 58.5 62 58.5 C67.5 58.5 72 54 78 44.5";

export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

/** Section id → the nav link it should highlight while it is on screen. */
export const spyMap: Record<string, string> = {
  top: "#top",
  services: "#services",
  work: "#work",
  about: "#about",
  approach: "#about",
  contact: "#contact",
};

export const services = [
  {
    title: "Website Development",
    description: "Modern, responsive websites designed for performance, usability, and growth.",
  },
  {
    title: "Web Applications",
    description: "Custom applications that simplify processes and solve real problems.",
  },
  {
    title: "Custom Software",
    description: "Software solutions tailored to specific business requirements.",
  },
  {
    title: "UI/UX Design",
    description: "Clear, intuitive digital experiences with thoughtful design.",
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing improvements, maintenance, and technical assistance.",
  },
];

export const projects = [
  {
    kind: "WEBSITE",
    mockup: "site",
    name: "[Project Name One]",
    description:
      "[Two lines on the client's problem and what was built. Replace with a real project.]",
    tags: ["Next.js", "TypeScript", "Headless CMS"],
    reverse: false,
  },
  {
    kind: "WEB APPLICATION",
    mockup: "dashboard",
    name: "[Project Name Two]",
    description:
      "[Two lines on the workflow this app replaced and who uses it. Replace with a real project.]",
    tags: ["React", "Node.js", "PostgreSQL"],
    reverse: true,
  },
  {
    kind: "CUSTOM SOFTWARE",
    mockup: "app",
    name: "[Project Name Three]",
    description:
      "[Two lines on the product, the platforms it runs on and the problem it solves. Replace with a real project.]",
    tags: ["React Native", "Python", "REST API"],
    reverse: false,
  },
] as const;

export const principles = [
  {
    title: "Thoughtful Engineering",
    description: "[One line on how you approach code quality and decisions.]",
  },
  {
    title: "Direct Collaboration",
    description: "[One line on working directly with the developers, no middle layers.]",
  },
  {
    title: "Built to Last",
    description: "[One line on maintainability and long-term support.]",
  },
];

export const steps = [
  { title: "Discover", description: "Understand the idea, goals, and requirements.", wave: "down" },
  { title: "Plan & Design", description: "Define the solution and shape the experience.", wave: "up" },
  {
    title: "Build",
    description: "Develop the product using thoughtful engineering practices.",
    wave: "down",
  },
  { title: "Launch & Improve", description: "Deliver, refine, and support the solution.", wave: null },
] as const;

export const projectTypes = [
  "Website",
  "Web application",
  "Custom software",
  "UI/UX design",
  "Maintenance & support",
  "Not sure yet",
];

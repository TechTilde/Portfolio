/** The tilde path from the logo (viewBox 0 0 100 100). */
export const TILDE_PATH =
  "M22 55 C27 46 32 41.5 38 41.5 C43.5 41.5 47 46 50 50 C53.5 54.5 57 58.5 62 58.5 C67.5 58.5 72 54 78 44.5";

/** The public contact address (forwarded by Cloudflare Email Routing). */
export const CONTACT_EMAIL = "contact@techtilde.com";

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

export type Project = {
  kind: string;
  media: "portfolio" | "qrMenu";
  name: string;
  description: string;
  tags: string[];
  /** Optional external link shown under the description. */
  link?: { label: string; href: string };
  reverse: boolean;
};

export const projects: Project[] = [
  {
    kind: "WEBSITE & ADMIN PANEL",
    media: "portfolio",
    name: "Portfolio Websites",
    description:
      "Business portfolio websites that clients can update themselves: edit content, reorder sections and switch themes from a simple admin panel, with no developer needed.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ASP.NET Core", "MySQL"],
    reverse: false,
  },
  {
    kind: "WEB APP",
    media: "qrMenu",
    name: "QR Menus for Cafés & Restaurants",
    description:
      "Guests scan a QR code at the table, browse the menu in English or Arabic, build a cart and send the order on WhatsApp. Staff update items, prices and availability themselves.",
    tags: ["React", "Tailwind CSS", "Firebase", "JavaScript"],
    reverse: true,
  },
];

/** People shown in the About terminal. Each line comes from what the person publishes about themselves. */
export const team = [
  {
    file: "sami",
    name: "Sami Farhat",
    href: "https://sami-farhat.vercel.app/",
    role: "Full-stack developer",
    line: "Builds web and mobile apps end to end: React, React Native, ASP.NET Core and PostgreSQL.",
  },
  {
    file: "ali",
    name: "Ali Alhasan",
    href: "https://www.linkedin.com/in/ali-alhasan-795a2b342/",
    role: "Full-stack developer",
    line: "Builds web and mobile apps with Laravel, React, React Native and PostgreSQL.",
  },
  {
    file: "mohammad",
    name: "Mohammad Steitieh",
    href: "https://md-mx.netlify.app/",
    role: "Security and AI engineer",
    line: "Works on vulnerability research, secure code review and custom developer tools.",
  },
];

export const principles = [
  {
    title: "Thoughtful Engineering",
    description: "We think before we build: clear requirements, clean code, and decisions we can explain.",
  },
  {
    title: "Direct Collaboration",
    description: "You work directly with the developers who build your product, with no account managers or middle layers.",
  },
  {
    title: "Built to Last",
    description: "Maintainable code and ongoing support, so your product keeps working well after launch.",
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

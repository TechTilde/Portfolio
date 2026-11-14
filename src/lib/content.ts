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

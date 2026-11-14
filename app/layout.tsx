import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-dm-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechTilde — Software Studio",
  description:
    "TechTilde is a small team of developers building websites, web applications and custom software for businesses.",
};

// Runs before first paint. Enables the scroll-reveal styles only when the visitor
// allows motion and the browser supports IntersectionObserver; otherwise all
// content stays visible and static.
const motionFlag = `if(window.IntersectionObserver&&(!window.matchMedia||!matchMedia('(prefers-reduced-motion: reduce)').matches)){document.documentElement.classList.add('tt-js')}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: the inline script below adds a class to <html> before hydration.
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${plexMono.variable} ${poppins.variable} bg-ink font-sans text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

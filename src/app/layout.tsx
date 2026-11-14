import type { Metadata } from "next";
import {
  DM_Sans,
  IBM_Plex_Mono,
  Poppins,
  Space_Grotesk,
} from "next/font/google";
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
const title = "TechTilde — Software Studio";
const description =
  "TechTilde is a small team of developers building websites, web applications and custom software for businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techtilde.com"),
  title: title,
  description: description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "TechTilde",
    title: title,
    description: description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
  },
};

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

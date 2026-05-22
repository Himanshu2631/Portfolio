import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Himanshu Sengar — Full Stack Developer Portfolio",
    template: "%s | Himanshu Sengar"
  },
  description: "B.Tech Information Technology student at ABES Engineering College specializing in Full Stack Development, React ecosystem, and DevOps-oriented workflows.",
  keywords: [
    "Himanshu Sengar",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "DevOps Projects",
    "Portfolio Website",
    "Himanshu Sengar Portfolio",
    "Web Engineering",
    "Software Engineer",
    "System Automation"
  ],
  authors: [{ name: "Himanshu Sengar" }],
  creator: "Himanshu Sengar",
  metadataBase: new URL("https://himanshu.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himanshu.dev",
    title: "Himanshu Sengar — Full Stack Developer Portfolio",
    description: "B.Tech Information Technology student at ABES Engineering College specializing in Full Stack Development, React ecosystem, and DevOps-oriented workflows.",
    siteName: "Himanshu Sengar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himanshu Sengar — Full Stack Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himanshu Sengar — Full Stack Developer Portfolio",
    description: "B.Tech Information Technology student at ABES Engineering College specializing in Full Stack Development, React ecosystem, and DevOps-oriented workflows.",
    images: ["/og-image.png"],
    creator: "@himanshusengar",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen bg-background text-foreground flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

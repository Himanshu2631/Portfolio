import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";

// Dynamically import below-the-fold components to improve initial loading performance
const Projects = dynamic(() => import("@/components/sections/Projects").then((mod) => mod.Projects), {
  ssr: true,
});

const Education = dynamic(() => import("@/components/sections/Education").then((mod) => mod.Education), {
  ssr: true,
});

const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact), {
  ssr: true,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

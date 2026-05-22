"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { FadeIn } from "@/components/common/Animated";
import { Code2, Server, Cloud, Terminal, Compass, Check } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="text-accent group-hover:scale-110 transition-transform duration-300" size={20} aria-hidden="true" />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Bootstrap", "Tailwind CSS", "Next.js"],
      colSpan: "md:col-span-3 lg:col-span-2",
    },
    {
      title: "Backend",
      icon: <Server className="text-accent group-hover:scale-110 transition-transform duration-300" size={20} aria-hidden="true" />,
      skills: ["Node.js", "Express.js", "MongoDB"],
      colSpan: "md:col-span-3 lg:col-span-2",
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="text-accent group-hover:scale-110 transition-transform duration-300" size={20} aria-hidden="true" />,
      skills: ["Docker", "Cloud Basics (AWS/Firebase)"],
      colSpan: "md:col-span-3 lg:col-span-2",
    },
    {
      title: "Tools",
      icon: <Terminal className="text-accent group-hover:scale-110 transition-transform duration-300" size={20} aria-hidden="true" />,
      skills: ["Git", "GitHub", "Postman", "npm"],
      colSpan: "md:col-span-3 lg:col-span-3",
    },
    {
      title: "Other",
      icon: <Compass className="text-accent group-hover:scale-110 transition-transform duration-300" size={20} aria-hidden="true" />,
      skills: ["API Integration", "Responsive Design"],
      colSpan: "md:col-span-6 lg:col-span-3",
    },
  ];

  const getSkillIcon = (skill) => {
    switch (skill) {
      case "HTML5":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#E34F26] shrink-0" aria-hidden="true" role="img">
            <path d="M4 2h16l-1.5 17-6.5 3-6.5-3L4 2z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 6H8v4h4v4l-2 .5L9 14h-1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "CSS3":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#1572B6] shrink-0" aria-hidden="true" role="img">
            <path d="M4 2h16l-1.5 17-6.5 3-6.5-3L4 2z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 6H8v4h8v4l-4 .8-4-.8v-1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "JavaScript (ES6+)":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#F7DF1E] shrink-0" aria-hidden="true" role="img">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M15 9h-2c-.5 0-1 .5-1 1v4c0 .5.5 1 1 1h2m-5-4v2c0 1 1 1.5 2 1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "React":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent shrink-0" aria-hidden="true" role="img">
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        );
      case "Bootstrap":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#7952B3] shrink-0" aria-hidden="true" role="img">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 7h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4v4h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H9V7z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "Tailwind CSS":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-[#38BDF8] shrink-0" aria-hidden="true" role="img">
            <path d="M12 12c-2.5 0-4 1.25-4.5 3.75 1-1.25 2.25-1.75 3.75-1.5 0.85 0.14 1.47 0.77 2.14 1.46C14.47 16.8 15.9 18.25 18.5 18.25c2.5 0 4-1.25 4.5-3.75-1 1.25-2.25 1.75-3.75 1.5-0.85-0.14-1.47-0.77-2.14-1.46C16.03 13.45 14.6 12 12 12zm-6.5-6c-2.5 0-4 1.25-4.5 3.75 1-1.25 2.25-1.75 3.75-1.5 0.85 0.14 1.47 0.77 2.14 1.46C7.97 10.8 9.4 12.25 12 12.25c2.5 0 4-1.25 4.5-3.75-1 1.25-2.25 1.75-3.75 1.5-0.85-0.14-1.47-0.77-2.14-1.46C9.53 7.45 8.1 6 5.5 6z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "Next.js":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-foreground shrink-0 animate-pulse" aria-hidden="true" role="img">
            <circle cx="12" cy="12" r="10" />
            <path d="M16 16L9.5 8M9 8v8h1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "Node.js":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#339933] shrink-0" aria-hidden="true" role="img">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 22V12m0 0L4 7m8 5l8-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "Express.js":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-muted shrink-0" aria-hidden="true" role="img">
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <circle cx="6" cy="8.5" r="1" fill="currentColor" />
            <circle cx="10" cy="8.5" r="1" fill="currentColor" />
            <circle cx="6" cy="15.5" r="1" fill="currentColor" />
            <circle cx="10" cy="15.5" r="1" fill="currentColor" />
          </svg>
        );
      case "MongoDB":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#47A248] shrink-0" aria-hidden="true" role="img">
            <path d="M12 2c0 0-5 4.5-5 9.5s5 10.5 5 10.5 5-5.5 5-10.5S12 2 12 2z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 2v20" strokeLinecap="round" />
          </svg>
        );
      case "Docker":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#2496ED] shrink-0" aria-hidden="true" role="img">
            <path d="M4 10h4v3H4zm5 0h4v3H9zm5 0h4v3h-4zM9 6h4v3H9z" />
            <path d="M2 16c2 1 5 1 8 0 5-1.5 8 1 11-2" strokeLinecap="round" />
          </svg>
        );
      case "Cloud Basics (AWS/Firebase)":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#FF9900] shrink-0" aria-hidden="true" role="img">
            <path d="M17.5 19A5.5 5.5 0 0 0 18 8h-1.26A8 8 0 1 0 3 16.28M17.5 19H9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "Git":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#F1502F] shrink-0" aria-hidden="true" role="img">
            <circle cx="18" cy="18" r="3" />
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M18 15V9a4 4 0 0 0-4-4h-5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="6" y1="9" x2="6" y2="15" strokeLinecap="round" />
          </svg>
        );
      case "GitHub":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-foreground shrink-0" aria-hidden="true" role="img">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 18c-4.51 2-5-2-7-2" strokeLinecap="round" />
          </svg>
        );
      case "Postman":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#FF6C37] shrink-0" aria-hidden="true" role="img">
            <path d="M4.5 16.5L12 3l7.5 13.5M12 3v13.5M8 12h8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "npm":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#CB3837] shrink-0" aria-hidden="true" role="img">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M8 8h8v8H8z" />
            <path d="M11 12h2v4h-2z" />
          </svg>
        );
      case "API Integration":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent shrink-0" aria-hidden="true" role="img">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "Responsive Design":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent shrink-0" aria-hidden="true" role="img">
            <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="8" y1="21" x2="16" y2="21" strokeLinecap="round" />
            <line x1="12" y1="17" x2="12" y2="21" strokeLinecap="round" />
          </svg>
        );
      default:
        return <Check size={14} className="text-accent shrink-0" aria-hidden="true" />;
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative scroll-mt-20 md:scroll-mt-24">
      <div className="section-divider" />
      <Container>
        <div className="mb-12 md:mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2 mb-3 select-none">
              <span className="h-[1px] w-6 bg-accent" />
              <span className="text-xs font-mono tracking-widest text-accent uppercase font-semibold">My Toolkit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              Skills & Technologies
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-muted text-sm sm:text-base max-w-xl leading-relaxed">
              My technical toolkit spans modern frontend frameworks, backend API services, automated scripting, and container-based deployment workflows.
            </p>
          </FadeIn>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className={`${category.colSpan} bg-card-bg border border-card-border hover:border-accent/30 rounded-xl p-5 sm:p-6 md:p-8 relative shadow-md flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group overflow-hidden`}
            >
              {/* Subtle hover gradient spotlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-background border border-card-border rounded-lg group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-sm text-muted font-medium hover:text-foreground transition-colors py-1.5 px-2 rounded-md hover:bg-background/40"
                    >
                      {getSkillIcon(skill)}
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

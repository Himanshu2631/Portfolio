"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { FadeIn } from "@/components/common/Animated";
import { Code2, Server, Terminal } from "lucide-react";

// ─── Skill data ────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code2,
    accent: true,           // visually prominent card
    skills: [
      { label: "React",           color: "#61DAFB" },
      { label: "Next.js",         color: "#ffffff" },
      { label: "JavaScript",      color: "#F7DF1E" },
      { label: "TypeScript",      color: "#3178C6" },
      { label: "HTML5",           color: "#E34F26" },
      { label: "CSS3",            color: "#1572B6" },
      { label: "Tailwind CSS",    color: "#38BDF8" },
      { label: "Bootstrap",       color: "#7952B3" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    accent: false,
    skills: [
      { label: "Node.js",         color: "#339933" },
      { label: "Express.js",      color: "#ffffff" },
      { label: "MongoDB",         color: "#47A248" },
      { label: "PostgreSQL",      color: "#336791" },
      { label: "REST APIs",       color: "#6E8EF7" },
      { label: "API Integration", color: "#6E8EF7" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    icon: Terminal,
    accent: false,
    skills: [
      { label: "Docker",          color: "#2496ED" },
      { label: "Git",             color: "#F1502F" },
      { label: "GitHub",          color: "#ffffff" },
      { label: "AWS (Basics)",    color: "#FF9900" },
      { label: "Firebase",        color: "#FFCA28" },
      { label: "Postman",         color: "#FF6C37" },
      { label: "npm",             color: "#CB3837" },
      { label: "Linux CLI",       color: "#a0a0a0" },
    ],
  },
];

// ─── Animation config ──────────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ─── Section Component ─────────────────────────────────────────────────────────

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 md:py-24 relative scroll-mt-20 md:scroll-mt-24"
    >
      <div className="section-divider" />

      <Container>
        {/* Heading */}
        <div className="mb-10 md:mb-14">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2.5 mb-3.5 select-none">
              <span className="h-[1px] w-6 bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase font-semibold">
                My Toolkit
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight leading-[1.12] text-white mb-4">
              Skills &amp; Technologies
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-muted text-base leading-relaxed max-w-lg font-light">
              Full-stack skill set spanning modern UI frameworks, backend services,
              and container-based deployment workflows.
            </p>
          </FadeIn>
        </div>

        {/* Cards grid - direct mapping to motion.div to ensure Framer Motion's stagger / whileInView propagates correctly */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isAccent = category.accent;

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className={`
                  group relative rounded-xl p-5 sm:p-6
                  border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:-translate-y-1 hover:shadow-xl
                  ${isAccent
                    ? "bg-[#0f121a] border-accent/40 hover:border-accent/70 shadow-accent/5"
                    : "bg-[#121214] border-[#1f1f23] hover:border-[#3a3a3c]"
                  }
                `}
              >
                {/* Spotlight hover effect */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: isAccent
                      ? "radial-gradient(350px circle at 50% 0%, rgba(99,179,237,0.08) 0%, transparent 70%)"
                      : "radial-gradient(350px circle at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`
                          p-2 rounded-lg border transition-all duration-300
                          ${isAccent
                            ? "bg-accent/10 border-accent/30 group-hover:bg-accent/20 group-hover:border-accent/50"
                            : "bg-[#18181b] border-[#27272a] group-hover:border-[#3f3f46]"
                          }
                        `}
                      >
                        <Icon
                          size={18}
                          className={isAccent ? "text-accent" : "text-muted group-hover:text-foreground transition-colors duration-300"}
                          aria-hidden="true"
                        />
                      </div>
                      
                      <h3
                        className={`text-base font-bold font-heading tracking-tight ${
                          isAccent ? "text-foreground font-bold" : "text-muted group-hover:text-foreground transition-colors duration-300"
                        }`}
                      >
                        {category.title}
                      </h3>
                      
                      {isAccent && (
                        <span className="ml-auto text-[9px] font-mono text-accent/80 tracking-[0.15em] uppercase select-none px-2.5 py-0.5 bg-accent/5 rounded border border-accent/10">
                          Primary
                        </span>
                      )}
                    </div>

                    {/* Chips */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill.label}
                          whileHover={{ scale: 1.04, y: -1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 22 }}
                          className={`
                            inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium select-none cursor-default transition-colors duration-200
                            ${isAccent 
                              ? "bg-[#161b26] border-[#222a3a] text-foreground hover:border-[#38455e]"
                              : "bg-[#18181b]/80 border-[#27272a] text-muted hover:text-foreground hover:border-[#3f3f46]"
                            }
                            border
                          `}
                        >
                          <span
                            style={{ backgroundColor: skill.color }}
                            className="w-1.5 h-1.5 rounded-full shrink-0 opacity-80"
                            aria-hidden="true"
                          />
                          {skill.label}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

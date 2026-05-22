"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowRight, Terminal } from "lucide-react";

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      },
    },
  };

  const terminalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98, x: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden grid-bg">
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Side: Profile & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-accent-muted text-accent border border-accent/10 mb-6 tracking-wide"
            >
              <Terminal size={12} />
              Open to projects & collaboration
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground mb-4"
            >
              Hi, I&apos;m <span className="text-white">Himanshu</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-accent mb-6"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted max-w-lg leading-relaxed mb-10"
            >
              I design and engineer minimal, highly optimized web applications. Focused on clean state management, modular architectures, and smooth interactive design.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button variant="primary" href="#projects" icon={<ArrowRight size={16} />}>
                View Projects
              </Button>
              <Button variant="secondary" href="#contact">
                Contact Me
              </Button>
            </motion.div>
          </div>

          {/* Right Side: Code Window Terminal */}
          <motion.div
            variants={terminalVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 w-full flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md bg-[#0b0b0c] border border-card-border rounded-xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-foreground/80">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d0e] border-b border-card-border select-none">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="text-muted-dark text-xs">himanshu.ts</span>
                <div className="w-12" />
              </div>

              {/* Window Code Content */}
              <div className="p-5 sm:p-6 space-y-4 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                  <div className="pl-4 sm:pl-6">
                    <span className="text-sky-300">name</span>:{" "}
                    <span className="text-emerald-400">&apos;Himanshu&apos;</span>,
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <span className="text-sky-300">role</span>:{" "}
                    <span className="text-emerald-400">&apos;Full Stack Developer&apos;</span>,
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <span className="text-sky-300">skills</span>: [
                    <div className="pl-4 sm:pl-6 text-emerald-400">
                      &apos;TypeScript&apos;, &apos;Next.js&apos;,<br />
                      &apos;TailwindCSS&apos;, &apos;NodeJS&apos;,<br />
                      &apos;PostgreSQL&apos;, &apos;FramerMotion&apos;
                    </div>
                    ],
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <span className="text-sky-300">focus</span>:{" "}
                    <span className="text-emerald-400">&apos;Clean Code & Performance&apos;</span>
                  </div>
                  {"};"}
                </div>

                <div className="pt-2 border-t border-card-border/40">
                  <span className="text-purple-400">function</span>{" "}
                  <span className="text-blue-400">getPhilosophy</span>() {"{"}
                  <div className="pl-4 sm:pl-6">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-blue-400">developer</span>.
                    <span className="text-sky-300">focus</span>;
                  </div>
                  {"}"}
                </div>

                <div className="pt-1 text-muted-dark select-none flex items-center gap-1">
                  <span>$</span>
                  <span className="w-1.5 h-4 bg-accent animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

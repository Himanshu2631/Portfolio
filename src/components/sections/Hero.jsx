"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowRight, FileText } from "lucide-react";

export const Hero = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
  };

  const terminalVariants = {
    hidden: { opacity: 0, scale: 0.98, x: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-bg">
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
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-[10px] font-mono uppercase tracking-[0.18em] bg-card-bg text-muted border border-card-border mb-6 select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for work
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl md:text-8xl font-extrabold font-heading tracking-tight leading-[0.98] text-foreground mb-4"
            >
              Hi, I&apos;m <span className="text-white">Himanshu Sengar</span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-semibold font-heading tracking-tight text-accent mb-6"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-foreground max-w-2xl leading-relaxed mb-4 font-light"
            >
              Building scalable <strong className="text-white font-semibold">web applications</strong>, automation systems, and deployment-focused solutions using modern <strong className="text-white font-semibold">frontend and backend</strong> technologies.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-muted max-w-xl leading-relaxed mb-8 font-light"
            >
              Focused on <strong className="text-white/80 font-medium">React ecosystems</strong>, DevOps-oriented workflows, and real-world software engineering projects.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button variant="primary" href="#projects" icon={<ArrowRight size={16} />}>
                View Projects
              </Button>
              <Button variant="secondary" href="/Himanshu_Sengar_Resume.pdf" icon={<FileText size={16} />} iconPosition="left">
                View Resume
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
                <span className="text-muted-dark text-xs">himanshu.js</span>
                <div className="w-12" />
              </div>

              {/* Window Code Content */}
              <div className="p-4 sm:p-6 space-y-4 overflow-x-auto leading-relaxed">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                  <div className="pl-4 sm:pl-6">
                    <span className="text-sky-300">name</span>:{" "}
                    <span className="text-emerald-400">&apos;Himanshu Sengar&apos;</span>,
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <span className="text-sky-300">role</span>:{" "}
                    <span className="text-emerald-400">&apos;Full Stack Developer&apos;</span>,
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <span className="text-sky-300">skills</span>: [
                    <div className="pl-4 sm:pl-6 text-emerald-400">
                      &apos;React&apos;, &apos;Next.js&apos;, &apos;Node.js&apos;,<br />
                      &apos;TypeScript&apos;, &apos;DevOps&apos;, &apos;PostgreSQL&apos;
                    </div>
                    ],
                  </div>
                  <div className="pl-4 sm:pl-6">
                    <span className="text-sky-300">focus</span>:{" "}
                    <span className="text-emerald-400">&apos;React, DevOps & Scalability&apos;</span>
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

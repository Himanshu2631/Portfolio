"use client";

import React from "react";
import Image from "next/image";
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden grid-bg bg-[#050505]"
    >
      {/* Top subtle highlight border for modern SaaS aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      <Container className="relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Side: Profile & Details */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
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
            </motion.div>
          </div>

          {/* Right Side: Portrait Image with Glow & Edge Fades */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 w-full flex justify-center lg:justify-end relative order-1 lg:order-2 mt-4 lg:mt-0"
          >
            {/* Subtle blue accent glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[420px] lg:h-[420px] rounded-full portrait-glow pointer-events-none z-0" />
            
            {/* Accent spotlight glow */}
            <div className="absolute top-[10%] right-[10%] w-60 h-60 rounded-full bg-accent/15 blur-[80px] pointer-events-none z-0" />

            {/* Portrait container with subtle depth hover animation */}
            <motion.div 
              whileHover={{ 
                y: -6, 
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="relative z-10 w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] aspect-[4/5] overflow-hidden rounded-3xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] portrait-fade-mask bg-[#08080a]"
            >
              <Image
                src="/images/himanshu-portrait.jpeg"
                alt="Himanshu Sengar - Full Stack Developer"
                width={420}
                height={525}
                priority
                className="w-full h-full object-cover object-top select-none transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};


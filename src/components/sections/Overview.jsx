"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { GraduationCap, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Overview = () => {
  return (
    <section id="overview" className="py-8 md:py-12 scroll-mt-20 md:scroll-mt-24 relative grid-bg bg-[#050505]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto w-full">
          
          {/* Card 1: Education */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            initial="hidden"
            animate="show"
            whileHover={{ y: -5, scale: 1.005 }}
            className="bg-card-bg border border-card-border hover:border-accent/30 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.08)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <span className="pointer-events-none absolute -top-px left-8 h-px w-16 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-background border border-card-border rounded-xl group-hover:border-accent/35 group-hover:bg-accent/5 transition-all duration-300 shrink-0">
                  <GraduationCap className="text-accent transition-transform duration-300 group-hover:scale-110" size={22} />
                </div>
                <span className="text-[10px] font-mono tracking-[0.22em] text-muted-dark uppercase select-none">
                  Education
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-foreground mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                B.Tech Information Technology
              </h3>
              
              <div className="space-y-2 font-light">
                <p className="text-[14px] text-foreground/90 font-medium">
                  ABES Engineering College
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-muted">
                  <span>2023–2027</span>
                  <span className="text-muted-dark font-normal">•</span>
                  <span className="text-accent font-semibold bg-accent-muted px-2 py-0.5 rounded text-xs border border-accent/10">
                    CGPA: 7.1
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Focus Area */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 },
              },
            }}
            initial="hidden"
            animate="show"
            whileHover={{ y: -5, scale: 1.005 }}
            className="bg-card-bg border border-card-border hover:border-accent/30 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.08)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <span className="pointer-events-none absolute -top-px left-8 h-px w-16 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-background border border-card-border rounded-xl group-hover:border-accent/35 group-hover:bg-accent/5 transition-all duration-300 shrink-0">
                  <Code2 className="text-accent transition-transform duration-300 group-hover:scale-110" size={22} />
                </div>
                <span className="text-[10px] font-mono tracking-[0.22em] text-muted-dark uppercase select-none">
                  Focus Area
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-foreground mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                Full-Stack Development
              </h3>
              
              <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed font-light">
                Modern web applications, automation systems, and deployment workflows.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Availability */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.16 },
              },
            }}
            initial="hidden"
            animate="show"
            whileHover={{ y: -5, scale: 1.005 }}
            className="bg-card-bg border border-card-border hover:border-accent/30 hover:shadow-[0_12px_30px_-10px_rgba(59,130,246,0.08)] rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <span className="pointer-events-none absolute -top-px left-8 h-px w-16 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-background border border-card-border rounded-xl group-hover:border-emerald-400/35 group-hover:bg-emerald-500/5 transition-all duration-300 shrink-0 relative">
                  <Sparkles className="text-emerald-400 transition-transform duration-300 group-hover:scale-110" size={22} />
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </span>
                </div>
                <span className="text-[10px] font-mono tracking-[0.22em] text-muted-dark uppercase select-none">
                  Availability
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-foreground mb-3 leading-snug group-hover:text-emerald-400 transition-colors duration-300">
                Open to Opportunities
              </h3>
              
              <p className="text-[13px] sm:text-[14px] text-muted leading-relaxed font-light">
                Software Development Internships & Collaborations
              </p>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

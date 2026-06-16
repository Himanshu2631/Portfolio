"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { FadeIn, StaggerContainer } from "@/components/common/Animated";
import { GraduationCap, Award, Calendar, BarChart3, Award as CertIcon, Sparkles, Terminal, ShieldAlert, Cpu } from "lucide-react";

export const Education = () => {
  const shouldReduceMotion = useReducedMotion();
  const actualDistance = shouldReduceMotion ? 0 : 15;

  const timelineItems = [
    {
      type: "project",
      title: "Docker DevOps Dashboard",
      institution: "DevOps Observability Platform",
      period: "Q1 2026",
      description: "A real-time Docker observability and infrastructure monitoring platform engineered for containerized infrastructure visibility and DevOps workflows.",
      tag: "Infrastructure",
      tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/15",
      icon: <Terminal className="text-blue-400" size={16} />,
    },
    {
      type: "project",
      title: "CredLens Platform Launch",
      institution: "Credibility Scoring Engine",
      period: "Q4 2025",
      description: "A modern intelligent credibility analysis platform featuring a high-performance frontend architecture, scalable UI systems, and polished user experiences.",
      tag: "Product Launch",
      tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/15",
      icon: <Sparkles className="text-emerald-400" size={16} />,
    },
    {
      type: "experience",
      title: "Smart India Hackathon (SIH) 2024",
      institution: "Team Participant",
      period: "2024",
      description: "Collaborated in a team environment to design and prototype software solutions addressing real-world problem statements.",
      tag: "Hackathon",
      tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/15",
      icon: <Award className="text-amber-400" size={16} />,
    },
    {
      type: "project",
      title: "Faculty Feedback Automation",
      institution: "College Administration Systems",
      period: "Q2 2025",
      description: "An automated faculty evaluation platform designed to collect, process, and analyze student feedback securely with efficient administrative reporting.",
      tag: "Automation",
      tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/15",
      icon: <Cpu className="text-purple-400" size={16} />,
    },
    {
      type: "experience",
      title: "College Event Coordination Assistant",
      institution: "Campus Events Team",
      period: "2023 - Present",
      description: "Supported event organization, logistical execution, and team coordination for campus events and technical meets.",
      tag: "Coordination",
      tagColor: "text-accent bg-accent-muted border-accent/15",
      icon: <Award className="text-accent" size={16} />,
    },
    {
      type: "education",
      title: "B.Tech in Information Technology",
      institution: "ABES Engineering College",
      period: "2023 – 2027",
      metric: "CGPA: 7.1",
      tag: "Academics",
      tagColor: "text-accent bg-accent-muted border-accent/15",
      icon: <GraduationCap className="text-accent" size={16} />,
    },
  ];

  const certifications = [
    {
      title: "Full-Stack Development 101",
      issuer: "Simplilearn",
      date: "Jan 2025",
      credId: "SL-FSD-101-923A",
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM Cognitive Class",
      date: "Dec 2024",
      credId: "IBM-ML-PY-887B",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: actualDistance },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.25 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="journey" className="py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 relative">
      <div className="section-divider" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Timeline */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <FadeIn direction="up" delay={0.1}>
                <div className="flex items-center gap-2.5 mb-3.5 select-none">
                  <span className="h-[1px] w-6 bg-accent" />
                  <span className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase font-semibold">Timeline</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight leading-[1.12] text-white mb-4">
                  Professional Journey
                </h2>
                <p className="text-muted text-base leading-relaxed max-w-lg font-light">
                  A timeline tracking technical projects, academic path, and team competition participations.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer as="ol" className="relative border-l border-card-border/80 ml-3 sm:ml-4 space-y-10">
              {/* Vertical glowing path gradient line */}
              <div className="absolute top-2 bottom-2 left-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-accent via-accent/40 to-card-border pointer-events-none" />

              {timelineItems.map((item, index) => (
                <motion.li
                  key={item.title + index}
                  variants={itemVariants}
                  className="relative group pl-6 sm:pl-8"
                >
                  {/* Timeline Node Icon wrapper */}
                  <div
                    className="absolute left-0 -translate-x-1/2 top-1.5 w-8 h-8 rounded-lg bg-[#0b0b0c] border border-card-border flex items-center justify-center pointer-events-none group-hover:border-accent/50 group-hover:bg-accent/5 group-hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_12px_rgba(0,0,0,0.5)]"
                  >
                    {item.icon}
                  </div>

                  <div className="flex flex-col gap-2 mb-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                          {item.title}
                        </h3>
                        {item.tag && (
                          <span className={`inline-flex items-center text-[9px] font-mono font-medium uppercase tracking-wide px-2 py-0.5 rounded-md border ${item.tagColor}`}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted bg-[#0e0e0f] border border-card-border px-2.5 py-1 rounded-md">
                          <Calendar size={11} className="text-muted/65" />
                          {item.period}
                        </span>
                        {item.metric && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-accent font-semibold bg-accent-muted border border-accent/15 px-2.5 py-0.5 rounded-md">
                            <BarChart3 size={11} />
                            {item.metric}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-dark font-semibold">
                      {item.institution}
                    </p>
                  </div>

                  {item.description && (
                    <p className="text-lg text-foreground/85 leading-relaxed max-w-[650px] font-light">
                      {item.description}
                    </p>
                  )}
                </motion.li>
              ))}
            </StaggerContainer>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-5">
            <div className="mb-10">
              <FadeIn direction="up" delay={0.2}>
                <div className="flex items-center gap-2.5 mb-3.5 select-none">
                  <span className="h-[1px] w-6 bg-accent" />
                  <span className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase font-semibold">Credentials</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight leading-[1.12] text-white mb-4">
                  Certifications
                </h2>
                <p className="text-muted text-base leading-relaxed font-light">
                  Industry training and credential milestones validating fundamental skills.
                </p>
              </FadeIn>
            </div>

            <motion.div
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title + index}
                  variants={itemVariants}
                  className="bg-card-bg border border-card-border hover:border-accent/30 rounded-xl p-5 relative overflow-hidden group shadow-md hover:-translate-y-0.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                >
                  {/* Subtle hover gradient spotlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="p-2.5 bg-background border border-card-border rounded-lg group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300 shrink-0">
                      <CertIcon className="text-accent" size={18} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted font-medium">
                        {cert.issuer}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1.5">
                        <span className="text-[10px] text-muted-dark font-mono bg-background px-2 py-0.5 rounded border border-card-border">
                          Issued {cert.date}
                        </span>
                        <span className="text-[9px] text-muted-dark font-mono">
                          ID: {cert.credId}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

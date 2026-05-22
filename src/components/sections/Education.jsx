"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { FadeIn, StaggerContainer } from "@/components/common/Animated";
import { GraduationCap, Award, Calendar, BarChart3, Award as CertIcon } from "lucide-react";

export const Education = () => {
  const shouldReduceMotion = useReducedMotion();
  const actualDistance = shouldReduceMotion ? 0 : 15;

  const timelineItems = [
    {
      type: "education",
      title: "B.Tech in Information Technology",
      institution: "ABES Engineering College",
      period: "2023 – 2027",
      metric: "CGPA: 7.1",
      icon: <GraduationCap className="text-accent" size={16} />,
    },
    {
      type: "experience",
      title: "Smart India Hackathon (SIH) 2024",
      institution: "Team Participant",
      period: "2024",
      description: "Collaborated in a team environment to design and prototype software solutions addressing real-world problem statements.",
      icon: <Award className="text-accent" size={16} />,
    },
    {
      type: "experience",
      title: "College Event Coordination Assistant",
      institution: "Campus Events Team",
      period: "2023 - Present",
      description: "Supported event organization, logistical execution, and team coordination for campus events and technical meets.",
      icon: <Award className="text-accent" size={16} />,
    },
  ];

  const certifications = [
    {
      title: "Full-Stack Development 101",
      issuer: "Simplilearn",
      date: "Jan 2025",
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM Cognitive Class",
      date: "Dec 2024",
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
    <section id="education" className="py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 relative">
      <div className="section-divider" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Education & Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="mb-10">
              <FadeIn direction="up" delay={0.1}>
                <div className="flex items-center gap-2 mb-3 select-none">
                  <span className="h-[1px] w-6 bg-accent" />
                  <span className="text-xs font-mono tracking-widest text-accent uppercase font-semibold">Journey</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                  Education & Experience
                </h2>
              </FadeIn>
            </div>

            <StaggerContainer as="ol" className="relative border-l border-card-border ml-3 sm:ml-4 space-y-10">
              {timelineItems.map((item, index) => (
                <motion.li
                  key={item.title + index}
                  variants={itemVariants}
                  className="relative group pl-6 sm:pl-8"
                >
                  {/* Timeline Node Icon */}
                  <div
                    className="absolute left-0 -translate-x-1/2 top-1.5 w-7 h-7 rounded-lg bg-[#0b0b0c] border border-card-border flex items-center justify-center pointer-events-none group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    {item.icon}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted font-medium mt-0.5">
                        {item.institution}
                      </p>
                    </div>
                    
                    <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-muted bg-[#0e0e0f] border border-card-border px-2.5 py-1 rounded-md">
                        <Calendar size={11} className="text-muted/65" />
                        {item.period}
                      </span>
                      {item.metric && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-accent font-semibold bg-accent-muted border border-accent/15 px-2.5 py-0.5 rounded-md mt-1">
                          <BarChart3 size={11} />
                          {item.metric}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-sm text-muted leading-relaxed max-w-2xl font-light">
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
                <div className="flex items-center gap-2 mb-3 select-none">
                  <span className="h-[1px] w-6 bg-accent" />
                  <span className="text-xs font-mono tracking-widest text-accent uppercase font-semibold">Credentials</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                  Certifications
                </h2>
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
                      <p className="text-[11px] text-muted-dark font-mono mt-1">
                        Issued {cert.date}
                      </p>
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

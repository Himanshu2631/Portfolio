"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { FadeIn, StaggerContainer } from "@/components/common/Animated";
import { MapPin, GraduationCap, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Overview = () => {
  const items = [
    {
      icon: <MapPin className="text-accent" size={20} />,
      label: "Location",
      value: "Delhi NCR, India",
      description: "Open to relocation & remote work",
      pulse: false,
    },
    {
      icon: <GraduationCap className="text-accent" size={20} />,
      label: "Education",
      value: "B.Tech in IT",
      description: "ABES Engineering College (2023 - 2027)",
      pulse: false,
    },
    {
      icon: <Code2 className="text-accent" size={20} />,
      label: "Focus Area",
      value: "Full-Stack Dev & DevOps",
      description: "React ecosystems & containerization",
      pulse: false,
    },
    {
      icon: <Sparkles className="text-emerald-400" size={20} />,
      label: "Availability",
      value: "Open for Internships",
      description: "Available for junior dev positions",
      pulse: true,
    },
  ];

  return (
    <section id="overview" className="py-12 md:py-16 scroll-mt-20 md:scroll-mt-24 relative grid-bg">
      <Container>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="bg-card-bg border border-card-border hover:border-accent/25 hover:shadow-[0_0_24px_0_rgba(59,130,246,0.06)] rounded-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {/* Subtle top light edge */}
              <span className="pointer-events-none absolute -top-px left-8 h-px w-16 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 bg-background border border-card-border rounded-lg group-hover:border-accent/30 ${item.pulse ? 'group-hover:bg-emerald-500/5' : 'group-hover:bg-accent/5'} transition-all duration-300 shrink-0 relative`}>
                    {item.icon}
                    {item.pulse && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400">
                        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.22em] text-muted-dark uppercase select-none">
                    {item.label}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-foreground mb-1.5 leading-snug group-hover:text-accent transition-colors duration-300">
                  {item.value}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { FadeIn } from "@/components/common/Animated";
import { GraduationCap, Code2, Layers, Target } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-accent shrink-0" size={16} />,
      label: "Education",
      value: "B.Tech in Information Technology — ABES Engineering College (2023–2027)",
    },
    {
      icon: <Code2 className="text-accent shrink-0" size={16} />,
      label: "Focus Areas",
      value: "Full Stack Development, Automation Platforms, DevOps-oriented Workflows, Scalable UI Architecture",
    },
    {
      icon: <Layers className="text-accent shrink-0" size={16} />,
      label: "Technical Interests",
      value: "React Ecosystem, API Integration, Cloud Basics, Infrastructure Monitoring",
    },
    {
      icon: <Target className="text-accent shrink-0" size={16} />,
      label: "Career Direction",
      value: "Actively building real-world projects & pursuing software development internships",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 relative scroll-mt-20 md:scroll-mt-24">
      <div className="section-divider" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Header & Bio */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.1}>
              <div className="flex items-center gap-2.5 mb-3.5 select-none">
                <span className="h-[1px] w-6 bg-accent" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase font-semibold">About Me</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight leading-[1.12] text-white mb-6">
                Engineering modern, scalable web applications.
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="space-y-6 text-foreground/90 text-lg leading-relaxed max-w-2xl font-light">
              <p>
                I am a B.Tech student in Information Technology at <strong className="text-white font-medium">ABES Engineering College (2023–2027)</strong>, focusing on modern software engineering principles and full-stack development. I build tools that automate workflows, streamline deployments, and deliver high-performance user interfaces.
              </p>
              <p>
                My approach combines clean frontend architectures within the <strong className="text-white font-medium">React ecosystem</strong> with robust backend logic and automated workflows. I am dedicated to clean code, performance optimization, and implementing scalable systems.
              </p>
              <p>
                Currently, I am actively building real-world projects and pursuing <strong className="text-accent font-semibold">software development internship</strong> opportunities where I can apply my technical skillset to production-grade environments.
              </p>
            </FadeIn>
          </div>

          {/* Quick Info / Recruiter Details */}
          <div className="lg:col-span-5 bg-card-bg border border-card-border rounded-xl p-5 sm:p-6 md:p-8 space-y-6 relative overflow-hidden">
            <FadeIn direction="up" delay={0.3}>
              <h3 className="text-sm font-semibold tracking-wider text-muted uppercase mb-4">
                Professional Profile
              </h3>
            </FadeIn>

            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <FadeIn
                  key={idx}
                  direction="up"
                  delay={0.35 + idx * 0.05}
                  className="flex gap-3.5 items-start p-3 rounded-lg hover:bg-background/40 transition-colors"
                >
                  <div className="p-2 bg-background border border-card-border rounded-lg mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground/60 mb-0.5">
                      {item.label}
                    </h4>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};


"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { FadeIn } from "@/components/common/Animated";

export const About = () => {
  const skills = [
    "TypeScript", "React / Next.js", "Node.js", "Tailwind CSS",
    "Framer Motion", "PostgreSQL", "Git & CI/CD", "Web Vitals"
  ];

  return (
    <section id="about" className="py-24 border-t border-card-border relative">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Header & Bio */}
          <div className="md:col-span-7">
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                About Me
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
              <p>
                I am a developer driven by creating digital experiences that feel smooth, fast, and elegant. I enjoy bridging the gap between design systems and code engineering.
              </p>
              <p>
                My work centers around modern web tech, focusing heavily on Next.js, React, TypeScript, and Tailwind CSS. I care deeply about performance optimization, clean state management, and accessibility.
              </p>
            </FadeIn>
          </div>

          {/* Tech Stack / Skills */}
          <div className="md:col-span-5">
            <FadeIn direction="up" delay={0.3}>
              <h3 className="text-sm font-semibold tracking-wider text-muted-dark uppercase mb-6">
                Technical Toolkit
              </h3>
            </FadeIn>
            
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <FadeIn
                  key={skill}
                  direction="up"
                  delay={0.1 + index * 0.05}
                  className="bg-card-bg border border-card-border px-4 py-3 rounded-lg text-sm text-foreground/80 font-medium hover:border-accent/40 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

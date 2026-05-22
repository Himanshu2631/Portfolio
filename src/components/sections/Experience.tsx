"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { FadeIn, StaggerContainer } from "@/components/common/Animated";

export const Experience = () => {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Tech Corp",
      period: "2024 - Present",
      description: "Spearheaded frontend application architectures, led Next.js migrations, and implemented custom component systems improving load times by 40%."
    },
    {
      role: "Software Developer",
      company: "Creative Studio",
      period: "2022 - 2024",
      description: "Crafted interactive marketing templates, motion graphics pipelines, and internal management portals with React and TypeScript."
    }
  ];

  return (
    <section id="experience" className="py-24 border-t border-card-border relative">
      <Container>
        <div className="mb-12">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
              Work History
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-muted text-sm max-w-lg">
              A brief timeline of my professional journey in software engineering.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="relative border-l border-card-border ml-3 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.role + index} className="relative group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-card-border group-hover:border-accent transition-colors duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-accent transition-colors duration-300" />
              </div>
              
              <FadeIn direction="up" delay={index * 0.1}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-muted-dark sm:self-start bg-card-bg border border-card-border px-2.5 py-1 rounded-md">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-sm text-muted leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </FadeIn>
            </div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { FadeIn, StaggerContainer } from "@/components/common/Animated";
import { ArrowUpRight, FolderOpen } from "lucide-react";

export const Projects = () => {
  const featuredProjects = [
    {
      title: "Project Alpha",
      description: "A high-performance SaaS dashboard featuring real-time telemetry, data virtualization, and complex visualization panels.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
      link: "#"
    },
    {
      title: "Project Beta",
      description: "Minimalist portfolio generator utilizing MDX, static regeneration, and lightweight layout models for optimal lighthouse performance.",
      tags: ["React", "Static Site", "Tailwind CSS", "MDX"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 border-t border-card-border relative">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
                Featured Projects
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-muted text-sm max-w-lg">
                A selection of applications and utilities built focusing on speed, clean layout, and rich user experiences.
              </p>
            </FadeIn>
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="group bg-card-bg border border-card-border hover:border-accent/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative glow-effect"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 bg-background border border-card-border text-accent rounded-lg group-hover:border-accent/25 transition-all">
                    <FolderOpen size={20} />
                  </div>
                  <a
                    href={project.link}
                    className="text-muted hover:text-white transition-colors p-1"
                    aria-label={`View ${project.title}`}
                  >
                    <ArrowUpRight size={20} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-dark border border-muted-dark/30 bg-background/50 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
};

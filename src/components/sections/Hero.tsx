"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/Animated";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden grid-bg">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 text-center">
        <FadeIn direction="up" delay={0.1} distance={30}>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accent-muted text-accent border border-accent/10 mb-6">
            Available for new opportunities
          </span>
        </FadeIn>

        <FadeIn direction="up" delay={0.2} distance={30}>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1] mb-6 text-foreground">
            Building premium, performance-driven web products
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} distance={30}>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10">
            Hi, I&apos;m a software engineer crafting clean code and interfaces. I focus on minimalist design, smooth interactions, and robust architectures.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.4} distance={30}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" href="#projects" icon={<ArrowRight size={16} />}>
              View my work
            </Button>
            <Button variant="secondary" href="#contact">
              Let&apos;s connect
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

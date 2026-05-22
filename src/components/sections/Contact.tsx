"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/Animated";
import { Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-card-border relative overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Get In Touch
            </h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-10">
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me an email or find me online!
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className="inline-flex justify-center">
            <Button
              variant="primary"
              size="lg"
              href="mailto:hello@example.com"
              icon={<Mail size={18} />}
              iconPosition="left"
            >
              hello@example.com
            </Button>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
};

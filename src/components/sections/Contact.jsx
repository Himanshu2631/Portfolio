"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { FadeIn, StaggerContainer } from "@/components/common/Animated";
import { Mail, Github, Linkedin, FileText, ArrowUpRight, MapPin, User } from "lucide-react";

export const Contact = () => {
  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 relative overflow-hidden">
      <div className="section-divider" />
      {/* Soft background blue radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/3 blur-[150px] rounded-full pointer-events-none -z-10" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details & Info */}
          <div className="lg:col-span-7 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <div className="flex items-center gap-2 mb-3 select-none">
                <span className="h-[1px] w-6 bg-accent" />
                <span className="text-xs font-mono tracking-widest text-accent uppercase font-semibold">Contact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
                Let&apos;s Connect
              </h2>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2} className="space-y-4">
              <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                Open to internship opportunities, collaboration, and software development roles. Feel free to reach out to discuss potential projects, ask questions, or just say hello.
              </p>
              
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted font-medium">
                  <div className="p-2 bg-[#0b0b0c] border border-card-border rounded-lg text-accent">
                    <User size={16} />
                  </div>
                  <span className="text-foreground">Himanshu Sengar</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted font-medium">
                  <div className="p-2 bg-[#0b0b0c] border border-card-border rounded-lg text-accent">
                    <MapPin size={16} />
                  </div>
                  <span>Ghaziabad, Uttar Pradesh</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Actions Buttons */}
          <div className="lg:col-span-5 bg-card-bg border border-card-border rounded-xl p-6 sm:p-8 space-y-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/3 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <FadeIn direction="up" delay={0.3}>
              <h3 className="text-sm font-semibold tracking-wider text-muted uppercase mb-4">
                Direct Channels
              </h3>
            </FadeIn>

            <StaggerContainer className="flex flex-col gap-3.5">
              <motion.div variants={buttonVariants}>
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:himanshusengar235@gmail.com"
                  icon={<Mail size={16} />}
                  iconPosition="left"
                  className="w-full justify-start text-xs sm:text-sm font-semibold"
                >
                  himanshusengar235@gmail.com
                </Button>
              </motion.div>
              
              <motion.div variants={buttonVariants}>
                <Button
                  variant="secondary"
                  size="md"
                  href="https://github.com/Himanshu2631"
                  icon={<Github size={16} />}
                  iconPosition="left"
                  className="w-full justify-start text-xs sm:text-sm"
                >
                  GitHub Profile
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Button
                  variant="secondary"
                  size="md"
                  href="https://linkedin.com/in/himanshusengar"
                  icon={<Linkedin size={16} />}
                  iconPosition="left"
                  className="w-full justify-start text-xs sm:text-sm"
                >
                  LinkedIn Connection
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Button
                  variant="outline"
                  size="md"
                  href="/HimanshuSengar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<FileText size={16} />}
                  iconPosition="left"
                  className="w-full justify-start text-xs sm:text-sm"
                >
                  View Resume
                  <ArrowUpRight size={12} className="ml-auto opacity-60" />
                </Button>
              </motion.div>
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </section>
  );
};

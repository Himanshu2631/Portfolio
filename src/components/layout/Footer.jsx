import React from "react";
import { Container } from "@/components/common/Container";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com/Himanshu2631", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/himanshusengar", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "mailto:himanshusengar235@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-background py-10">
      <div className="section-divider" />
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground text-sm tracking-wide">Himanshu Sengar</span>
            <span className="text-muted-dark">•</span>
            <p className="text-xs text-muted">
              &copy; {currentYear}. Built for performance.
            </p>
          </div>
          <p className="text-xs text-muted-dark">
            Designed & Engineered with Next.js, Tailwind and Framer Motion.
          </p>
        </div>

        {/* Recruiter-Ready Availability Telemetry Status */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase select-none tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for new opportunities
        </div>
        
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card-bg border border-card-border text-muted hover:text-accent hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
};

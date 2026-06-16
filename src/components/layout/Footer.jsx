import React from "react";
import { Container } from "@/components/common/Container";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={16} />, href: "https://github.com/Himanshu2631", label: "GitHub" },
    { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/himanshu-sengar-0a8a7b299/", label: "LinkedIn" },
    { icon: <Mail size={16} />, href: "mailto:himanshusengar235@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-[#050505] py-12 border-t border-card-border/60">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-card-border/40">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 select-none">
              <span className="font-semibold text-foreground text-base tracking-wide">Himanshu Sengar</span>
              <span className="text-muted-dark">•</span>
              <span className="text-xs text-muted font-mono bg-card-bg px-2.5 py-0.5 rounded border border-card-border">
                Portfolio v2.0
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted font-light leading-relaxed max-w-sm">
              Structuring high-performance interfaces, DevOps observability systems, and clean web applications.
            </p>
          </div>

          {/* Quick recuiter-friendly badge */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase select-none tracking-wider shadow-[0_0_12px_rgba(16,185,129,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400">
              <span className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
            </span>
            Internship Ready
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-dark">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>&copy; {currentYear} Himanshu Sengar. All rights reserved.</p>
            <span className="hidden sm:inline text-card-border">|</span>
            <p className="flex items-center gap-1">
              Engineered using
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent flex items-center gap-0.5 transition-colors font-medium"
              >
                Next.js
                <ExternalLink size={10} />
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card-bg border border-card-border text-muted hover:text-accent hover:border-accent/25 hover:bg-accent/5 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

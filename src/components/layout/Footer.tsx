import React from "react";
import { Container } from "@/components/common/Container";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail size={18} />, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-card-border bg-background py-8 mt-20">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm text-muted">
            &copy; {currentYear} Developer Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-muted-dark">
            Designed & Built with Next.js, Tailwind and Framer Motion.
          </p>
        </div>
        
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
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

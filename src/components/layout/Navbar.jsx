"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to spy scroll active state
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // triggers when section dominates middle of viewport
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (el) observer.observe(el);
    });

    // Also observe Hero to clear active state when at top
    const heroEl = document.getElementById("hero");
    if (heroEl) observer.observe(heroEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const shouldReduceMotion = useReducedMotion();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "py-3 bg-[#050505]/80 border-card-border"
          : "py-5 bg-transparent border-transparent"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg tracking-tight text-foreground hover:text-accent transition-colors flex items-center gap-0.5 select-none">
          Himanshu<span className="text-accent font-bold">.</span>
        </Link>
  
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 mr-2">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`text-sm font-medium transition-all duration-300 relative px-3 py-1.5 rounded-md select-none ${
                    isActive ? "text-white font-semibold" : "text-muted hover:text-foreground"
                  }`}
                >
                  {/* Hover background slide */}
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="navHover"
                      className="absolute inset-0 bg-[#1c1c1e] rounded-md -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {item.label}

                  {/* Active dot slide */}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveDot"
                      className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      style={{ filter: "drop-shadow(0 0 3px rgba(59, 130, 246, 0.8))" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <Button variant="outline" size="sm" href="/Himanshu_Sengar_Resume.pdf" icon={<ArrowUpRight size={14} />}>
            Resume
          </Button>
        </nav>
  
        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-muted hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-card-bg border border-transparent hover:border-card-border"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>
  
      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={shouldReduceMotion ? { duration: 0.15 } : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-[#050505]/95 border-b border-card-border backdrop-blur-lg md:hidden py-6"
          >
            <Container className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium transition-colors px-3 py-2 rounded-md hover:bg-card-bg flex items-center justify-between ${
                      isActive ? "text-white bg-[#1c1c1e]/40 font-semibold border-l-2 border-accent" : "text-muted"
                    }`}
                  >
                    {item.label}
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                  </Link>
                );
              })}
              <Button
                variant="outline"
                size="md"
                href="/Himanshu_Sengar_Resume.pdf"
                icon={<ArrowUpRight size={16} />}
                className="w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

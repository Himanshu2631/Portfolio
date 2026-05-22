"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

const NAV_ITEMS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-background/80 border-b border-card-border backdrop-blur-md"
          : "py-5 bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg tracking-tight text-foreground hover:text-accent transition-colors flex items-center gap-0.5">
          Himanshu<span className="text-accent font-bold">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 mr-2">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors relative px-3 py-1.5 rounded-md"
              >
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navHover"
                    className="absolute inset-0 bg-accent-muted rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </Link>
            ))}
          </div>
          <Button variant="outline" size="sm" href="/resume.pdf" icon={<ArrowUpRight size={14} />}>
            Resume
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-muted hover:text-foreground transition-colors cursor-pointer rounded-lg hover:bg-card-bg border border-transparent hover:border-card-border"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {/* Mobile nav dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-background/95 border-b border-card-border backdrop-blur-lg md:hidden py-6"
          >
            <Container className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted hover:text-foreground transition-colors px-3 py-2 rounded-md hover:bg-card-bg"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                size="md"
                href="/resume.pdf"
                icon={<ArrowUpRight size={16} />}
                className="w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

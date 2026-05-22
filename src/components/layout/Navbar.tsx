"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <Link href="/" className="font-semibold text-lg tracking-tight hover:text-accent transition-colors flex items-center gap-0.5">
          <span className="text-accent font-bold">.</span>dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors relative py-1"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" href="#contact" icon={<ArrowUpRight size={14} />}>
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
            <Container className="flex flex-col gap-5">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base text-muted hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="outline"
                size="md"
                href="#contact"
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

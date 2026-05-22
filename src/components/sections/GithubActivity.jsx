"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/common/Container";
import { FadeIn } from "@/components/common/Animated";
import { Button } from "@/components/common/Button";
import { Github, Activity, Flame, GitCommit, ArrowUpRight } from "lucide-react";

export const GithubActivity = () => {
  // Deterministic contribution level generator for a realistic-looking grid
  const getContributionLevel = (week, day) => {
    const index = week * 7 + day;
    
    // Create organic-looking "vacation" or slow gaps
    if ((week >= 8 && week <= 9) || (week >= 24 && week <= 25) || (week >= 42 && week <= 43)) {
      return 0;
    }
    
    // Weekends (day 0 and 6) have lower activity
    const isWeekend = day === 0 || day === 6;
    const hash = Math.abs(Math.sin(index) * 1000) % 1;
    
    if (isWeekend) {
      if (hash < 0.08) return 1;
      if (hash < 0.12) return 2;
      return 0;
    } else {
      if (hash < 0.22) return 0;
      if (hash < 0.58) return 1;
      if (hash < 0.82) return 2;
      if (hash < 0.94) return 3;
      return 4;
    }
  };

  const monthLabels = [
    { name: "Jun", weekIndex: 0 },
    { name: "Jul", weekIndex: 4 },
    { name: "Aug", weekIndex: 9 },
    { name: "Sep", weekIndex: 13 },
    { name: "Oct", weekIndex: 17 },
    { name: "Nov", weekIndex: 22 },
    { name: "Dec", weekIndex: 26 },
    { name: "Jan", weekIndex: 30 },
    { name: "Feb", weekIndex: 35 },
    { name: "Mar", weekIndex: 39 },
    { name: "Apr", weekIndex: 43 },
    { name: "May", weekIndex: 48 },
  ];

  const stats = [
    {
      icon: <GitCommit className="text-accent" size={18} />,
      value: "1,642",
      label: "Commits in past year",
      subtext: "+24% YoY increase",
    },
    {
      icon: <Activity className="text-accent" size={18} />,
      value: "31.5",
      label: "Avg. weekly commits",
      subtext: "Most active on Wednesdays",
    },
    {
      icon: <Flame className="text-accent" size={18} />,
      value: "24 Days",
      label: "Active coding streak",
      subtext: "Longest streak: 45 days",
    },
  ];

  // Map levels to tailwind background classes
  const getLevelClass = (level) => {
    switch (level) {
      case 1:
        return "bg-accent/15 border border-accent/10";
      case 2:
        return "bg-accent/35 border border-accent/20";
      case 3:
        return "bg-accent/65 border border-accent/30";
      case 4:
        return "bg-accent border border-accent/40";
      default:
        return "bg-background border border-card-border/60";
    }
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="activity" className="py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 relative">
      <div className="section-divider" />
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <FadeIn direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-foreground">
                Development Activity
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-muted text-sm max-w-lg leading-relaxed">
                A live-action view of my open-source contributions, commit streaks, and build habits across various infrastructure systems.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="up" delay={0.25}>
            <Button
              variant="outline"
              href="https://github.com"
              icon={<Github size={16} />}
              iconPosition="left"
              className="shrink-0"
            >
              View GitHub Profile
              <ArrowUpRight size={14} className="ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
            </Button>
          </FadeIn>
        </div>

        {/* Calendar Grid Container */}
        <FadeIn direction="up" delay={0.3} className="w-full bg-card-bg border border-card-border rounded-xl p-5 sm:p-6 md:p-8 mb-8 overflow-hidden shadow-md">
          <h3 className="text-sm font-semibold tracking-wider text-muted-dark uppercase mb-6">
            Contribution Calendar
          </h3>
          
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-card-border" aria-hidden="true">
            <div className="min-w-[640px] flex flex-col">
              {/* Months Headers */}
              <div className="flex text-[10px] text-muted-dark font-mono mb-2 h-4 relative">
                {monthLabels.map((m, idx) => (
                  <span
                    key={idx}
                    className="absolute"
                    style={{ left: `${m.weekIndex * 12 + 20}px` }}
                  >
                    {m.name}
                  </span>
                ))}
              </div>

              {/* Grid Rows */}
              <div className="flex gap-[3px]">
                {/* Day Labels */}
                <div className="flex flex-col justify-between text-[9px] text-muted-dark font-mono pr-2 py-0.5 h-[81px] w-5 select-none">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Weeks */}
                <div className="flex gap-[3px] flex-grow">
                  {Array.from({ length: 53 }).map((_, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-[3px]">
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const level = getContributionLevel(weekIndex, dayIndex);
                        return (
                          <div
                            key={dayIndex}
                            className={`w-[9px] h-[9px] rounded-[1.5px] transition-colors duration-200 cursor-pointer ${getLevelClass(
                              level
                            )}`}
                            title={`Level ${level} contribution`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Indicators */}
              <div className="flex items-center justify-end gap-1.5 mt-4 text-[10px] text-muted-dark font-mono pr-1 select-none">
                <span>Less</span>
                <div className="w-[9px] h-[9px] rounded-[1.5px] bg-background border border-card-border/60" />
                <div className="w-[9px] h-[9px] rounded-[1.5px] bg-accent/15 border border-accent/10" />
                <div className="w-[9px] h-[9px] rounded-[1.5px] bg-accent/35 border border-accent/20" />
                <div className="w-[9px] h-[9px] rounded-[1.5px] bg-accent/65 border border-accent/30" />
                <div className="w-[9px] h-[9px] rounded-[1.5px] bg-accent border border-accent/40" />
                <span>More</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Coding Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-card-bg border border-card-border hover:border-accent/30 rounded-xl p-5 sm:p-6 relative shadow-md flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group overflow-hidden"
            >
              {/* Subtle hover gradient spotlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-foreground/70">
                    {stat.label}
                  </span>
                  <div className="p-1.5 bg-background border border-card-border rounded-lg group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-foreground block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-dark font-medium font-mono">
                    {stat.subtext}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

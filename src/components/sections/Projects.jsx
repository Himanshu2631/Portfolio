"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common/Container";
import { FadeIn } from "@/components/common/Animated";
import { Button } from "@/components/common/Button";
import { ArrowUpRight, Github, X, Check, Terminal, Cpu, Sparkles, AlertCircle } from "lucide-react";

// 1. Docker DevOps Dashboard Preview
const DockerPreview = React.memo(() => (
  <div className="w-full h-full bg-[#0b0b0c] border border-card-border/80 rounded-xl p-4 sm:p-5 font-mono text-xs select-none flex flex-col justify-between">
    <div className="flex items-center justify-between border-b border-card-border pb-2.5">
      <span className="text-muted-dark font-medium">containers_active (4)</span>
      <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold text-[10px] uppercase">Healthy</span>
    </div>
    <div className="space-y-1.5 my-2.5">
      <div className="flex items-center justify-between py-1 bg-background/50 border border-card-border/60 px-3 rounded-md">
        <span className="text-foreground/90 text-[10px] sm:text-xs">api-gateway</span>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          running
        </span>
      </div>
      <div className="flex items-center justify-between py-1 bg-background/50 border border-card-border/60 px-3 rounded-md">
        <span className="text-foreground/90 text-[10px] sm:text-xs">auth-service</span>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          running
        </span>
      </div>
      <div className="flex items-center justify-between py-1 bg-background/50 border border-card-border/60 px-3 rounded-md">
        <span className="text-foreground/90 text-[10px] sm:text-xs">cache-redis</span>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          running
        </span>
      </div>
    </div>
    <div className="flex justify-between items-center text-[10px] text-muted-dark pt-1.5 border-t border-card-border/40">
      <span>CPU: 12.4%</span>
      <span>RAM: 2.1 GB</span>
    </div>
  </div>
));
DockerPreview.displayName = "DockerPreview";

// 2. Faculty Feedback Automation Preview
const FeedbackPreview = React.memo(() => (
  <div className="w-full h-full bg-[#0b0b0c] border border-card-border/80 rounded-xl p-4 sm:p-5 font-mono text-xs select-none flex flex-col justify-between">
    <div className="flex items-center justify-between border-b border-card-border pb-2.5">
      <span className="text-muted-dark font-medium">feedback_metrics</span>
      <span className="text-accent text-[10px] font-semibold uppercase">Q3 Analysis</span>
    </div>
    <div className="space-y-2 my-2">
      <div className="space-y-0.5">
        <div className="flex justify-between text-[10px] text-foreground/80">
          <span>Overall Score</span>
          <span>4.8 / 5.0</span>
        </div>
        <div className="w-full h-1.5 bg-background border border-card-border rounded-full overflow-hidden">
          <div className="h-full bg-accent rounded-full" style={{ width: "92%" }} />
        </div>
      </div>
      <div className="space-y-0.5">
        <div className="flex justify-between text-[10px] text-foreground/80">
          <span>Response Rate</span>
          <span>96.4%</span>
        </div>
        <div className="w-full h-1.5 bg-background border border-card-border rounded-full overflow-hidden">
          <div className="h-full bg-emerald-400 rounded-full" style={{ width: "96%" }} />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-1.5 pt-1.5 text-[10px] text-muted-dark border-t border-card-border/40">
      <div className="border border-card-border/60 bg-background/30 p-1 rounded">
        <span className="block text-foreground/80 font-bold">142</span>
        responses
      </div>
      <div className="border border-card-border/60 bg-background/30 p-1 rounded">
        <span className="block text-accent font-bold">0.4s</span>
        latency
      </div>
    </div>
  </div>
));
FeedbackPreview.displayName = "FeedbackPreview";

// 3. CredLens Preview
const CredLensPreview = React.memo(() => (
  <div className="w-full h-full bg-[#0b0b0c] border border-card-border/80 rounded-xl p-4 sm:p-5 font-mono text-xs select-none flex flex-col justify-between">
    <div className="flex items-center justify-between border-b border-card-border pb-2.5">
      <span className="text-muted-dark font-medium">cred_lens_evaluator</span>
      <span className="px-1.5 py-0.5 rounded bg-accent-muted text-accent font-semibold text-[10px] uppercase">Verified</span>
    </div>
    <div className="flex flex-col items-center justify-center my-1.5 space-y-1.5">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-card-border" />
        <div className="absolute inset-0 rounded-full border-2 border-accent border-r-transparent border-b-transparent transform rotate-45 animate-pulse" />
        <span className="text-sm font-bold text-foreground">98.2</span>
      </div>
      <span className="text-[10px] text-foreground/90 font-medium">High Credibility Tier</span>
    </div>
    <div className="flex justify-between items-center text-[10px] text-muted-dark pt-1.5 border-t border-card-border/40">
      <span>insights_processed: 8.4k</span>
    </div>
  </div>
));
CredLensPreview.displayName = "CredLensPreview";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projectsList = [
    {
      title: "docker_devops_dashboard",
      displayName: "Docker DevOps Dashboard",
      featureChip: "Production-Ready Observability",
      description: "A real-time Docker observability and infrastructure monitoring platform engineered for containerized infrastructure visibility and DevOps workflows.",
      extendedDescription: "A container observability system designed to replace repetitive terminal commands. Connects directly to the Docker Unix Socket to expose active microservices and system resource telemetry.",
      architecture: "Utilizes Socket.io (WebSockets) to establish persistent connections, streaming live CPU and RAM resource profiles at sub-10ms intervals.",
      challenges: "Mitigating virtual DOM rendering lag during high-frequency telemetry logging. Handled using buffered logs streaming and frame updates optimization.",
      features: [
        "Live container management",
        "Real-time logs streaming",
        "WebSocket-based monitoring",
        "Historical telemetry analytics",
        "Infrastructure topology visualization",
        "Responsive monitoring dashboard"
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "Dockerode", "WebSockets"],
      github: "https://github.com",
      demo: "#",
      preview: <DockerPreview />
    },
    {
      title: "faculty_feedback_automation",
      displayName: "Faculty Feedback Automation",
      featureChip: "Secure Automation Engine",
      description: "An automated faculty evaluation platform designed to collect, process, and analyze student feedback securely with efficient administrative reporting.",
      extendedDescription: "An automated course evaluation aggregator. Protects respondent confidentiality through secure token validation routing, preventing dual submissions.",
      architecture: "Uses React, Node.js, Express, and MongoDB. Integrates an asynchronous worker queue that aggregates metrics and generates formatted PDF documents.",
      challenges: "Generating formatted multi-page PDF documents containing visual data graphs in real-time. Resolved using headless PDF export workers.",
      features: [
        "Faculty-wise feedback forms",
        "Interactive rating dashboards",
        "Automated PDF report generation",
        "Streamlined submission workflows",
        "Responsive user interface"
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "Automation"],
      github: "https://github.com",
      demo: "#",
      preview: <FeedbackPreview />
    },
    {
      title: "credlens",
      displayName: "CredLens",
      featureChip: "AI & Metadata Analytics",
      description: "A modern intelligent credibility analysis platform featuring a high-performance frontend architecture, scalable UI systems, and polished user experiences.",
      extendedDescription: "Designed to evaluate digital credibility parameters. Pipelines semantic metadata into analysis engines and renders credibility ratings onto dashboards.",
      architecture: "Structured with Next.js using dynamic client caching. Offloads analysis algorithms to background tasks to keep UI interaction smooth.",
      challenges: "Rendering large numbers of data-tree source nodes dynamically. Solved using list virtualization and CSS layer acceleration.",
      features: [
        "Intelligent credibility scoring",
        "High-performance UI architecture",
        "Real-time insight processing",
        "Scalable UI component system",
        "Polished interactive UX transitions"
      ],
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Python"],
      github: "https://github.com",
      demo: "#",
      preview: <CredLensPreview />
    }
  ];

  // Lock scrolling when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="projects" className="py-16 md:py-24 scroll-mt-20 md:scroll-mt-24 relative">
      <div className="section-divider" />
      <Container>
        <div className="mb-12 md:mb-16">
          <FadeIn direction="up" delay={0.1}>
            <div className="flex items-center gap-2.5 mb-3.5 select-none">
              <span className="h-[1px] w-6 bg-accent" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-accent uppercase font-semibold">Featured Work</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight leading-[1.12] text-white mb-4">
              Featured Projects
            </h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-muted text-base leading-relaxed max-w-xl font-light">
              A selection of systems and applications engineered focusing on live metrics, secure workflow automation, and credibility analytics.
            </p>
          </FadeIn>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-10"
        >
          {projectsList.map((project, index) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              className="bg-card-bg border border-card-border hover:border-accent/30 rounded-xl p-5 sm:p-6 md:p-8 flex flex-col gap-8 relative overflow-hidden group shadow-md hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              {/* Subtle hover gradient spotlight */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Visual Preview Area */}
                <div className={`lg:col-span-5 w-full flex items-center justify-center bg-background/50 border border-card-border/60 rounded-xl p-4 sm:p-6 h-[200px] sm:h-[220px] select-none grid-bg ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}>
                  <div className="w-full max-w-[280px] h-full flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    {project.preview}
                  </div>
                </div>
                
                {/* Details Column */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-[9px] font-mono tracking-[0.16em] text-accent font-semibold px-2.5 py-0.5 rounded-full bg-accent-muted border border-accent/15 uppercase">
                        {project.featureChip}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight text-foreground mb-3 group-hover:text-accent transition-colors">
                      {project.displayName}
                    </h3>
                    
                    <p className="text-lg text-foreground/90 leading-relaxed mb-5 max-w-[650px] font-light">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[13px] text-muted/90 font-light">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                            <span className="truncate">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
 
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono tracking-wide uppercase text-muted border border-card-border bg-background/50 px-2.5 py-0.5 rounded hover:bg-accent/5 hover:border-accent/20 hover:text-accent transition-colors duration-200 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
 
                  <div className="flex flex-wrap items-center gap-3 border-t border-card-border/40 pt-6">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer inline-flex items-center gap-1.5"
                    >
                      View Details
                      <ArrowUpRight size={14} />
                    </button>
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.github}
                      icon={<Github size={14} />}
                      iconPosition="left"
                      aria-label={`GitHub source code for ${project.displayName}`}
                    >
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl bg-card-bg border border-card-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] sm:max-h-[85vh] z-10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-card-border bg-[#0a0a0b]/80 backdrop-blur-sm sticky top-0 z-10">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[9px] font-mono tracking-[0.16em] text-accent uppercase font-bold">
                    {activeProject.featureChip}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-foreground">
                    {activeProject.displayName}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="p-1.5 rounded-lg border border-card-border text-muted hover:text-foreground hover:bg-background transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-8 custom-scrollbar">
                {/* Intro */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono tracking-[0.18em] text-muted-dark uppercase font-semibold">Project Overview</h4>
                  <p className="text-lg text-foreground/95 leading-relaxed font-light max-w-[650px]">
                    {activeProject.extendedDescription}
                  </p>
                </div>

                 {/* Architecture Deep Dive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-card-border/50">
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono tracking-[0.18em] text-muted-dark uppercase font-semibold flex items-center gap-1.5 select-none">
                      <Terminal size={14} className="text-accent" />
                      Engineering Architecture
                    </h4>
                    <p className="text-[13px] sm:text-sm text-muted leading-[1.65] font-light">
                      {activeProject.architecture}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono tracking-[0.18em] text-muted-dark uppercase font-semibold flex items-center gap-1.5 select-none">
                      <AlertCircle size={14} className="text-amber-500" />
                      Challenges & Solution
                    </h4>
                    <p className="text-[13px] sm:text-sm text-muted leading-[1.65] font-light">
                      {activeProject.challenges}
                    </p>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-4 pt-4 border-t border-card-border/50">
                  <h4 className="text-[10px] font-mono tracking-[0.18em] text-muted-dark uppercase font-semibold select-none">Key Capabilities</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-foreground/90 font-medium">
                    {activeProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="p-0.5 rounded bg-accent-muted border border-accent/15 mt-0.5 shrink-0">
                          <Check size={11} className="text-accent" />
                        </span>
                        <span className="leading-tight font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Highlights */}
                <div className="space-y-3 pt-4 border-t border-card-border/50">
                  <h4 className="text-[10px] font-mono tracking-[0.18em] text-muted-dark uppercase font-semibold select-none">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono tracking-wide uppercase text-foreground bg-[#0f0f11] border border-card-border px-3 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-card-border bg-[#0a0a0b]/80 backdrop-blur-sm sticky bottom-0 z-10">
                <Button
                  variant="secondary"
                  size="sm"
                  href={activeProject.github}
                  icon={<Github size={14} />}
                  iconPosition="left"
                >
                  Source Code
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  href={activeProject.demo}
                  icon={<ArrowUpRight size={14} />}
                >
                  Live Demo
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

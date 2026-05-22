"use client";
 
import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
 
export const FadeIn = memo(({
  children,
  delay = 0,
  duration = 0.5,
  direction = "none",
  distance = 15,
  className,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const actualDistance = shouldReduceMotion ? 0 : distance;

  const directions = {
    up: { y: actualDistance },
    down: { y: -actualDistance },
    left: { x: actualDistance },
    right: { x: -actualDistance },
    none: {},
  };
 
  const initialVal = {
    opacity: 0,
    ...directions[direction],
  };
 
  return (
    <motion.div
      initial={initialVal}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: shouldReduceMotion ? 0.25 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo transition
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
});

FadeIn.displayName = "FadeIn";
 
export const StaggerContainer = memo(({
  children,
  className,
  as = "div",
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.06,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
});

StaggerContainer.displayName = "StaggerContainer";

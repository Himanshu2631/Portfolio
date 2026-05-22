"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimatedProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export const FadeIn: React.FC<AnimatedProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = "none",
  distance = 20,
  className,
  ...props
}) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Premium easeOutExpo transition
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<HTMLMotionProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

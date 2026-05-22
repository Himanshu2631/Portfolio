"use client";

import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

export const Button = memo(({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  onClick,
  disabled = false,
  icon,
  iconPosition = "right",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none cursor-pointer group";
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const variantStyles = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md",
    secondary: "backdrop-blur-sm bg-card-bg/85 text-foreground border border-card-border hover:border-[#3a3a3c] hover:text-white",
    outline: "backdrop-blur-sm bg-card-bg/50 border border-muted-dark text-foreground hover:bg-card-bg hover:border-[#3a3a3c] hover:text-white",
    ghost: "text-muted hover:text-foreground hover:bg-card-bg",
  };

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex items-center shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="flex items-center shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const combinedClassName = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const buttonTransition = { type: "spring", stiffness: 400, damping: 17 };
  const buttonStyle = {
    transition: "background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease"
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          style={buttonStyle}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={buttonTransition}
          {...props}
        >
          {content}
        </motion.a>
      );
    }
    
    return (
      <MotionLink 
        href={href} 
        className={combinedClassName} 
        style={{ ...buttonStyle, display: 'inline-flex' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={buttonTransition}
        {...props}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      style={buttonStyle}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={buttonTransition}
      {...props}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = "Button";

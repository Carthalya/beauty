"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = false,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative bg-card/30 backdrop-blur-xl border border-border/30 rounded-2xl overflow-hidden",
        hover && "transition-all duration-300 hover:bg-card/50 hover:border-gold/30",
        glow && "before:absolute before:inset-0 before:bg-gradient-to-br before:from-gold/5 before:to-transparent before:pointer-events-none",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function GlassPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-background/60 backdrop-blur-2xl border border-border/20 rounded-3xl",
        className
      )}
    >
      {children}
    </div>
  );
}

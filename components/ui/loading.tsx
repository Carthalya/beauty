"use client";

import { motion } from "framer-motion";

export function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className={`${sizeClasses[size]} border-2 border-gold/20 border-t-gold rounded-full`}
    />
  );
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mx-auto mb-4 border-2 border-gold/20 border-t-gold rounded-full"
        />
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-serif text-foreground"
        >
          Carthalya
        </motion.h2>
      </motion.div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-card/50 rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-muted/30" />
      <div className="p-6 space-y-3">
        <div className="h-4 bg-muted/30 rounded w-2/3" />
        <div className="h-3 bg-muted/30 rounded w-full" />
        <div className="h-3 bg-muted/30 rounded w-1/2" />
        <div className="h-6 bg-muted/30 rounded w-1/4 mt-4" />
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}

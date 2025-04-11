import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  position?: "top" | "bottom";
  color?: string;
  gradient?: boolean;
  height?: number;
  isFixed?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollProgress({
  position = "top",
  color = "hsl(var(--primary))",
  gradient = false,
  height = 2,
  isFixed = true,
  className,
  style,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "left-0 right-0 z-50",
        isFixed ? "fixed" : "absolute",
        position === "top" ? "top-0" : "bottom-0",
        gradient && "bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500",
        className
      )}
      style={{
        ...style,
        height,
        transformOrigin: "0%",
        scaleX,
        backgroundColor: gradient ? undefined : color,
      }}
    />
  );
} 
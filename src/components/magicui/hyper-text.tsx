import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HyperTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const HyperText = React.forwardRef<
  HTMLElement,
  HyperTextProps & React.HTMLAttributes<HTMLElement>
>(({ children, className, as = "span", ...props }, ref) => {
  const Component = as;

  return (
    <Component
      ref={ref}
      className={cn(
        "group inline-flex cursor-pointer items-center gap-1",
        className
      )}
      {...props}
    >
      <span className="relative">
        <span className="relative z-10 text-foreground">
          {children}
        </span>

        <motion.span
          className="absolute inset-0 z-0 h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-[length:200%_200%]"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 0.2,
            transition: { duration: 0.2 },
          }}
          transition={{
            backgroundPosition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            },
            opacity: { duration: 0.2 },
          }}
          style={{
            backgroundSize: "200% 200%",
            backgroundPosition: "0% 50%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
        />
      </span>
    </Component>
  );
});

HyperText.displayName = "HyperText"; 
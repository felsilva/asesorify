import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:opacity-50 disabled:pointer-events-none",
          
          // Size variations
          {
            "text-xs px-3 py-1.5 rounded-md": size === "sm",
            "text-sm px-4 py-2.5 rounded-lg": size === "md",
            "text-base px-6 py-3 rounded-lg": size === "lg",
          },
          
          // Variant styles
          {
            // Primary button
            "bg-[#ffffff] text-[#000000] hover:bg-[#f0f0f0] active:bg-[#e0e0e0]": variant === "primary",
            
            // Secondary button
            "bg-[#1a1a1a] text-[#ffffff] hover:bg-[#2a2a2a] active:bg-[#333333]": variant === "secondary",
            
            // Outline button
            "border border-[#ffffff]/20 text-[#ffffff] hover:bg-[#ffffff]/10 active:bg-[#ffffff]/20": variant === "outline",
            
            // Ghost button
            "text-[#ffffff] hover:bg-[#ffffff]/10 active:bg-[#ffffff]/20": variant === "ghost",
          },
          
          // Full width
          fullWidth ? "w-full" : "",
          
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Subtle gradient overlay for depth */}
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-20"></span>
        </span>
        
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, cn as buttonVariants };
export default Button;

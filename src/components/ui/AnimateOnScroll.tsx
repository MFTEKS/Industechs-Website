"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in";
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.style.animationName =
              animation === "fade-up" ? "fade-up" : "fade-in";
            element.style.animationDuration = "0.6s";
            element.style.animationFillMode = "forwards";
            element.style.animationTimingFunction = "ease-out";
            element.style.opacity = "1";
          }, delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animation, delay]);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{ opacity: 0, transform: animation === "fade-up" ? "translateY(24px)" : "none" }}
    >
      {children}
    </div>
  );
}

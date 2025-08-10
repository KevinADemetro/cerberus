"use client";

import { useEffect, useRef, useState } from "react";

export function StickyBottom({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const element = ref.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.y <= 100) {
          setIsFixed(rect.y <= 100);
        } else {
          setIsFixed(false);
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={ref}></div>
      <div className={`bottom-1 w-[100vw] ${isFixed ? "fixed " : "sticky bottom-1 "}`}>
        {children}
      </div>
    </>
  );
}

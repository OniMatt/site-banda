"use client";

import { ReactNode } from "react";
import Arrow from "./Arrow";

interface SectionProps {
  id: string;
  children: ReactNode;
  showArrow?: boolean;
}

export default function Section({ id, children, showArrow = true }: SectionProps) {
  return (
    <section id={id} className="section">
      {children}
      {showArrow && <Arrow />}
    </section>
  );
}

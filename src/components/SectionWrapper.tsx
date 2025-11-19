import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  bg = "white",
  className = "",
}: SectionWrapperProps) {
  return (
    <section className={`py-16 bg-${bg} ${className}`}>
      <div className="container mx-auto px-6 md:px-10 lg:px-14 max-w-4xl">
        {children}
      </div>
    </section>
  );
}

"use client";
import Image from "next/image";
import React from "react";

interface NotebookBackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
  bgMobile: string;
  bgDesktop: string;
  curveMobile?: string;
  curveDesktop?: string;
}

export default function NotebookBackgroundWrapper({
  children,
  className = "",
  bgMobile,
  bgDesktop,
  curveMobile,
  curveDesktop,
}: NotebookBackgroundWrapperProps) {
  return (
    <div className="relative">
      <section
        className={`
         ${bgMobile} lg:${bgDesktop} bg-cover bg-center bg-no-repeat  
          max-w-[1280px] mx-auto  ${className}
        `}
      >
        {/* Curved Banner - Desktop */}
        {curveDesktop && (
          <div className="absolute h-[397px] top-[-100px] left-0 w-full hidden lg:block">
            <Image
              src={curveDesktop}
              alt="program highlight"
              fill
              className="object-cover"
            />
          </div>
        )}
        {/* Curved Banner - Mobile */}
        {curveMobile && (
          <div className="absolute h-[397px] top-[-100px] left-0 w-full lg:hidden">
            <Image
              src={curveMobile}
              alt="program highlight"
              fill
              className="object-cover"
            />
          </div>
        )}
        {children}
      </section>
    </div>
  );
}

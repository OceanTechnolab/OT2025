"use client";

import React from "react";
import { cn } from "../../lib/utils";

const ShineBorder = ({
  borderRadius = 16,
  borderWidth = 2,
  duration = 10,
  color = ["#ff0000", "#00ff00", "#0000ff"],
  className,
  children,
}) => {
  const backgroundRadialGradient = Array.isArray(color)
    ? `radial-gradient(transparent, transparent, ${color.join(
        ","
      )}, transparent, transparent)`
    : `radial-gradient(transparent, transparent, ${color}, transparent, transparent)`;

  return (
    <div
      style={{
        "--border-radius": `${borderRadius}px`,
      }}
      className={cn("shine-border-container", className)}
    >
      <div
        style={{
          "--border-width": `${borderWidth}px`,
          "--border-radius": `${borderRadius}px`,
          "--duration": `${duration}s`,
          "--background-radial-gradient": backgroundRadialGradient,
        }}
        className="shine-border-effect"
      ></div>
      {children}
    </div>
  );
};
export { ShineBorder };

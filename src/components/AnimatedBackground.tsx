// src/components/AnimatedBackground.tsx
"use client";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-50 overflow-hidden">
      {/* animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] bg-[length:200%_200%] animate-gradient-x" />
    </div>
  );
}
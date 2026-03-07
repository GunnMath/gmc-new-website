"use client";

import React, { useState, useEffect } from "react";

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<{ id: number; left: string; size: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const generatedBubbles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      size: `${Math.random() * 50 + 10}px`,
      duration: `${Math.random() * 10 + 5}s`, 
      delay: `-${Math.random() * 15}s`, 
    }));
    setBubbles(generatedBubbles);
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[35] overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble absolute rounded-full bg-white/10"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
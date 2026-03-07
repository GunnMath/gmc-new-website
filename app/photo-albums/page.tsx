"use client";

import React, { useState, useEffect } from "react";
import NavBar from '@/components/nav';

export default function PhotoAlbums() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const handleScroll = () => setOffset(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden pb-20">
      <NavBar />

      {/* HEADER SECTION */}
      <div className="pt-40 pb-16 px-6 md:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
              <div 
                  className="max-w-2xl relative z-10 text-center md:text-left"
                  style={{ transform: `translateY(${offset * 0.4}px)` }}
              >
                  <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 block">
                      Memories
                  </span>
                  <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                      PHOTO ALBUMS
                  </h1>
                  <p className="text-blue-100/80 mt-4 text-lg font-medium">
                      Relive the excitement of the Gunn Math Competition from past years.
                  </p>
              </div>
              
              <div 
                  className="relative opacity-10 hidden md:block"
                  style={{ transform: `translateY(${offset * -0.1}px)` }}
              >
                  <img 
                      src="/fsh.png" 
                      width="250" 
                      height="200" 
                      alt="GMC logo background" 
                      className="object-contain brightness-0 invert" 
                  />
              </div>
          </div>
      </div>

      {/* ALBUMS GRID */}
      <div className="px-6 md:px-20 py-10 max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            
            {/* 2024 Album */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-10 rounded-3xl border border-white/20 hover:border-blue-400 hover:bg-white/20 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-black text-white group-hover:text-blue-200 transition-colors mb-3">2024</h2>
                <span className="text-blue-400 font-bold flex items-center gap-2 uppercase tracking-wide text-sm">
                    View Album <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
            </a>

            {/* 2023 Album */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-10 rounded-3xl border border-white/20 hover:border-blue-400 hover:bg-white/20 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-black text-white group-hover:text-blue-200 transition-colors mb-3">2023</h2>
                <span className="text-blue-400 font-bold flex items-center gap-2 uppercase tracking-wide text-sm">
                    View Album <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
            </a>

            {/* 2022 Album */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-10 rounded-3xl border border-white/20 hover:border-blue-400 hover:bg-white/20 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-black text-white group-hover:text-blue-200 transition-colors mb-3">2022</h2>
                <span className="text-blue-400 font-bold flex items-center gap-2 uppercase tracking-wide text-sm">
                    View Album <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
            </a>

          </div>
      </div>
    </main>
  );
}
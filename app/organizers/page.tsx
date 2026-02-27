"use client";

import React, { useState, useEffect } from "react";
import NavBar from '@/components/nav';
import { ORGANIZERS_DATA } from './ORGANIZERS_DATA';

export default function Organizers() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const handleScroll = () => setOffset(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Combine everyone into a single list
  const allPeople = ORGANIZERS_DATA.flatMap(group => group.people);

  return (
    <main className="bg-[#e4efff] min-h-screen text-[#002e66] relative overflow-x-hidden">
      <NavBar />

      <div className="bg-[#002E67] pt-40 pb-16 px-6 md:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
              
              <div 
                  className="max-w-2xl relative z-10 text-center md:text-left"
                  style={{ transform: `translateY(${offset * 0.4}px)` }}
              >
                  <span className="text-blue-300 font-bold tracking-widest uppercase text-xs mb-3 block">
                      Behind GMC 2026
                  </span>
                  <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                      MEET THE TEAM
                  </h1>
                  <p className="text-gray-300 mt-4 text-lg font-bold">
                      GMC is entirely organized by students from Henry M. Gunn High School in Palo Alto.
                  </p>
              </div>

              <div 
                  className="relative opacity-10 hidden md:block"
                  style={{ transform: `translateY(${offset * -0.1}px)` }}
              >
                  <img 
                      src="/fsh.png" 
                      width="300" 
                      height="240" 
                      alt="GMC logo" 
                      className="object-contain brightness-0 invert" 
                  />
              </div>
          </div>
      </div>

      <div className="px-6 md:px-20 py-24 max-w-7xl mx-auto">
        <div className="space-y-20">
            {/* All organizers under one heading */}
            <div>
                <h2 className="text-3xl font-black text-[#002E67] mb-10 border-b-2 border-[#155EA5]/30 pb-4 inline-block">
                    Organizers
                </h2>
                
                {/* Adjusted grid for just images (grid-cols-2 sm:grid-cols-4 lg:grid-cols-5) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                    {allPeople.map(p => (
                        <div key={p.name} className="flex flex-col items-center text-center group">
                            <img 
                                src={p.image} 
                                alt={p.name} 
                                className="w-32 h-32 rounded-full object-cover border-4 border-[#002E67]/10 group-hover:border-[#002E67] transition-all duration-300 shadow-lg" 
                            />
                            
                            {/* COMMENTED OUT CODE as requested */}
                            {/* <h3 className="font-bold text-xl text-[#002E67] mt-5">{p.name}</h3>
                            <p className="text-sm text-[#155EA5] font-semibold mb-3">{p.role}</p>
                            <p className="text-sm text-[#002E67]/70 font-medium leading-relaxed">{p.bio}</p>
                            */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
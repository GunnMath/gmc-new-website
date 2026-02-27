"use client";

import React, { useState, useEffect } from "react";
import NavBar from '@/components/nav';

// We put the data directly in the file to prevent the "Module not found" error!
const ORGANIZERS_DATA = [
  { name: "Aarush", image: "/staff/Aarush.jpg" },
  { name: "Aiden", image: "/staff/Aiden.jpg" },
  { name: "Albert", image: "/staff/Albert.jpg" },
  { name: "Alex B", image: "/staff/AlexB.jpg" },
  { name: "Alex P", image: "/staff/AlexP.jpg" },
  { name: "Alex T", image: "/staff/AlexT.jpg" },
  { name: "Cameron", image: "/staff/Cameron.jpg" },
  { name: "Chanew", image: "/staff/Chanew.jpg" },
  { name: "Daphne", image: "/staff/Daphne.jpg" },
  { name: "Elliot", image: "/staff/Elliot.jpg" },
  { name: "Grace", image: "/staff/Grace.jpg" },
  { name: "Haridas", image: "/staff/Haridas.jpg" },
  { name: "Inhoo", image: "/staff/Inhoo.jpg" },
  { name: "James", image: "/staff/James.jpg" },
  { name: "Mary", image: "/staff/Mary.jpg" },
  { name: "Michael", image: "/staff/Michael.jpg" },
  { name: "Neil", image: "/staff/Neil.jpg" },
  { name: "Nicholas", image: "/staff/Nicholas.jpg" },
  { name: "Olivia", image: "/staff/Olivia.jpg" },
  { name: "Reed", image: "/staff/Reed.jpg" },
  { name: "Sami", image: "/staff/Sami.jpg" },
  { name: "Vineet", image: "/staff/Vineet.jpg" },
];

export default function Organizers() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const handleScroll = () => setOffset(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <div>
                <h2 className="text-3xl font-black text-[#002E67] mb-10 border-b-2 border-[#155EA5]/30 pb-4 inline-block">
                    Organizers
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                    {ORGANIZERS_DATA.map(p => (
                        <div key={p.name} className="flex flex-col items-center text-center group">
                            <img 
                                src={p.image} 
                                alt={p.name} 
                                className="w-32 h-32 rounded-full object-cover border-4 border-[#002E67]/10 group-hover:border-[#002E67] transition-all duration-300 shadow-lg" 
                            />
                            {/* Uncommented the name so it shows up now! */}
                            <h3 className="font-bold text-xl text-[#002E67] mt-4">{p.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
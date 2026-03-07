"use client";

import React, { useState, useEffect } from "react";
import NavBar from '@/components/nav';

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
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden pb-24">
      <NavBar />

      <div className="pt-40 pb-16 px-6 md:px-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
              
              <div 
                  className="max-w-2xl relative z-10 text-center md:text-left"
                  style={{ transform: `translateY(${offset * 0.4}px)` }}
              >
                  <span className="text-blue-400 font-bold tracking-widest uppercase text-xs mb-3 block">
                      Behind GMC 2026
                  </span>
                  <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                      MEET THE TEAM
                  </h1>
                  <p className="text-blue-100/80 mt-4 text-lg font-medium">
                      GMC is entirely organized by high school students in Palo Alto, including Henry M. Gunn High School, and Palo Alto High School.
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

      <div className="px-6 md:px-20 py-10 max-w-7xl mx-auto relative z-10">
        <div className="space-y-20">
            <div>
                <h2 className="text-3xl font-black text-white mb-12 border-b-2 border-blue-400/50 pb-4 inline-block">
                    Organizers
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-8">
                    {ORGANIZERS_DATA.map(p => (
                        <div key={p.name} className="flex flex-col items-center text-center group">
                            <img 
                                src={p.image} 
                                alt={p.name} 
                                className="w-32 h-32 rounded-full object-cover border-4 border-white/10 group-hover:border-blue-400 transition-all duration-300 shadow-lg" 
                            />
                            <h3 className="font-bold text-xl text-white mt-4">{p.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
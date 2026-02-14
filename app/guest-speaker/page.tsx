"use client";

import React from "react";
import NavBar from '@/components/nav';
import { Heading1, Paragraph } from '@/components/headers';

export default function GuestSpeaker() {
  return (
    <main className="bg-[#e4efff] min-h-screen text-[#002e66] relative overflow-x-hidden">
      <NavBar />

      <div className="px-6 md:px-20 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8">
            <div>
                <span className="bg-[#004184] text-white font-bold px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-4 inline-block">
                    Guest Speaker 2026
                </span>
                <Heading1>Simon Rubinstein-Salzedo</Heading1>
                <div className="text-xl md:text-2xl font-bold text-[#002e66]/60 mt-2 mb-6">
                    Director of Euler Circle
                </div>
            </div>

            <Paragraph>
              Simon Rubinstein-Salzedo is the founder and director of Euler Circle, a mathematics institute dedicated to teaching college-level mathematics to advanced high-school students. He received his PhD in Mathematics from Stanford University in 2012.
            </Paragraph>
            
            <Paragraph>
              Beyond his work at Euler Circle, Simon is a dedicated mentor and researcher. He has coached the SFBA/NorCal ARML team to multiple national championships and previously taught at Stanford University and Dartmouth College. His research interests span number theory, algebraic geometry, combinatorics, and game theory.
            </Paragraph>
          </div>

          {/* Image Card */}
          <div className="w-full md:w-[400px] flex-shrink-0">
             <div className="bg-white p-4 rounded-3xl shadow-xl border border-white/50 rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100 relative">
                     <img 
                        src="/speakers/simon.jpg" 
                        alt="Simon Rubinstein-Salzedo"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/400x500/004184/FFF?text=Simon+RS";
                        }}
                     />
                </div>
                <div className="mt-4 text-center">
                    <div className="font-black text-xl text-[#002e66]">Dr. Simon Rubinstein-Salzedo</div>
                    <div className="text-sm font-bold text-[#002e66]/50">Mathematician & Educator</div>
                </div>
             </div>
          </div>

        </div>

        {/* Past Speakers Section */}
        <div className="mt-32 pt-16 border-t border-[#002e66]/10">
            <h2 className="text-3xl font-black text-[#002e66] mb-8">Past Speakers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#002e66]/5 opacity-70 hover:opacity-100 transition-opacity">
                    <div className="font-black text-lg text-[#002e66]">Po-Shen Loh</div>
                    <div className="text-sm text-[#002e66]/60">Carnegie Mellon University</div>
                    <div className="text-xs font-bold text-[#002e66]/40 mt-1">2025 Speaker</div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
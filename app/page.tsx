"use client";

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { Heading1, Heading2, Paragraph } from '../components/headers';
import NavBar from '@/components/nav';
import Sponsors from '@/components/Sponsors';

const InfoBlock = (props: { header: string; children: string }) => {
  return (
    <div className="flex-1 min-w-[200px] p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#0b0b45] transition-colors shadow-sm">
      <div className="text-xl font-bold text-gray-800 mb-1">{props.header}</div>
      <div className="text-gray-500 text-sm leading-tight">{props.children}</div>
    </div>
  );
};

const ScheduleItem = (props: { start: string, end: string, children: string, location?: string }) => {
  return (
    <div className="flex gap-8 pb-10 last:pb-0 relative">
      <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-gray-100" />
      <div className="z-10 w-6 h-6 rounded-full bg-white border-4 border-[#0b0b45] mt-1 flex-shrink-0" />
      <div className="flex-1">
        <div className="text-sm font-bold text-[#0b0b45] mb-1 uppercase tracking-wider">
          {props.start} — {props.end}
        </div>
        <div className="text-xl font-bold text-gray-800 leading-tight">{props.children}</div>
        {props.location && (
          <div className="text-gray-500 text-sm mt-1 font-medium tracking-wide">
             {props.location}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="bg-white min-h-screen text-gray-900 relative">
      <NavBar />
      
      {/* FLOATING ACTION BUTTONS */}
      <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-4 transition-all duration-300 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        
        {/* Register Now Floating Button */}
        <a 
          href="https://docs.google.com/document/d/1qopZbE5LUcpiWEU_osvv0JdezB_i2LFfhR9zKfjFtks/edit?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0b0b45] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-[#1a1a5e] hover:scale-105 transition-all flex items-center gap-2"
        >
          <span>Register Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>

        {/* Back to Top Button */}
        <button 
          onClick={scrollToTop}
          className="self-end bg-white text-[#0b0b45] p-3 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 hover:border-[#0b0b45] transition-all"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Parallax Hero Block in #0b0b45 */}
      <div className="bg-[#0b0b45] pt-40 pb-20 px-10 md:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          
          <div 
            className="relative z-10 max-w-2xl"
            style={{ transform: `translateY(${offset * 0.4}px)` }}
          >
            <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-3 block">Gunn High School Presents</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              GUNN MATH <br className="hidden md:block" /> COMPETITION
            </h1>
            
            <div className="flex flex-wrap gap-4 items-center text-white">
              <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 font-bold text-sm md:text-base backdrop-blur-sm">
                March 7th, 2026
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 font-bold text-sm md:text-base backdrop-blur-sm">
                8:30 AM - 4:30 PM
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-full border border-white/20 font-bold text-sm md:text-base backdrop-blur-sm">
                Gunn High School
              </div>
            </div>
          </div>

          <div 
            className="relative opacity-10 invisible lg:visible pr-10"
            style={{ transform: `translateY(${offset * -0.1}px)` }}
          >
             <Image src="/fsh.png" width={400} height={320} alt="GMC logo" className="object-contain brightness-0 invert" />
          </div>
        </div>
      </div>

      <div className="px-10 pb-16 pt-20 md:px-20 max-w-7xl mx-auto relative z-20 bg-white">
        {/* Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          <InfoBlock header="2 Divisions">Beginner & Advanced (AIME Qualifiers)</InfoBlock>
          <InfoBlock header="Free Lunch">For all competitors</InfoBlock>
          <InfoBlock header="3 Rounds">Individual, Guts, & Team</InfoBlock>
          <InfoBlock header="Over $7500">In prizes for top teams and individuals</InfoBlock>
          <InfoBlock header="Guest Speaker">Insight on real-world math applications</InfoBlock>
        </div>

        {/* Standard Buttons (Still keeping these as they are main page actions) */}
        <div className="flex flex-col md:flex-row gap-6 mb-20">
          <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/11Ac9OguL8Ay38kQBQwlAPb5WGqTtD8cD-7ZJ7YDiy_4/edit?usp=sharing" className="flex-1">
            <div className="text-center font-bold text-2xl py-6 rounded-2xl bg-[#0b0b45] text-white hover:bg-[#1a1a5e] hover:-translate-y-1 transition-all shadow-md">
              GMC Manual
            </div>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1qopZbE5LUcpiWEU_osvv0JdezB_i2LFfhR9zKfjFtks/edit?usp=sharing/" className="flex-1">
            <div className="text-center font-bold text-2xl py-6 rounded-2xl border-4 border-[#0b0b45] text-[#0b0b45] hover:bg-gray-50 hover:-translate-y-1 transition-all shadow-md">
              Registration
            </div>
          </a>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-20 py-20 border-t border-gray-100">
          <div className="space-y-12">
            <div>
              <Heading1>Registration</Heading1>
              <Paragraph>
                Create an account on ContestDojo as a student. Then register for &apos;GMC 2026&apos;, &apos;register without a coach&apos;. Scroll up to create a team. Only one person needs to create a team, and other members can join the team by entering the four-letter team code. 
              </Paragraph>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <Heading2>Divisions</Heading2>
              <Paragraph>
                The competition has 2 divisions, A and B. Division B will be for those who are relatively new to competition math. Division A will be for those who are familiar with competition math, and will thus have harder problems. Participants who have participated in the AIME must compete in Division A.
              </Paragraph>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <Heading2>Difficulty & Format</Heading2>
              <Paragraph>
                For Div. A, the difficulty ranges from early AMC 10 to late AIME. For Div. B, it ranges from AMC 8 to late AMC 10. Problems and test format will be finalized on Thursday, March 27th.
              </Paragraph>
              <ul className="space-y-4 font-bold text-[#0b0b45] mt-4">
                <li className="flex items-center gap-3 underline decoration-gray-200">Individual Round: 60 mins, 10 problems</li>
                <li className="flex items-center gap-3 underline decoration-gray-200">Team Round: 60 mins, 10 problems</li>
                <li className="flex items-center gap-3 underline decoration-gray-200">Guts Round: 75 mins, 30 problems total</li>
                <li className="flex items-center gap-3 underline decoration-gray-200">Tiebreaker: 15 mins, 3 problems</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="py-32 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <Heading1>Schedule</Heading1>
              <div className="italic text-gray-400 mt-2">Subject to change</div>
            </div>
            <ScheduleItem start="8:00" end="8:45" location="Bow Gym">Registration and Check-in</ScheduleItem>
            <ScheduleItem start="8:45" end="9:00" location="Bow Gym">Opening Ceremony</ScheduleItem>
            <ScheduleItem start="9:15" end="10:15" location="N-building">Individual Round</ScheduleItem>
            <ScheduleItem start="10:25" end="11:25" location="N-building">Team Round</ScheduleItem>
            <ScheduleItem start="11:30" end="12:15" location="Bow Gym">Lunch</ScheduleItem>
            <ScheduleItem start="12:30" end="14:00" location="Bow Gym">Guts Round</ScheduleItem>
            <ScheduleItem start="14:15" end="15:30" location="N-building">Activities / Tiebreaks</ScheduleItem>
            <ScheduleItem start="15:45" end="16:15" location="Bow Gym">Guest Speaker Talk</ScheduleItem>
            <ScheduleItem start="16:15" end="16:45" location="Bow Gym">Awards Ceremony</ScheduleItem>
          </div>
        </div>

        {/* Sponsors */}
        <div className="border-t border-gray-100 pt-32">
          <Sponsors />
        </div>
      </div>
    </main>
  );
}
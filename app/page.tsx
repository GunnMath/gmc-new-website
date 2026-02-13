"use client";

import React, { useState, useEffect } from "react";
import { Heading1, Heading2, Paragraph } from '../components/headers';
import NavBar from '@/components/nav';
import Sponsors from '@/components/Sponsors';

const InfoBlock = (props: { header: string; children: string }) => {
  return (
    <div className="flex-1 min-w-[200px] p-6 rounded-2xl border-2 border-navy/10 bg-white hover:border-navy transition-all shadow-sm text-center md:text-left group">
      <div className="text-xl font-black text-navy mb-1 group-hover:scale-105 transition-transform origin-left">{props.header}</div>
      <div className="text-navy/70 text-sm font-bold leading-tight">{props.children}</div>
    </div>
  );
};

export default function Home() {
  const [offset, setOffset] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      setOffset(window.scrollY);
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="bg-lightblue min-h-screen text-navy relative overflow-x-hidden">
      <NavBar />
      
      {/* FLOATING ACTION BUTTONS */}
      <div className={`fixed bottom-8 right-8 z-50 flex flex-col gap-4 transition-all duration-500 ease-out ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <a 
          href="https://contestdojo.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-navy text-white font-bold py-3 px-6 rounded-full shadow-xl hover:bg-[#001a3d] hover:scale-105 transition-all flex items-center gap-2 border-2 border-transparent"
        >
          <span>Register Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
        <button 
          onClick={scrollToTop}
          className="self-end bg-white text-navy p-3 rounded-full shadow-xl border-2 border-navy/10 hover:border-navy transition-all"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* HERO SECTION - FLYER STYLE */}
      <div className="bg-navy min-h-[95vh] relative overflow-hidden flex flex-col justify-center px-6 md:px-20 pt-20">
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-8xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* TEXT BLOCK */}
          <div 
            className={`flex flex-col gap-6 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            style={{ transform: `translateY(${offset * 0.2}px)` }}
          >
            <div className="inline-block">
              <span className="bg-white/10 text-blue-200 font-bold px-4 py-1 rounded-full text-xs tracking-widest uppercase mb-4 inline-block border border-white/20">
                Fifth Annual
              </span>
            </div>
            
            {/* UPDATED TITLE FORMATTING */}
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
              GUNN MATH<br />
              COMPETITION
            </h1>

            <div className="flex flex-col gap-2 text-white/80 font-bold text-lg md:text-xl mt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-1 bg-blue-400 rounded-full"></div>
                <span>Sunday, March 29th, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-1 bg-white/50 rounded-full"></div>
                <span>Gunn High School</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
               <a href="https://contestdojo.com/" className="bg-white text-navy font-black text-lg py-4 px-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-white/20 transition-all">
                 Register Now
               </a>
               <a href="#info" className="border-2 border-white/30 text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/10 transition-all">
                 Learn More
               </a>
            </div>
          </div>

          {/* IMAGE BLOCK */}
          <div 
            className={`relative flex justify-center md:justify-end transition-all duration-1000 delay-300 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transform: `translateY(${offset * -0.1}px)` }}
          >
             <div className="relative w-[350px] md:w-[500px] aspect-square">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl transform scale-90"></div>
                <img 
                  src="/fsh.png" 
                  alt="GMC logo" 
                  className="w-full h-full object-contain brightness-0 invert drop-shadow-2xl relative z-10" 
                />
             </div>
          </div>
        </div>
      </div>

      {/* INFO CARDS STRIP */}
      <div id="info" className="relative z-20 -mt-10 px-6 md:px-20 max-w-8xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <InfoBlock header="2 Divisions">Beginner & Advanced</InfoBlock>
          <InfoBlock header="Free Lunch">For all competitors</InfoBlock>
          <InfoBlock header="3 Rounds">Individual, Guts, & Team</InfoBlock>
          <InfoBlock header="Over $7500">In prizes for top teams</InfoBlock>
          <InfoBlock header="Guest Speaker">Real-world math applications</InfoBlock>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-6 md:px-20 py-24 max-w-7xl mx-auto space-y-24">
        
        {/* Registration Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                <Heading1>Registration</Heading1>
                <Paragraph>
                    Create an account on ContestDojo as a student. Then register for &apos;GMC 2026&apos;, &apos;register without a coach&apos;. Scroll up to create a team. Only one person needs to create a team, and other members can join the team by entering the four-letter team code.
                </Paragraph>
                <div className="flex gap-4">
                    <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/11Ac9OguL8Ay38kQBQwlAPb5WGqTtD8cD-7ZJ7YDiy_4/edit?usp=sharing" className="flex-1">
                        <div className="text-center font-bold text-xl py-4 rounded-xl bg-navy text-white hover:bg-[#001a3d] hover:-translate-y-1 transition-all shadow-lg">
                        Read Manual
                        </div>
                    </a>
                </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/50">
                <Heading2>Divisions</Heading2>
                <div className="space-y-6 mt-6">
                    <div className="p-4 bg-lightblue rounded-xl border border-navy/5">
                        <h3 className="font-black text-xl mb-2 text-navy">Division A</h3>
                        <p className="text-navy/70 font-medium">For experienced competitors. Difficulty ranges from early AMC 10 to late AIME. (Required for AIME qualifiers)</p>
                    </div>
                    <div className="p-4 bg-lightblue rounded-xl border border-navy/5">
                        <h3 className="font-black text-xl mb-2 text-navy">Division B</h3>
                        <p className="text-navy/70 font-medium">For students newer to competition math. Difficulty ranges from AMC 8 to late AMC 10.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Schedule Section */}
        <div>
            <div className="text-center mb-16">
              <h1 className="font-black text-5xl md:text-6xl text-navy">Schedule</h1>
              <div className="font-bold text-navy/40 mt-3 uppercase tracking-widest text-sm">Subject to change</div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-[150px_1fr_200px] border-b border-gray-100 bg-navy text-white font-bold p-4 md:px-8 hidden md:grid">
                    <div>TIME</div>
                    <div>EVENT</div>
                    <div className="text-right">LOCATION</div>
                </div>
                
                {/* Schedule Rows */}
                <div className="divide-y divide-gray-100">
                    {[
                        { time: "8:00 - 8:45", event: "Registration / Check-In", loc: "Bow Gym" },
                        { time: "8:45 - 9:00", event: "Opening Ceremony", loc: "Bow Gym" },
                        { time: "9:15 - 10:15", event: "Individual Round", loc: "N-Building" },
                        { time: "9:15 - 10:00", event: "Guest Speaker for Parents", loc: "Bow Gym", highlight: true },
                        { time: "10:25 - 11:25", event: "Team Round", loc: "N-Building" },
                        { time: "11:30 - 12:15", event: "Lunch", loc: "Bow Gym" },
                        { time: "12:30 - 14:00", event: "Guts Round", loc: "Bow Gym" },
                        { time: "14:15 - 15:30", event: "Activities / Tiebreakers", loc: "N-Building" },
                        { time: "15:45 - 17:30", event: "Activities Block 2", loc: "Bow Gym" },
                        { time: "17:30 - 18:00", event: "Awards Ceremony", loc: "Bow Gym" },
                    ].map((item, i) => (
                        <div key={i} className={`p-6 md:px-8 grid grid-cols-1 md:grid-cols-[150px_1fr_200px] gap-2 items-center hover:bg-blue-50 transition-colors ${item.highlight ? 'bg-blue-50/50' : ''}`}>
                            <div className="font-mono font-bold text-navy opacity-80">{item.time}</div>
                            <div className={`font-bold text-lg ${item.highlight ? 'text-blue-600' : 'text-navy'}`}>{item.event}</div>
                            <div className="text-navy/50 font-medium md:text-right">{item.loc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Sponsors */}
        <div className="pt-10">
          <Sponsors />
        </div>
      </div>
    </main>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavBar from '@/components/nav';
import Sponsors from '@/components/Sponsors';

const InfoBlock = (props: { header: string; children: string }) => {
  return (
    <div className="flex-1 min-w-[200px] p-6 rounded-2xl border-2 border-[#002E67]/10 bg-white hover:border-[#002E67] transition-all shadow-sm text-center md:text-left group relative z-10">
      <div className="text-xl font-bold text-[#002E67] mb-1 group-hover:scale-105 transition-transform origin-left">{props.header}</div>
      <div className="text-[#002E67]/80 text-sm font-medium leading-tight">{props.children}</div>
    </div>
  );
};

// Underwater Bubbles Component
const Bubbles = () => {
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
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden">
      <NavBar />
      <Bubbles />
      
      {/* FLOATING ACTION BUTTONS */}
      <div className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-4 transition-all duration-500 ease-out ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <a 
          href="https://contestdojo.com/register" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#002E67] text-white font-semibold py-3 px-6 rounded-full shadow-xl hover:bg-[#004080] hover:scale-105 transition-all flex items-center justify-center gap-2 border-2 border-transparent"
        >
          <span className="hidden md:inline">Register Now</span>
          <span className="md:hidden">Register</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
        <button 
          onClick={scrollToTop}
          className="self-end bg-white text-[#002E67] p-3 rounded-full shadow-xl border-2 border-[#002E67]/10 hover:border-[#002E67] transition-all"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="bg-[#002E67] min-h-[90vh] md:min-h-[85vh] relative overflow-hidden flex flex-col justify-center px-6 md:px-20 pt-32 pb-32">
        
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto w-full flex flex-col items-center justify-center relative z-10 mb-12">
          
          <div className={`flex flex-col gap-6 transition-all duration-1000 ease-out items-center text-center w-full ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block">
              <span className="bg-white/10 text-[#E4EFFF] font-semibold px-4 py-1.5 rounded-full text-sm md:text-base inline-block border border-white/20 shadow-sm">
                Fifth Annual
              </span>
            </div>
            
            {/* Centered Logo (Scaled Up) */}
            <div className="relative w-full max-w-[320px] sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] mx-auto my-4 md:my-8">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl transform scale-110 pointer-events-none"></div>
                <img 
                  src="/gmc.png" 
                  alt="Gunn Math Competition Logo" 
                  className="w-full h-auto object-contain brightness-0 invert drop-shadow-2xl relative z-10" 
                />
            </div>

            {/* Date and Location */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-blue-200 font-semibold text-lg md:text-xl mt-2">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    Sunday, March 29th, 2026
                </div>
                <span className="hidden sm:block opacity-50">•</span>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    Palo Alto, CA
                </div>
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className={`absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 hidden md:flex ${offset > 50 ? 'opacity-0' : 'opacity-100 animate-bounce'}`}>
            <span className="text-[#E4EFFF]/50 text-base font-semibold mb-2">Scroll</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="rgba(228, 239, 255, 0.5)" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
      </div>

      {/* WAVE TRANSITION */}
      <div className="w-full bg-[#002E67] -mb-1 relative z-20">
        <img 
          src="/wave.png" 
          alt="Wave Transition" 
          className="w-full h-auto block select-none" 
        />
      </div>

      {/* Event Info & Registration */}
      <div className="bg-[#001332] py-16 px-6 md:px-20 text-center relative z-20">
        <div className="max-w-5xl mx-auto space-y-10">
            
            <p className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#E4EFFF] opacity-95 leading-tight px-4">
               The premier high school-run math contest on the West Coast, with 250+ annual attendees.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full flex-wrap">
               <a href="https://contestdojo.com/register" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-white text-[#002E67] font-semibold text-lg sm:text-xl py-4 px-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-white/20 transition-all flex items-center justify-center relative z-10">
                 Register Now
               </a>
               <Link href="/registration-info" className="w-full sm:w-auto bg-blue-600/30 border-2 border-blue-400/50 text-[#E4EFFF] font-semibold text-lg sm:text-xl py-4 px-8 rounded-xl hover:bg-blue-600/50 transition-all flex items-center justify-center relative z-10">
                 How to Register
               </Link>
               <Link href="/schedule" className="w-full sm:w-auto border-2 border-white/30 text-[#E4EFFF] font-semibold text-lg sm:text-xl py-4 px-8 rounded-xl hover:bg-white/10 transition-all relative z-10">
                 View Schedule
               </Link>
            </div>
        </div>
      </div>

      {/* INFO CARDS */}
      <div id="info" className="px-6 md:px-20 max-w-8xl mx-auto mt-4 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <InfoBlock header="2 Divisions">Beginner &amp; Advanced</InfoBlock>
          <InfoBlock header="Free Lunch">For all competitors</InfoBlock>
          <InfoBlock header="3 Rounds">Individual, Guts, &amp; Team</InfoBlock>
          <InfoBlock header="Over $7500">In prizes for top teams</InfoBlock>
          <InfoBlock header="Guest Speaker">Real-world math applications</InfoBlock>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="px-6 md:px-20 py-24 max-w-7xl mx-auto relative z-20">

        {/* Registration Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Registration</h2>
                <div className="text-lg opacity-90 leading-relaxed font-medium">
                    Create an account on ContestDojo as a student. Then register for &apos;GMC 2026&apos;, &apos;register without a coach&apos;. Scroll up to create a team. Only one person needs to create a team, and other members can join the team by entering the four-letter team code.
                </div>

                <div className="text-lg opacity-90 leading-relaxed font-medium">
                    <b>Registration deadline is Monday, March 23rd, 11:59pm PDT or when there are 272 signups. </b>
                </div>

                <div className="flex gap-4">
                    <Link href="/registration-info" className="flex-1 relative z-10">
                        <div className="text-center font-semibold text-xl py-4 rounded-xl bg-[#002E67] text-white hover:bg-[#004080] hover:-translate-y-1 transition-all shadow-lg border border-white/20">
                        Registration Info
                        </div>
                    </Link>
                </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-white/50 text-[#002E67]">
                <h2 className="text-3xl font-bold mb-4">Divisions</h2>
                <div className="space-y-6 mt-6">
                    <div className="p-4 bg-[#001332]/5 rounded-xl border border-[#002E67]/5">
                        <h3 className="font-bold text-2xl mb-2">Division A</h3>
                        <p className="font-medium opacity-80 leading-relaxed">For experienced competitors. Difficulty ranges from mid-AMC 10 to late AIME. (Required for AIME qualifiers)</p>
                    </div>
                    <div className="p-4 bg-[#001332]/5 rounded-xl border border-[#002E67]/5">
                        <h3 className="font-bold text-2xl mb-2">Division B</h3>
                        <p className="font-medium opacity-80 leading-relaxed">For students newer to competition math. Difficulty ranges from AMC 8 to late AMC 10.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Shortened Schedule Section */}
        <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="font-bold text-5xl md:text-6xl text-[#E4EFFF]">Schedule</h2>
              <Link href="/schedule" className="group text-blue-400 hover:text-blue-300 transition-colors font-semibold text-lg md:text-xl mt-4 inline-flex items-center justify-center gap-2 relative z-10">
                View In-Depth Schedule 
                <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </Link>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-white/50 relative z-10 max-w-4xl mx-auto">
                <div className="divide-y divide-gray-100">
                    {[
                        { time: "8:00 AM", event: "Registration & Check-In" },
                        { time: "9:15 AM", event: "Individual & Team Rounds" },
                        { time: "11:30 AM", event: "Lunch (Free for Competitors)" },
                        { time: "12:30 PM", event: "Guts Round" },
                        { time: "2:15 PM", event: "Activities & Tiebreakers" },
                        { time: "5:30 PM", event: "Awards Ceremony" },
                    ].map((item, i) => (
                        <div key={i} className="p-5 md:px-8 grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-4 items-center hover:bg-blue-50 transition-colors">
                            <div className="font-semibold text-[#002E67] opacity-80 text-lg md:text-xl">{item.time}</div>
                            <div className="font-semibold text-lg md:text-xl text-[#002E67]">{item.event}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* LOCATION / MAP SECTION */}
        <div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-white/50 p-2 md:p-3 relative z-10">
               <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="p-6 md:p-10 text-[#002E67]">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4">Location</h2>
                      <p className="text-xl md:text-2xl font-bold mb-2">Henry M. Gunn High School</p>
                      <p className="text-lg opacity-80 mb-8 font-medium">
                        780 Arastradero Road<br/>
                        Palo Alto, CA 94306
                      </p>
                      <Link href="/map" className="inline-flex bg-[#002E67] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#004080] hover:-translate-y-1 transition-all shadow-lg items-center gap-2">
                          View Campus Map
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                      </Link>
                  </div>
                  <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-inner">
                      <iframe 
                        // Clean embed pointing perfectly at Gunn High School using Google Maps query logic
                        src="https://maps.google.com/maps?q=Henry%20M.%20Gunn%20High%20School,+Palo+Alto&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </div>
               </div>
            </div>
        </div>

      </div>

      {/* REVERSE WAVE TRANSITION */}
      <div className="w-full bg-[#001332] relative z-20">
        <img 
          src="/reversewave.png" 
          alt="Wave Transition" 
          className="w-full h-auto block select-none" 
        />
      </div>

      {/* SPONSORS SECTION */}
      <div className="bg-[#E3EEFE] pt-10 pb-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <Sponsors />
        </div>
      </div>
    </main>
  );
}
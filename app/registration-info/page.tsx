"use client";
import React from "react";
import NavBar from '@/components/nav';
import Bubbles from '@/components/Bubbles';

export default function RegistrationInfoPage() {
  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <Bubbles />
      <div className="px-6 md:px-20 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 text-white">Registration Info</h1>
            <p className="text-xl font-semibold opacity-80">Everything you need to know to secure your spot at GMC 2026.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white text-[#002E67] p-6 rounded-3xl shadow-xl border border-white/50">
                <div className="font-bold text-2xl mb-2">Deadline</div>
                <div className="font-semibold opacity-80">We have reached full capacity and unfortunately we are no longer able
                    to take signups via ContestDojo.<br/> 
                    If you are still interested, please fill out the <a href="https://forms.gle/mkrNofGv9cnYCAEr7" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }} >waitlist form.</a>
                    </div>
            </div>
            <div className="bg-white text-[#002E67] p-6 rounded-3xl shadow-xl border border-white/50">
                <div className="font-bold text-2xl mb-2">Eligibility</div>
                <div className="font-semibold opacity-80">All students currently in Grade 12 or below.</div>
            </div>
            <div className="bg-white text-[#002E67] p-6 rounded-3xl shadow-xl border border-white/50">
                <div className="font-bold text-2xl mb-2">Cost</div>
                <div className="font-semibold opacity-80">Completely FREE!<br/>(Optional $20 donation appreciated)</div>
            </div>
        </div>

        <div className="bg-white text-[#002E67] p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50">
            <h2 className="text-3xl font-black mb-8 border-b border-[#002E67]/10 pb-4">Joining the Waitlist</h2>
            
            <div className="space-y-8">
                <div className="flex gap-4 md:gap-6">
                    <div>
                      <p className="font-semibold opacity-80 mb-3"> All 272 spots have been filled up for the 2026th Gunn Math Competition. If you are still interested in competing this year, please consider joining the waitlist! 
                        There is no guarantee that joining the waitlist means that you will get a spot. The waitlist will close on Tuesday March 24th, 2026 at 11:59 PM PST and people who get off the waitlist will be notified on the following day on Wednesday March 25th, 2026. 
                        It is first come first serve.</p>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#002E67]/10 text-center">
                <a href="https://forms.gle/MDtV9LQ2k2QAer8h8" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#002E67] text-white font-semibold text-xl py-4 px-10 rounded-xl shadow-lg hover:scale-105 hover:bg-[#004080] transition-all">
                    Join the Waitlist &rarr;
                </a>
            </div>
        </div>
      </div>
    </main>
  );
}

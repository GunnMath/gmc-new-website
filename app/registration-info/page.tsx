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
                <div className="font-semibold opacity-80">March 25th, 2026<br/>at 11:59 PM PST</div>
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
            <h2 className="text-3xl font-black mb-8 border-b border-[#002E67]/10 pb-4">How to Register</h2>
            
            <div className="space-y-8">
                <div className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#002E67] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">1</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Create a ContestDojo Account</h3>
                        <p className="font-semibold opacity-80">Visit <a href="https://contestdojo.com/register" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">contestdojo.com/register</a> and select the &quot;Student&quot; account type to create your profile.</p>
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#002E67] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">2</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Register for GMC 2026</h3>
                        <p className="font-semibold opacity-80 mb-3">Log in to your account. Under &quot;Events Accepting Registrations,&quot; locate <strong>GMC 2026</strong> and click Register. You will be prompted to enter:</p>
                        <ul className="list-disc list-inside space-y-1 font-semibold opacity-80 ml-2">
                            <li>Your grade level</li>
                            <li>T-shirt size</li>
                            <li>Dietary restrictions</li>
                            <li><strong>Division:</strong> Choose Division A (experienced / AIME qualifiers) or Division B (newer to competition math).</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#002E67] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">3</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Sign the Digital Waiver</h3>
                        <p className="font-semibold opacity-80">Your registration is not complete until your waiver is signed! After submitting your details, your parent/guardian will receive an email from ContestDojo containing a secure link to digitally sign the medical and media release waiver.</p>
                    </div>
                </div>

                <div className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#002E67] text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">4</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Form Your Team</h3>
                        <p className="font-semibold opacity-80">Go back to your event dashboard. You can click <strong>Create Team</strong> to generate a unique 4-letter team code, or click <strong>Join Team</strong> if a teammate has already given you a code. Teams can have a maximum of 4 students.</p>
                        <p className="font-bold opacity-100 mt-2">
                            * Incomplete teams with less than 4 people may be/are likely to be merged to form complete teams of 4, and emails + assignments will go out on Sunday, March 22nd. Any registrations after that date are not guaranteed to be full. If you have a group of 2 people, please register together as a team so that you can be guaranteed to be placed on the same team as your friend.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#002E67]/10 text-center">
                <a href="https://contestdojo.com/register" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#002E67] text-white font-semibold text-xl py-4 px-10 rounded-xl shadow-lg hover:scale-105 hover:bg-[#004080] transition-all">
                    Register on ContestDojo Now &rarr;
                </a>
            </div>
        </div>
      </div>
    </main>
  );
}
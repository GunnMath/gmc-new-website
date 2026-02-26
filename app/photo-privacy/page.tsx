"use client";
import React from "react";
import NavBar from '@/components/nav';

export default function PhotoPrivacyPage() {
  return (
    <main className="bg-[#E4EFFF] min-h-screen text-[#002E67] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <div className="px-6 md:px-20 max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">Photo Privacy Policy</h1>
            <p className="text-xl font-bold opacity-70">A summary of our media consent and release guidelines.</p>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-[#002E67]/10 space-y-8">
            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="font-bold text-lg text-[#155EA5]">
                    Note: By participating in the Gunn Math Competition, all attendees and their parents/guardians electronically agree to the full Media Consent and Release terms via the ContestDojo waiver system during registration.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#002E67]">1. Photography & Videography at GMC</h2>
                <p className="text-[#002E67]/80 font-medium leading-relaxed">
                    During the competition, the Gunn Math Competition (GMC) and its authorized agents may take photographs, digital images, and video recordings of the event. Participants may be included in these media assets in whole or in part.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#002E67]">2. Usage of Media</h2>
                <p className="text-[#002E67]/80 font-medium leading-relaxed">
                    We reserve the right to use these photographs and recordings for lawful purposes. This includes, but is not limited to, using the media in future event publications, brochures, promotional materials, advertisements, and directly on the official GMC website.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#002E67]">3. Compensation & Approval</h2>
                <p className="text-[#002E67]/80 font-medium leading-relaxed">
                    All media is captured and utilized without any payment or other forms of compensation to the participants. Furthermore, parents and guardians waive the right to inspect or approve the finished photo or video product prior to its use or publication.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-black text-[#002E67]">4. Liability Release</h2>
                <p className="text-[#002E67]/80 font-medium leading-relaxed">
                    By authorizing the use of these materials, parents and guardians agree to release, discharge, and hold harmless the Gunn Math Competition and its agents from any claims or demands arising from the use of the images. This includes any liability resulting from accidental blurring, optical illusions, or distortions that may naturally occur during the capture, processing, or digital publication of the media.
                </p>
            </div>
        </div>
      </div>
    </main>
  );
}
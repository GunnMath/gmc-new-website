"use client";
import React from "react";
import NavBar from '@/components/nav';

export default function MissionPage() {
  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <div className="px-6 md:px-20 max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-black mb-10 text-center tracking-tight text-white">Our Mission</h1>
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-white/50 text-[#002E67] text-lg md:text-xl font-medium leading-relaxed space-y-6">
            <p>
                In 2022, GMC was founded by Gunn students to provide middle and high school students with enriching math problems typically not found in school curricula. 
            </p>
            <p>
                Now, encompassing an annual tournament, internationally renowned guest speakers, dozens of staff members from local high schools, and hundreds of attendees across multiple states, GMC has expanded to become the largest high-school-run math tournament on the West Coast.
            </p>
            <p className="italic font-bold text-blue-800 text-xl md:text-2xl pt-4 border-t border-[#002E67]/10">
                Although we have grown from the Zoom experience years ago, our mission remains the same: to make advanced, enriching mathematics accessible, engaging, and fun for every student.
            </p>
        </div>
      </div>
    </main>
  );
}
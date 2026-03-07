"use client";

import React from "react";
import NavBar from '@/components/nav';
import Reg from '@/components/reg'; // Assuming your registration text is in this component

export default function RegistrationInfoPage() {
  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <div className="px-6 md:px-20 max-w-5xl mx-auto relative z-10">
        
        <h1 className="text-5xl md:text-6xl font-black mb-10 text-center tracking-tight text-white">
            Registration Info
        </h1>
        
        {/* Wraps your existing Reg component in a white card so the text contrast is perfect */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 text-[#002E67]">
          <Reg />
        </div>

      </div>
    </main>
  );
}
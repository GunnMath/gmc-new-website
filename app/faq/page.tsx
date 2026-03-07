"use client";

import React from "react";
import NavBar from '@/components/nav';
import FAQ from '@/components/FAQ';

export default function FAQPage() {
  return (
    <main className="bg-[#001332] min-h-screen text-[#E4EFFF] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <div className="px-6 md:px-20 max-w-5xl mx-auto bg-white text-[#002E67] p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 relative z-10">
        <FAQ />
      </div>
    </main>
  );
}
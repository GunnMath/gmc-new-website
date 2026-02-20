"use client";

import React from "react";
import NavBar from '@/components/nav';
import FAQ from '@/components/FAQ';

export default function FAQPage() {
  return (
    <main className="bg-[#E4EFFF] min-h-screen text-[#002E67] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <div className="px-6 md:px-20 max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#002E67]/10">
        <FAQ />
      </div>
    </main>
  );
}
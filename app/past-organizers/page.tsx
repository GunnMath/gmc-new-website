"use client";
import React from "react";
import NavBar from '@/components/nav';

export default function PastOrganizersPage() {
  return (
    <main className="bg-[#E4EFFF] min-h-screen text-[#002E67] relative overflow-x-hidden pt-32 pb-20">
      <NavBar />
      <div className="px-6 md:px-20 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-8">Past Organizers</h1>
        <div className="bg-white p-12 rounded-3xl shadow-xl border border-[#002E67]/10 font-bold text-xl opacity-60">
            Information coming soon...
        </div>
      </div>
    </main>
  );
}